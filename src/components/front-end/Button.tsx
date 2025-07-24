import React from 'react';

interface NewsletterButtonProps {
    onClick?: () => void;
}

const NewsletterButton: React.FC<NewsletterButtonProps> = ({ onClick }) => (
    <button
        style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
        }}
        onClick={onClick}
    >
        Sign Up for Newsletter
    </button>
);

export default NewsletterButton;