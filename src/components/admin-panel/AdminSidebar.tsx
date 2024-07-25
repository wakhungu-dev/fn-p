import React from 'react';
import { MdDashboard, MdManageAccounts } from 'react-icons/md';
import { GrTransaction } from 'react-icons/gr';
import { IoAnalytics, IoSettings } from 'react-icons/io5';
import { RiShoppingCart2Line } from 'react-icons/ri';
import Link from 'next/link'; // Correct usage of Link
import { usePathname } from 'next/navigation'; // Ensure this import path is correct for your Next.js version
import Image from 'next/image';

const Sidebar = () => {
  const pathName = usePathname();

  const menus = [
    {
      title: 'Dashboard',
      icon: <MdDashboard />,
      href: '/admin',
    },
    {
      title: 'Products',
      icon: <RiShoppingCart2Line />,
      href: '/admin/products',
    },
    {
      title: 'Accounts',
      icon: <MdManageAccounts />,
      href: '/admin/accounts',
    },
    {
      title: 'Transactions',
      icon: <GrTransaction />,
      href: '#',
    },
    {
      title: 'Analytics',
      icon: <IoAnalytics />,
      href: '#',
    },
    {
      title: 'Settings',
      icon: <IoSettings />,
      href: '#',
    },
  ];

  return (
    <div className='bg-white w-[300px] min-h-screen p-4 shrink-0'>
      <div className='flex items-center gap-4'>
        <Image width={100} height={100} className='size-12 rounded-lg' src='/logo.jpg' alt='logo' />
        <h2 className='text-[20px] font-semibold'>Lynrose_collection</h2>
      </div>
      <ul className='space-y-4 mt-6'>
        {menus.map(menu => (
          <Link
            key={menu.title}
            href={menu.href}
            className={`flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:bg-pink hover:text-white ${
              pathName === menu.href ? 'bg-pink text-white' : 'bg-gray-200'
            }`}
          >
            <div className='text-[20px]'>{menu.icon}</div>
            <p>{menu.title}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
