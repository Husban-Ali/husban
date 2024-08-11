"use client"
import React, { useEffect, useState } from 'react'
import { ThemeToggler } from './ThemeToggler'
import { Logo } from './Logo'
import { Nav } from './Nav'
import { MobileNav } from './MobileNav'
import { usePathname } from 'next/navigation'
const Header = () => {
    const [header, setHeader] = useState(false)
    const path = usePathname()

    useEffect(()=>{
        const scrollYPos = window.addEventListener('scroll',()=>{
            window.scrollY > 58 ? setHeader(true) : setHeader(false)
        });

        return () => window.removeEventListener('scroll' , scrollYPos)
    })
    return ( 
        <>
            <header className= {`${header ?
                'py-4 bg-white shrink-0 dark:bg-accent'
                : 'py-6 dark:bg-transparent'
            } sticky top-0 z-30 transition-all ${path == '/' && "bg-[#fef9f5]"}`}>
                <div className="container mx-auto"></div>
                <div className='flex justify-between items-center'>
                    <Logo />
                    <div className='flex items-center gap-6'>
                        <Nav containerStyles={'hidden xl:flex gap-x-8 items-center'} linkStyles={'relative hover:text-primary transition transition-all'} underlineStyles={"absolute left-0 top-full h-[2px] bg-primary w-full"} />
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