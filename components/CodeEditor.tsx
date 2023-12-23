'use client'

import { Resizable } from "re-resizable";
import { useEffect, useState } from "react";
import AceEditor from 'react-ace';


import 'ace-builds/src-noconflict/theme-ambiance';
import 'ace-builds/src-noconflict/theme-chaos';
import 'ace-builds/src-noconflict/theme-clouds_midnight';
import 'ace-builds/src-noconflict/theme-crimson_editor';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/theme-eclipse';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-terminal';
import 'ace-builds/src-noconflict/theme-tomorrow_night_blue';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/theme-vibrant_ink';
import 'ace-builds/src-noconflict/theme-xcode';

import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-csharp';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-php';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-ruby';
import 'ace-builds/src-noconflict/mode-rust';
import 'ace-builds/src-noconflict/mode-xml';

import 'ace-builds/src-noconflict/theme-ambiance';
import 'ace-builds/src-noconflict/theme-cloud9_day';
import 'ace-builds/src-noconflict/theme-cloud9_night';
import 'ace-builds/src-noconflict/theme-cloud_editor';
import 'ace-builds/src-noconflict/theme-cloud_editor_dark';
import 'ace-builds/src-noconflict/theme-clouds_midnight';
import 'ace-builds/src-noconflict/theme-dawn';
import 'ace-builds/src-noconflict/theme-dreamweaver';
import 'ace-builds/src-noconflict/theme-gob';
import 'ace-builds/src-noconflict/theme-gruvbox_dark_hard';
import 'ace-builds/src-noconflict/theme-merbivore';
import 'ace-builds/src-noconflict/theme-merbivore_soft';
import 'ace-builds/src-noconflict/theme-mono_industrial';
import 'ace-builds/src-noconflict/theme-nord_dark';
import 'ace-builds/src-noconflict/theme-one_dark';
import 'ace-builds/src-noconflict/theme-pastel_on_dark';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import 'ace-builds/src-noconflict/theme-tomorrow';
import 'ace-builds/src-noconflict/theme-tomorrow_night_bright';
import 'ace-builds/src-noconflict/theme-tomorrow_night_eighties';

import { initialCode } from "@/utils/utilities";


interface CodeEditorProps {
    language: string;
    theme: string;
    icon: string;
    background?: string;
    currentPadding?: string;
}
const CodeEditor = ({ language, theme, icon, background, currentPadding }: CodeEditorProps) => {
    const [width, setWidth] = useState<string | number>(1000);
    const [height, setHeight] = useState<string | number>(500);
    const [title, setTitle] = useState<string>("Untitled-1");
    const [code, setCode] = useState(initialCode)

    const handleCoideChange = (newCode: string) => {
        setCode(newCode);
    }

    // @ts-ignore
    const handleResize = (event, direction, ref, pos) => {
        const newHeight = ref.style.height;
        setHeight(parseInt(newHeight, 10));
    };

    const updateSize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return (
        <Resizable minHeight={500} minWidth={500} maxWidth={1000} defaultSize={{ width: width, height: height }}
            onResize={handleResize}
            className="resize-container relative"
            style={
                { background: background }
            }
        >
            <div className="code-block"
                style={
                    {
                        padding: currentPadding,
                    }
                }>
                <div className="handle handle-top absolute left-1/2 top-[-4px] translate-x-[50%] w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-50"></div>

                <div className="handle handle-bottom absolute left-1/2 bottom-[-4px] translate-x-[50%] w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-50"></div>

                <div className="handle handle-left absolute top-1/2 left-[-7px] translate-x-[50%] w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-50"></div>

                <div className="handle handle-right absolute top-1/2 right-[-2px] translate-x-[50%] w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-50"></div>

                <div className="code-title h-[52px] px-4 flex items-center justify-between bg-black bg-opacity-90">
                    <div className="dots flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#ff5656]"></div>
                        <div className="w-4 h-4 rounded-full bg-[#ffbc6a]"></div>
                        <div className="w-4 h-4 rounded-full bg-[#67f772]"></div>
                    </div>
                    <div className="input-control w-full ">
                        <input type="text" placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full leading-loose text-[hlsa(0, 0%, 100%, 0.6)] outline-none font-medium text-center bg-transparent" />
                    </div>
                    <div className="icon flex justify-center items-center p-1 bg-black bg-opacity-50 rounded-sm">
                        <img src={icon} alt="icon" className="h-8 w-8 rounded-md" />
                    </div>
                </div>
                <AceEditor
                    value={code}
                    name="UNIQUE_ID_OF_DIV"
                    theme={theme}
                    mode={language.toLocaleLowerCase()}
                    enableBasicAutocompletion={true}
                    fontSize={16}
                    height={`calc(${height}px - ${currentPadding} - ${currentPadding}  - ${52}px)`}
                    wrapEnabled={true}
                    showPrintMargin={false}
                    highlightActiveLine={false}
                    showGutter={false}
                    className="ace-editor-container"
                    editorProps={{ $blockScrolling: true }}
                />
            </div>
        </Resizable >
    )
}


export default CodeEditor