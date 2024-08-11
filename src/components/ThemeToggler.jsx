'use client';

import React from 'react'
import { Button } from './ui/button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes'

export const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div>
            <Button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="bg-white dark:bg-[hsl(20_14.3%_4.1%)] dark:text-white text-black transition-colors duration-300 hover:bg-white hover:dark:bg-[hsl(20_14.3%_4.1%)]"
            >
                <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
            </Button>
        </div>
    )
}