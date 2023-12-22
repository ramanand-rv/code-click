'use client'

import { themes } from '@/utils/utilities';
import { ChevronDown } from 'lucide-react';
import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler';

interface ThemeSelectorProps {
    theme: string;
    setTheme: (theme: string) => void;
}

const ThemeSelector = ({ theme, setTheme }: ThemeSelectorProps) => {
    const [showDropdown, setShowDropdown] = React.useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    const handleThemeChange = (newTheme: string) => {
        setTheme(newTheme);
        toggleDropdown();
        console.log(theme);
    }
    return (
        <OutsideClickHandler onOutsideClick={()=>setShowDropdown(false)}>
        <div className='theme-selector'>
            <p className="text-sm font-medium py-[5px] text-slate-300 overflow-hidden">Theme</p>

            <div onClick={toggleDropdown} className=" p-1 dropdown-title capitalize w-[160px]">
                {theme}
                <ChevronDown />
            </div>

            {showDropdown &&
                <div className='dropdown-menu' >
                    {themes.map((theme, i) => {
                        return (
                            <button className='rounded-md transition duration-75 hover:border-slate-400 text-sm text-slate-300 items-center 
                            hover:border-b-2 mt-2 hover:border-r-2 capitalize dropdown-item text-left w-[160px]
                            hover:bg-slate-700 flex overflow-hidden' onClick={() => handleThemeChange(theme)}>
                                {theme}
                            </button>
                        )

                    })}
                </div>
            }
        </div>
        </OutsideClickHandler>
    )
}

export default ThemeSelector