'use client'
import { useState } from 'react';
import CodeEditor from '@/components/CodeEditor'
import Image from 'next/image'
import { backgrounds, languages, themes } from '@/utils/utilities';
import LanguageSelector from '@/components/LanguageSelector';
import ThemeSelector from '@/components/ThemeSelector';
import BackgroundSelector from '@/components/BackgroundSelector';
import PaddingSelector from '@/components/PaddingSelector';
import { Download } from 'lucide-react';

export default function Home() {
  const [language, setLanguage] = useState(languages[0].name);
  const [activeIcon, setActiveIcon] = useState(languages[0].icon);
  const [background, setBackground] = useState(backgrounds[0]);
  const [paddings, setPaddings] = useState(["1rem", "2rem", "3rem", "4rem"]);
  const [currentPadding, setCurrentPadding] = useState(paddings[0]);

  const [theme, setTheme] = useState(themes[0]);
  return (
    <main className='h-[100vh] flex flex-col items-center justify-between'>
      <header className=' p-4 mt-6 w-[1000px] fixed top-0 left-1/2 translate-x-[-50%] z-10 bg-[#191919] rounded border-[#3c3c3c] shadow-md flex gap-12 border-2' >
        <LanguageSelector
          language={language}
          setLanguage={setLanguage}
          setActiveIcon={setActiveIcon}
        />

        <ThemeSelector
          setTheme={setTheme}
          theme={theme} />

        <BackgroundSelector
          background={background}
          setBackground={setBackground} />

        <PaddingSelector
          paddings={paddings}
          currentPadding={currentPadding}
          setCurrentPadding={setCurrentPadding} />

          <div className="export-btn -ml-1 items-center self-center justify-center">
            <button className='py-2 px-3 rounded-md text-sm bg-blue-400 text-blue-400 font-medium bg-opacity-10 
            hover:bg-opacity-90 hover:text-slate-50 ease-in-out transition-all 
            duration-200 flex items-center gap-3'>
              <Download />
              Export PNG
            </button>
          </div>
      </header>
      <div className="codeEditor mt-36 ">
        <CodeEditor
          language={language}
          icon={activeIcon}
          theme={theme}
          background={background}
          currentPadding={currentPadding}
          
        />
      </div>
    </main>
  )
}

