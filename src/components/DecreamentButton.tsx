"use client";
import { decrementQuantity } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import React from 'react'

interface DecreamentButtonProps {
    children: React.ReactNode,
    id: string
    className?: string
    
}

 export const DecreamentButton  = ({children, id, className = ''}: DecreamentButtonProps) => {
    const dispatch = useAppDispatch();

    const handleDecrement = () => {
        dispatch(decrementQuantity(id as string));
    };
  return (
    <button onClick={handleDecrement} className={`${className}`} >
      {children}
    </button>

    
  )
}
