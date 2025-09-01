import React, { useState } from 'react';
import axios from 'axios';

const Payment: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handlePayment = async () => {
        setLoading(true);
        setMessage('');

        try {
            const response = await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
                BusinessShortCode: process.env.REACT_APP_BUSINESS_SHORT_CODE || '174379',
                Password: process.env.REACT_APP_MPESA_PASSWORD,
                Timestamp: process.env.REACT_APP_TIMESTAMP,
                TransactionType: 'CustomerPayBillOnline',
                Amount: amount,
                PartyA: phoneNumber,
                PartyB: '174379',
                PhoneNumber: phoneNumber,
                CallBackURL: 'YOUR_CALLBACK_URL',
                AccountReference: 'YOUR_ACCOUNT_REFERENCE',
                TransactionDesc: 'Payment for goods'
            }, {
                headers: {
                    Authorization: `Bearer YOUR_ACCESS_TOKEN`
                }
            });

            setMessage('Payment initiated successfully');
        } catch (error) {
            setMessage('Payment failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Checkout</h2>
            <input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
                type="text"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handlePayment} disabled={loading}>
                {loading ? 'Processing...' : 'Pay Now'}
            </button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Payment;