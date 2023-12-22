'use client'

import { Resizable } from "re-resizable"
import AceEditor from 'react-ace';
import { useEffect, useState } from "react";


import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/theme-xcode';
import 'ace-builds/src-noconflict/theme-terminal';
import 'ace-builds/src-noconflict/theme-ambiance'
import 'ace-builds/src-noconflict/theme-chaos'
import 'ace-builds/src-noconflict/theme-clouds_midnight'
import 'ace-builds/src-noconflict/theme-crimson_editor'
import 'ace-builds/src-noconflict/theme-dracula'
import 'ace-builds/src-noconflict/theme-eclipse'
import 'ace-builds/src-noconflict/theme-tomorrow_night_blue'
import 'ace-builds/src-noconflict/theme-vibrant_ink'

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-ruby';
import 'ace-builds/src-noconflict/mode-php';
import 'ace-builds/src-noconflict/mode-rust';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-csharp';
import 'ace-builds/src-noconflict/mode-xml';
import { themes } from "@/utils/utilities";


interface CodeEditorProps {
    onCodeChange: (code: string) => void;
    language: string;
    theme: string;
    icon: string;
    background?: string;
    currentPadding?: string;
}
const CodeEditor = ({ onCodeChange, language, theme, icon, background, currentPadding }: CodeEditorProps) => {
    const [width, setWidth] = useState<string | number>(1000);
    const [height, setHeight] = useState<string | number>(500);

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
        <Resizable minHeight={470} minWidth={510} maxWidth={1000} defaultSize={{ width: width, height: height || 500 }}
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
                    background: background
                }
            }>
                <div className="code-title h-[52px] px-4 flex items-center justify-between bg-black bg-opacity-90">
                    <div className="dots flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#ff5656]"></div>
                        <div className="w-4 h-4 rounded-full bg-[#ffbc6a]"></div>
                        <div className="w-4 h-4 rounded-full bg-[#67f772]"></div>
                    </div>
                    <div className="input-control w-full ">
                        <input type="text" name="" id="" placeholder="Title"
                        className="w-full text-[hlsa(0, 0%, 100%, 0.6)] outline-none font-medium text-center bg-transparent" />
                    </div>
                    <div className="icon flex justify-center items-center p-1 bg-black bg-opacity-50 rounded-sm">
                        <img src={icon} alt="icon" className="h-7 w-7 rounded-md" />
                    </div>
                </div>
                <AceEditor
                    value="
                    function () {
                        while (life !== 'meaning') {
                            console.log(motivation);
                            motivation += ' and laugh along the way!';
                        }
                    }"
                    name="UNIQUE_ID_OF_DIV"
                    theme={theme}
                    mode={language.toLocaleLowerCase()}
                    enableBasicAutocompletion={true}
                    fontSize={16}
                    height={`calc(${height}px - ${currentPadding} - ${currentPadding} - ${currentPadding} - ${currentPadding} - ${currentPadding})`}
                    wrapEnabled={true}
                    showPrintMargin={false}
                    highlightActiveLine={false}
                    showGutter={false}
                    className="ace-editor-container"
                    editorProps={{ $blockScrolling: true }}
                />
            </div>
        </Resizable>
    )
}


export default CodeEditor