"use client"
import React, { useEffect, useState } from 'react'
import { ThemeToggler } from './ThemeToggler'
import { Logo } from './Logo'
import { Nav } from './Nav'
import { MobileNav } from './MobileNav'
const Header = () => {
    return (
        <>
            <header>
                <div className="container mx-auto"></div>
                <div className='flex justify-between items-center'>
                    <Logo />
                    <div className='flex items-center gap-6'>
                        <Nav containerStyles= {'hidden xl:flex gap-x-8 items-center'} linkStyles={'relative hover:text-primary transition-all'} underlineStyles ={"absolute left-0 top-full h-[2px] bg-primary w-full"}/>
                        <ThemeToggler />                        
                    </div>
                    <div className='xl:hidden'>
                        <MobileNav />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header