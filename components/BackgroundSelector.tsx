'use client'

import { backgrounds } from '@/utils/utilities';
import { ChevronDown } from 'lucide-react';
import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler';

interface BackgroundSelectorProps {
    background: string;
    setBackground: (background: string) => void;
}

const BackgroundSelector = ({ background, setBackground }: BackgroundSelectorProps) => {
    const [showDropdown, setShowDropdown] = React.useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }
    const handleBackgroundChange = (background: string) => {
        setBackground(background);
        toggleDropdown();
    }

    return (
        <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
            <div className='bg-selector relative'>
                <p className="text-sm font-medium py-[5px] text-slate-300 overflow-hidden">Background</p>

                <div onClick={toggleDropdown} className="dropdown-tile gap-1 items-center flex w-[62px]">
                    <div className="rounded-full w-8 h-8" style={
                        { background: background }
                    }></div>
                    <span className='hover:text-slate-100 hover:scale-150 transition-all ease-in-out duration-150'><ChevronDown /></span>

                </div>
                {showDropdown &&
                    <div className='dropdown-menu absolute right-0'>
                        {backgrounds.map((bg, i) => {
                            return (
                                <div key={i} onClick={() => handleBackgroundChange(bg)}
                                    className='inline-flex rounded-full w-8 h-8 cursor-pointer'
                                    style={
                                        { background: bg }
                                    }>
                                </div>
                            )
                        })
                        }
                    </div>
                }
            </div>
        </OutsideClickHandler>
    )
}

export default BackgroundSelector