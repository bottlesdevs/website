import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import { useLanguage } from '../i18n/LanguageContext';

const EagleIcon = ({ className }) => (
    <svg width="20" height="17" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M14.03 10.4768C14.03 10.4768 12.7332 5.99927 12.0063 3.76582C11.3273 1.68218 10.03 -0.0231676 7.30583 0.000233366C4.3056 0.268445 3.1773 2.41556 2.86551 3.66172C0.684194 4.59657 -0.177674 7.04278 0.0300293 7.97683C0.705305 7.35377 1.82678 6.41467 3.10011 6.44721C3.33067 6.51986 3.51685 6.68315 3.59244 6.98583C3.80041 7.81659 3.74848 12.6987 3.74848 12.6987L5.30645 11.0888L6.50093 12.5948L7.74763 10.7253L9.09761 12.3868L9.98057 10.4135L12.1102 12.0234L12.0064 9.89402L14.03 10.4768ZM6.36368 4.92318C5.84958 5.06174 5.3204 4.75719 5.18211 4.24333L6.8902 3.47683C7.02902 3.99066 6.87727 4.78519 6.36368 4.92318Z" fill="currentColor" />
    </svg>
);

const EagleBanner = () => {
    const { t } = useLanguage();
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsAnimated(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
        >
            <div className="relative group">
                {/* Animated Border */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 rounded-2xl overflow-visible">
                    <rect
                        x="1" y="1"
                        width="calc(100% - 2px)" height="calc(100% - 2px)"
                        rx="16" ry="16"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="2"
                        pathLength="100"
                        strokeLinecap="round"
                        style={{
                            strokeDasharray: '35 65',
                            animation: 'snakeBorder 3s linear infinite'
                        }}
                    />
                </svg>
                <style>{`
                    @keyframes snakeBorder {
                        to { stroke-dashoffset: -100; }
                    }
                `}</style>

                <div className="relative bg-zinc-900 dark:bg-black rounded-2xl px-6 py-4 flex items-center gap-4 shadow-2xl backdrop-blur-sm">
                    {/* Icon with animation */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-amber-500/20 rounded-xl blur-xl animate-pulse" />
                        <div className="relative w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-amber-500/30">
                            <EagleIcon className="w-6 h-6" />
                        </div>
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-white font-bold text-lg">{t.eagleBanner.title}</span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-black tracking-wider uppercase">
                                {t.eagleBanner.badge}
                            </span>
                        </div>
                        <p className="text-zinc-400 text-sm hidden sm:block">
                            {t.eagleBanner.description}
                        </p>
                    </div>

                    {/* CTA */}
                    <Link
                        to="/eagle"
                        onClick={() => window.scrollTo(0, 0)}
                        className="shrink-0 bg-white text-black px-5 py-2.5 rounded-full font-bold text-sm hover:bg-zinc-200 transition-colors flex items-center gap-2 group/btn"
                    >
                        <span>{t.eagleBanner.button}</span>
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>


                </div>
            </div>
        </div>
    );
};

export default EagleBanner;
