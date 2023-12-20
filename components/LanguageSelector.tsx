'use client'

import React from 'react'
interface LanguageSelectorProps {
    language: string;
    setLanguage: (language: string) => void;
    setActiveIcon: (icon: string) => void;
}

const LanguageSelector = ({ language, setLanguage, setActiveIcon }: LanguageSelectorProps) => {
  return (
    <div>LanguageSelector</div>
  )
}

export default LanguageSelector