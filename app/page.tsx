'use client'
import { useState } from'react';
import CodeEditor from '@/components/CodeEditor'
import Image from 'next/image'
import { languages } from '@/utils/utilities';
import LanguageSelector from '@/components/LanguageSelector';

export default function Home() {
  const [language, setLanguage] = useState(languages[0].name);
  return (
    <main>
      <header>
        <LanguageSelector />
      </header>
      <div className="codeEditor">
        <CodeEditor
          language={language}
        />  
      </div>
    </main>
  )
}
