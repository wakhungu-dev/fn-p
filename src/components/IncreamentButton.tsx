"use client";
import { incrementQuantity } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import React from 'react'

interface IncreamentButtonProps {
    children: React.ReactNode,
    id: string
    className?: string
    
}

 export const IncreamentButton  = ({children, id, className}: IncreamentButtonProps) => {
    const dispatch = useAppDispatch();

    const handleIncrement = () => {
        dispatch(incrementQuantity(id as string));
    };
  return (
    <button onClick={handleIncrement} >
      {children}
    </button>

    
  )
}
