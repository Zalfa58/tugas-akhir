"use client";
import React from "react";
import {
    SidebarWrapper,
    SidebarHeader,
    NavItem,
} from "./navbar.styled"
import Link from "next/link";

export default function Navbar() {    
    const handleItemClick = (item: string) => {
      // Lakukan sesuatu ketika item di sidebar diklik
        console.log(`Item ${item} diklik`);
    };
    return(
        <SidebarWrapper>
            <SidebarHeader>Navigation</SidebarHeader>
            <Link href={""}>
                <NavItem onClick={() => handleItemClick('Item 1')}>Gallery</NavItem>
            </Link>
            <Link href={''}>
                <NavItem onClick={() => handleItemClick('Item 2')}>Upload</NavItem>
            </Link>
            <Link href={'/'}>
                <NavItem onClick={() => handleItemClick('Item 3')}>Log-Out</NavItem>
            </Link>
            {/* Tambahkan item sidebar lainnya sesuai kebutuhan */}
        </SidebarWrapper>
    );
}