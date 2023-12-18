'use client'
import { useState } from'react';
import CodeEditor from '@/components/CodeEditor'
import Image from 'next/image'
import { languages } from '@/utils/utilities';

export default function Home() {
  const [language, setLanguage] = useState(languages[0].name);
  return (
    <main>
      <div className="codeEditor">
        <CodeEditor />  
      </div>
    </main>
  )
}
