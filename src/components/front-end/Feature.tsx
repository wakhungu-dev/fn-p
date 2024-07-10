import FeatureCard from './FeatureCard';
import{TbTruckDelivery ,TbDiscount } from 'react-icons/tb';
import {RiRefund2Fill} from 'react-icons/ri';
import { MdSupportAgent } from 'react-icons/md'; 
const data =[
    {
        icon: <TbTruckDelivery className='text-4xl' />,
        title: 'Free Delivery',
        description: 'Free delivery on all orders'
    },
    {
        icon: <RiRefund2Fill className='text-4xl' />,
        title: 'Return $ Refund',
        description: 'Return product within 30 days'
    },
    {
        icon: <TbDiscount className='text-4xl' />,
        title: 'Discount',
        description: 'Get discount on all products'
    },
    {
        icon: <mdSupportAgent className='text-4xl' />,
        title: 'Support 24/7',
        description: 'Contact us anytime'
    },

]
const Feature = () => {
return(
    <div className='container grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mt-8'>
        {data.map((item) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
        ))}
        </div>
)

}
export default Feature;
