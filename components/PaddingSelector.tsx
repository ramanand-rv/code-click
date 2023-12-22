'use client'

import { ChevronDown } from 'lucide-react';
import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler';

interface PaddingSelectorProps {
    paddings: string[];
    currentPadding: string;
    setCurrentPadding: (padding: string) => void;
}

const PaddingSelector = ({paddings, currentPadding, setCurrentPadding}: PaddingSelectorProps) => {
    const [showDropdown, setShowDropdown] = React.useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    const handlePaddingChange = (newPadding: string) => {
        setCurrentPadding(newPadding);
        toggleDropdown();
    }

  return (
      <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
          <div className='theme-selector'>
              <p className="text-sm font-medium py-[5px] text-slate-300 overflow-hidden">Padding</p>

              <div onClick={toggleDropdown} className=" p-1 dropdown-title capitalize w-[160px]">
                  {currentPadding}
                  <ChevronDown />
              </div>

              {showDropdown &&
                  <div className='dropdown-menu' >
                      {paddings.map((pad, i) => {
                          return (
                              <button className='rounded-md transition duration-75 hover:border-slate-400 text-sm text-slate-300 items-center 
                            hover:border-b-2 mt-2 hover:border-r-2 capitalize dropdown-item text-left w-[160px]
                            hover:bg-slate-700 flex overflow-hidden' onClick={() => handlePaddingChange(pad)}>
                                  {pad}
                              </button>
                          )

                      })}
                  </div>
              }
          </div>
      </OutsideClickHandler>
  )
}

export default PaddingSelector