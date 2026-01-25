import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(undefined);

const detectSystemLanguage = () => {
    const browserLang = navigator.language.toLowerCase();

    if (browserLang.startsWith('it')) return 'it';
    if (browserLang.startsWith('es')) return 'es';
    return 'en';
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguageState] = useState(() => {
        const stored = localStorage.getItem('bottles-language');
        if (stored && (stored === 'en' || stored === 'it' || stored === 'es')) {
            return stored;
        }
        return detectSystemLanguage();
    });

    useEffect(() => {
        localStorage.setItem('bottles-language', language);
    }, [language]);

    const setLanguage = (lang) => {
        setLanguageState(lang);
    };

    const value = {
        language,
        setLanguage,
        t: translations[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
};
