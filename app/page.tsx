'use client'
import BackgroundSelector from '@/components/BackgroundSelector';
import CodeEditor from '@/components/CodeEditor';
import Footer from '@/components/Footer';
import LanguageSelector from '@/components/LanguageSelector';
import PaddingSelector from '@/components/PaddingSelector';
import ThemeSelector from '@/components/ThemeSelector';
import { backgrounds, languages, themes } from '@/utils/utilities';
import html2canvas from 'html2canvas';
import { Download } from 'lucide-react';
import { useRef, useState } from 'react';

export default function Home() {

  const [language, setLanguage] = useState(languages[0].name);
  const [activeIcon, setActiveIcon] = useState(languages[0].icon);
  const [background, setBackground] = useState(backgrounds[0]);
  const [paddings, setPaddings] = useState(["1rem", "2rem", "3rem", "4rem"]);
  const [currentPadding, setCurrentPadding] = useState(paddings[0]);
  const [theme, setTheme] = useState(themes[0]);

  const editorRef = useRef(null);
  const exportPng = async () => {
    const editorElement = editorRef.current;
    if (editorElement) {
      // hidden elements
      const handleElements = document.querySelectorAll('.handle');
      handleElements.forEach((element: any) => element.style.display = 'none');

      const cursorElement = document.querySelector('.ace_cursor') as any;
      cursorElement.style.display = 'none';

      const canvas = await html2canvas(editorElement);
      const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');

      const link = document.createElement('a');
      link.download = 'code-click.png';
      link.href = image;
      link.click();

      // show elements
      handleElements.forEach((element: any) => element.style.display = 'block');
      cursorElement.style.display = 'block';
    }
  };
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
            duration-200 flex items-center gap-3'
            onClick={exportPng}>
            <Download />
            Export PNG
          </button>
        </div>
      </header>
      <div className="codeEditor mt-36 " ref={editorRef}>
        <CodeEditor
          language={language}
          icon={activeIcon}
          theme={theme}
          background={background}
          currentPadding={currentPadding}

        />
      </div>
      <Footer />
    </main>
  )
}

