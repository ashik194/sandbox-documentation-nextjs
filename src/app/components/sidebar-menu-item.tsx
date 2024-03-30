'use client'
import React, { useState } from "react"
import Link from "next/link"
import { SideNavItem } from "../../../types/type"
import { FaChevronRight } from "react-icons/fa"; 
import { usePathname } from "next/navigation";

export const SideBarMenuItem = ({ item } : {item : SideNavItem}) => {
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const handleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen)
    }
    const pathName = usePathname();
    const linkStyle = "flex items-center min-h-[40px] h-full text-gray-400 py- px-4 hover:text-white transition duration-200";
    const activeLinkStyle = "rounded-md text-white bg-[#3a3f48]"
    const navDropdown = "text-gray-300 py-2 px-4 hover:text-white transition duration-200";
    return (
        <>
            {
                item.submenu 
                ? 
                (<div className="rounded-md min-w-[18px]">
                    <a  className={`${linkStyle} ${pathName.includes(item.path)?activeLinkStyle:''}`} onClick={handleSubMenu}>
                        {item.icon}
                        <span className="ml-3 leading-6 font-semibod text-base font-semibold">{item.title}</span>
                        <FaChevronRight className="ml-auto stroke-2 text-xs" />
                    </a>
                    {subMenuOpen && <div className="bg-[#1e2f4b] border-l-4">
                        <div className="grid gap-y-2 px-10 py-3 leading-5">
                            {
                                item.subMenuItems.map((subItem, index) => {
                                    return (
                                        <Link key={index} href={subItem.path} className={`${navDropdown} ${subItem.path===pathName?"text-white":""}`}>
                                            <span className="">{subItem.title}</span>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>}
                </div>) 
                : 
                (<Link href={item.path} className={`${linkStyle} ${item.path===pathName?activeLinkStyle:''}`}>
                    {item.icon}
                    <span className="ml-3 leading-6 font-semibod">{item.title}</span>
                </Link>)
            }
        </>
    )
}