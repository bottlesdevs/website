import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Globe } from 'lucide-react';
import Select from './Select';

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    const languages = [
        { value: 'en', label: 'English' },
        { value: 'it', label: 'Italiano' },
        { value: 'es', label: 'Español' },
        { value: 'ar', label: 'العربية' },
    ];

    return (
        <Select
            value={language}
            onChange={setLanguage}
            options={languages}
            icon={Globe}
            className="w-auto"
        />
    );
};

export default LanguageSwitcher;
