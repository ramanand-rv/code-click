'use client'

import { Resizable } from "re-resizable"
import AceEditor from 'react-ace';
import { useEffect, useState } from "react";


import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/theme-xcode';
import 'ace-builds/src-noconflict/theme-terminal';

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
        setHeight(parseInt(newHeight));
    };

    const updateSize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return (
        <Resizable minHeight={466} minWidth={510} maxWidth={1000} defaultSize={{ width: width, height: height || 500 }}
            onResize={handleResize}
            className="resize-container relative"
        >
            <div className="code-block">
                <div className="code-ttile h-[52px] px-4 flex items-center justify-between bg-black bg-opacity-90">
                    <div className="dots flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-inherit bg-[#ff5656]"></div>
                        <div className="w-3 h-3 rounded-full bg-inherit bg-[#ffbc6a]"></div>
                        <div className="w-3 h-3 rounded-full bg-inherit bg-[#67f772]"></div>
                    </div>
                    <div className="input-control w-full ">
                        <input type="text" name="" id=""
                        className="w-full text-[hlsa(0, 0%, 100%, 0.6)] outline-none font-medium text-center bg-transparent" />
                    </div>
                    <div className="icon flex justify-center items-center p-1 bg-black bg-opacity-50 rounded-sm">
                        <img src={icon} alt="icon" className="h-7 w-7 rounded-md" />
                    </div>
                </div>
                <AceEditor
                    value="function () {
                        const life = 'undefined';
                        let motivation = 'Keep coding!';

                        while (life !== 'meaning') {
                            console.log(motivation);
                            motivation += ' and laugh along the way!';
                        }
                    }"
                    name="UNIQUE_ID_OF_DIV"
                    theme={'monokai'}
                    mode={language.toLocaleLowerCase()}
                    enableBasicAutocompletion={true}
                    fontSize={16}
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