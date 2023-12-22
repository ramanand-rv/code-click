'use client'
import { useState } from 'react';
import CodeEditor from '@/components/CodeEditor'
import Image from 'next/image'
import { backgrounds, languages, themes } from '@/utils/utilities';
import LanguageSelector from '@/components/LanguageSelector';
import ThemeSelector from '@/components/ThemeSelector';
import BackgroundSelector from '@/components/BackgroundSelector';

export default function Home() {
  const [language, setLanguage] = useState(languages[0].name);
  const [activeIcon, setActiveIcon] = useState(languages[0].icon);
  const [background, setBackground] = useState(backgrounds[0]);

  const [theme, setTheme] = useState(themes[0]);
  return (
    <main className='h-[100vh] flex flex-col items-center justify-between'>
      <header className=' p-4 mt-6 w-[940px] fixed top-0 left-1/2 translate-x-[-50%] z-10 bg-[#191919] rounded border-[#3c3c3c] shadow-md flex gap-12 ' >
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
      </header>
      <div className="codeEditor mt-[12rem] ">
        <CodeEditor
          onCodeChange={(code) => console.log(code)}
          language={language}
          icon={activeIcon}
          theme={theme}
        />
      </div>
    </main>
  )
}

