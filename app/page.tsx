'use client'
import { useState } from'react';
import CodeEditor from '@/components/CodeEditor'
import Image from 'next/image'
import { languages } from '@/utils/utilities';
import LanguageSelector from '@/components/LanguageSelector';

export default function Home() {
  const [language, setLanguage] = useState(languages[0].name);
  return (
    <main className='h-[100vh] flex flex-col items-center justify-between'>
      <header className=' mt-6 w-[940px] fixed top-0 left-1/2 translate-x-[-50%] z-10 bg-[#191919] rounded border-[#3c3c3c] shadow-md  ' >
        <LanguageSelector />
      </header>
      <div className="codeEditor mt-[12rem] ">
        <CodeEditor
          language={language}
        />  
      </div>
    </main>
  )
}
