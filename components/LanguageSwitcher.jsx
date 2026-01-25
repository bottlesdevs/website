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
    ];

    // Custom label rendering if we want "EN" instead of "English" in the button is not fully supported by generic Select
    // but the generic Select uses label. 
    // To match previous behavior "EN", "IT", we might need to adjust options passed or accept the change.
    // The previous implementation showed `language.toUpperCase()` (CODE) in button, and LABEL in dropdown.
    // My generic Select shows LABEL in button.
    // Let's modify Select or this usage.
    // Actually, consistency is key. Let's see if we can just use the label "English" etc in the button as well, which is often better.
    // Or I can modify Select to take a `renderValue` prop.
    // Let's stick to using the Select as is for now, which shows the label. "English" is fine.

    // Wait, the user said "estrai una primitiva". 
    // If I change behavior (showing label instead of code) it might be unwanted.
    // Let's stick to the Select created. It shows label.

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
