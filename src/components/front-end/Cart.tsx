import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useAppSelector } from "@/redux/hooks";
import CartProduct from "@/components/front-end/CartProduct";
import { Iproduct } from "@/types/core";
import toast from "react-hot-toast";

interface PropsType {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart: React.FC<PropsType> = ({ setShowCart }) => {
  const { items: products } = useAppSelector((state) => state.cart);
  const [firstName, setFirstName] = React.useState<string>('');
  const [lastName, setLastName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [phoneNumber, setPhoneNumber] = React.useState<string>('');
  const [address, setAddress] = React.useState<string>('');
  const [city, setCity] = React.useState<string>('');
  const [postalCode, setPostalCode] = React.useState<string>('');
  const [deliveryNotes, setDeliveryNotes] = React.useState<string>('');
  const [processing, setProcessing] = React.useState<boolean>(false);

  const getTotal = () => {
    let total = 0;
    products.forEach((item: Iproduct) => {
      total += (item.price.amount * item.quantity) as number;
    });
    return total;
  };

  const handleCheckout = async () => {
    if (!firstName || !lastName || !email || !phoneNumber || !address || !city) {
      toast.error('Please complete all required checkout fields.');
      return;
    }

    if (!/^(?:\+254|254|0)?(7|1)\d{8}$/.test(phoneNumber)) {
      toast.error('Please enter a valid MPESA phone number.');
      return;
    }

    setProcessing(true);

    try {
      const response = await fetch('/api/payment/stkpush', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: getTotal(),
          phone: phoneNumber,
          customerName: `${firstName} ${lastName}`,
          email,
          address,
          city,
          postalCode,
          deliveryNotes,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to initiate payment');
      }

      const data = await response.json();
      if (data?.error) {
        throw new Error(data.error?.message || 'Payment failed');
      }

      toast.success('Checkout initiated successfully. Please confirm payment on your phone.');
      setShowCart(false);
    } catch (error: any) {
      toast.error(error?.message || 'Failed to initiate checkout.');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-scroll">
      <div className="max-w-[420px] w-full bg-white absolute right-0 top-0 p-6">
        <div>
          <RxCross1
            className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
            onClick={() => setShowCart(false)}
          />
          <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase tracking-wider border-b-2 border-gray-200 pb-3 mb-4 flex items-center justify-between shadow-sm">
            <span className="relative">
              Your Cart
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-accent transform origin-left transition-all duration-300 ease-in-out"></span>
            </span>
          </h3>
          <div className="mt-6 space-y-3">
            {products?.map((item: any) => (
              <CartProduct key={item._id} {...item} />
            ))}
          </div>
          <div className="flex justify-between items-center font-medium text-xl py-4">
            <p>Total:</p>
            <p>Ksh{getTotal()}.00</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Delivery Address</h3>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                type="text"
                placeholder="Delivery address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  type="text"
                  placeholder="Postal code"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </div>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                type="tel"
                placeholder="MPESA phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Delivery notes (optional)"
                value={deliveryNotes}
                onChange={(e) => setDeliveryNotes(e.target.value)}
                rows={3}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleCheckout}
            disabled={processing}
            className="mt-6 w-full bg-black text-white rounded-3xl py-3 text-center hover:bg-accent disabled:opacity-60"
          >
            {processing ? 'Processing...' : `Pay Ksh${getTotal()}.00`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
