
'use client'
import React, { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";

function Header() {
  const [toggleClick, setToggleClick] = useState(false)
  const toggleHandle = () => {
    setToggleClick(!toggleClick);
  }
  return (
    <header className={`fixed bg-[#121C2D] w-full z-0 px-4 shadow-sm shadow-slate-500/40 ${toggleClick?'pl-[5.3rem]':'pl-[20rem]'}`}>
        <div className='flex items-center justify-between h-16'>
            <button onClick={toggleHandle} className='bg-[#3a3f48] text-[#6e768e] px-2 hover:bg-white ml-3 rounded-md h-[30px] shadow-md shadow-black/10 transition duration-300 ease-in-out flex items-center justify-center'>
                <FiAlignJustify />
            </button>
        <div className='h-10 w-10 rounded-full bg-[#3a3f48] flex items-center justify-center text-center'>
            <span className='font-semibold text-sm text-white'>BOX</span>
        </div>
        </div>

    </header>
  )
}

export default Header