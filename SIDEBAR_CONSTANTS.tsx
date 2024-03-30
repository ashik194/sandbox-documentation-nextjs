import React from "react";
import { SideNavItem } from "./types/type";
import { FaHouse } from "react-icons/fa6";
import { SiApollographql } from "react-icons/si";
import { VscReferences } from "react-icons/vsc";

export const SIDENAV_ITEMS:SideNavItem[] = [
    {
        title: "Dashboard",
        path: "/",
        icon: <FaHouse size={20}/>
    },
    {
        title: "Api Overview",
        path: "/api",
        icon: <SiApollographql size={20}/>
    },
    {
        title: "References",
        path: "/api/references",
        icon: <VscReferences size={20}/>,
        submenu: true,
        subMenuItems: [
            { title: "Messages", path: "/api/references" },
            { title: "New Message", path: "/api/references/new" }
        ]
    },
    {
        title: "Dashboard",
        path: "/",
        icon: <FaHouse size={20}/>
    },
]