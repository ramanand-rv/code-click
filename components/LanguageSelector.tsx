'use client'

import { languages } from '@/utils/utilities';
import { ChevronDown } from 'lucide-react';
import React from 'react'
interface LanguageSelectorProps {
    language: string;
    setLanguage: (language: string) => void;
    setActiveIcon: (icon: string) => void;
}

const LanguageSelector = ({ language, setLanguage, setActiveIcon }: LanguageSelectorProps) => {
    const [showDropdown, setShowDropdown] = React.useState(false);

    const handleLanguageChange = (newLanguage: string) => {
        setLanguage(newLanguage);
        const newActiveIcon = languages.find((lang) => lang.name === newLanguage)?.icon;

        if (newActiveIcon) {
            setActiveIcon(newActiveIcon)
        }
        toggleDropdown();
    }

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    return (
        <div>
            <p className="text-sm font-medium py-[5px] text-slate-300 overflow-hidden">Languages</p>
            <div onClick={toggleDropdown} className=" p-1 dropdown-title capitalize w-[105px]">
                {language}
                <ChevronDown />
            </div>
            {showDropdown &&
                <div className='dropdown-menu'>
                    {languages.map((lang, i) => {
                        return (
                            <div key={i} className=" rounded-md transition duration-75 hover:border-slate-400 
                            hover:border-b-2 mt-2 hover:border-r-2 dropdown-item text-left w-[105px] items-center
                            hover:bg-slate-700 flex overflow-hidden">
                                <button
                                className="text-sm  text-slate-300 flex items-center pr-[105px]
                                "
                                onClick={() => handleLanguageChange(lang.name)}>
                                    {lang.name}
                                </button>
                            </div>
                        )
                    })}
                </div>}
        </div>
    )
}

export default LanguageSelector