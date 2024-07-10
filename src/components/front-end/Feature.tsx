import FeatureCard from './FeatureCard';
import{TbTruckDelivery ,TbDiscount2 } from 'react-icons/tb';
import {RiRefund2Fill} from 'react-icons/ri';
import {mdSupportAgent} from 'react-icons/md';

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
        icon: <TbDiscount2 className='text-4xl' />,
        title: 'Discount',
        description: 'Get discount on all products'
    },
    {
        icon: <mdSupportAgent className='text-4xl' />,
        title: 'Support 24/7',
        description: 'Contact us anytime'
    },

]
const
