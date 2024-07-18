import React from 'react';

// Define the props type for the FeatureCard component
interface PropsType {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<PropsType> = ({ icon, title, description }) => {
    return (
        <div className='flex gap-2 bg-gray-100 px-4 py-6'>
            {icon}
            <div>
                <h2 className='text-lg font-medium xl'>{title}</h2>
                <p className='text-sm'>{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
