'use client'

import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='flex py-2 items-center min-w-full justify-evenly bg-gradient-to-b from-transparent to-[#121515]'>

            <p className=' text-sm text-slate-300 '>
                Made with
                <span className=' text-red-600 animate-ping text-4xl'>
                    ♥
                </span>
                by   <span className='text-md font-semibold text-slate-100 hover:text-indigo-600
                '>
                    <Link href={'https://twitter.com/pyaracetamol0mg'}>
                        Ramanand Thakur
                    </Link>
                </span>
            </p>

            <div className="flex gap-10 items-center justify-evenly ">

                <Link href={'https://twitter.com/pyaracetamol0mg'}
                    className='social-icons hover:animate-pulse'
                ><Twitter /></Link>

                <Link href={'https://www.linkedin.com/in/ramanand-rv/'}
                    className='social-icons hover:animate-pulse'
                ><Linkedin /></Link>

                {/* <Link href={'https://www.instagram.com/ramanand_rv/'}
              className='social-icons  '
            ><Instagram /></Link> */}

                <Link href={'https://github.com/ramanand-rv'}
                    className='social-icons hover:animate-pulse'
                ><Github /></Link>
            </div>
        </div>
    )
}

export default Footer