'use client'

import { ChevronDown } from 'lucide-react';
import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler';

interface PaddingSelectorProps {
    paddings: string[];
    currentPadding: string;
    setCurrentPadding: (padding: string) => void;
}

const PaddingSelector = ({ paddings, currentPadding, setCurrentPadding }: PaddingSelectorProps) => {
    const handlePaddingChange = (newPadding: string) => {
        setCurrentPadding(newPadding);
    }

    return (
            <div className='theme-selector'>
                <p className="text-sm font-medium py-[5px] text-slate-300 overflow-hidden">Padding</p>

                <div className="flex gap-6 ">
                    {paddings.map((pad, i)=>{
                        return (
                            <button key={i}
                            onClick={()=>handlePaddingChange(pad)}
                            className={`h-9 flex items-center border-[1px] rounded border-slate-700 justify-center text-sm px-2
                            ${currentPadding === pad && 'bg-slate-500  text-white'}`}>
                                    {pad}
                            </button>
                        )
                    })}
                </div>

            </div>
    )
}

export default PaddingSelector