"use client"
import Sidebar from '@/components/admin-panel/AdminSidebar';
import Loader from '@/components/admin-panel/Loader';
import Login from '@/components/admin-panel/Login';
import { useAppSelector } from '@/redux/hooks'
import { useSession } from 'next-auth/react'
import React, { ReactNode } from 'react'


interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const isLoading = useAppSelector(store => store.loading)
    const { data: session } = useSession()

    if (!session?.user) {
        return <Login />
    }

    return (
        <div className='flex'>
           <Sidebar  /> 
           <div className='w-full h-full'>
               {/* <Navbar /> */}
               <div className='bg-gray-200 p-4 h-[calc(100vh-64px)]'>{children}</div>
            </div>
            {isLoading && <Loader />}
        </div>
    )
}

export default Layout
