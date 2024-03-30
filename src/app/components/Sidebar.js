'use client'
import Image from 'next/image'
import React from 'react'
import { FiAirplay } from "react-icons/fi";
import { SIDENAV_ITEMS } from '../../../SIDEBAR_CONSTANTS';
import { SideBarMenuItem } from './sidebar-menu-item';

function Sidebar({toggleCollapse}) {
  return (
    <aside className={`sidebar overflow-y-auto overflow-x-auto fixed bg-[#121C2D] text-gray-500 z-[999999] h-full shadow-lg shadow-gray-900/20 transition duration-300 ease-in-out ${toggleCollapse?'min-w-[5rem]':'min-w-[20rem]'}`}>
        <div className='flex relative items-center py-5 px-3.5'>
            {/* <Image alt="" src="" className='w-12 mx-3.5 min-h-fit' width={35} height={35}></Image> */}
            <FiAirplay className='w-12 mx-3.5 min-h-fit text-white' width={35} height={35} />
            <h3 className='pl-2 font-bold text-2xl text-[#e6e9ee min-w-max'>Sandbox</h3>
        </div>
        <nav className='flex flex-col gap-2 transition duration-300'>
            <div className='flex flex-col gap-2 px-4'>
            {
                SIDENAV_ITEMS.map((item, index) => {
                    return <SideBarMenuItem item={item} key={index}></SideBarMenuItem>
                })
            }
            </div>
        </nav>
    </aside>
  )
}

export default Sidebar