import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Gamepad2, Heart } from 'lucide-react';

const EagleIcon = ({ className }) => (
    <svg width="20" height="17" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M14.03 10.4768C14.03 10.4768 12.7332 5.99927 12.0063 3.76582C11.3273 1.68218 10.03 -0.0231676 7.30583 0.000233366C4.3056 0.268445 3.1773 2.41556 2.86551 3.66172C0.684194 4.59657 -0.177674 7.04278 0.0300293 7.97683C0.705305 7.35377 1.82678 6.41467 3.10011 6.44721C3.33067 6.51986 3.51685 6.68315 3.59244 6.98583C3.80041 7.81659 3.74848 12.6987 3.74848 12.6987L5.30645 11.0888L6.50093 12.5948L7.74763 10.7253L9.09761 12.3868L9.98057 10.4135L12.1102 12.0234L12.0064 9.89402L14.03 10.4768ZM6.36368 4.92318C5.84958 5.06174 5.3204 4.75719 5.18211 4.24333L6.8902 3.47683C7.02902 3.99066 6.87727 4.78519 6.36368 4.92318Z" fill="currentColor" />
    </svg>
);

const slides = [
    {
        title: 'UMU lands in Bottles',
        badge: 'New in 66',
        description: 'Run Proton games through the Steam runtime outside Steam, directly from Bottles.',
        href: '/umu',
        color: '#ef4444',
        icon: <Gamepad2 className="w-6 h-6" />,
        iconClass: 'from-red-500 to-rose-700 shadow-red-500/30',
    },
    {
        title: 'Soda 11.0-5 and ProtoSoda are out',
        badge: 'Bottles runners',
        description: 'Meet the Wine runner built for Bottles and its Proton-ready sibling for UMU.',
        href: '/runners',
        color: '#8b5cf6',
        icon: <img src="https://raw.githubusercontent.com/bottlesdevs/data/main/logo/soda-logo.svg" alt="" className="w-8 h-8" />,
        iconClass: 'from-violet-500 to-blue-600 shadow-violet-500/30',
    },
    {
        title: 'Eagle is getting smarter',
        badge: 'Updated',
        description: 'Threat checks, community evidence, and settings suggested before launch.',
        href: '/eagle',
        color: '#f97316',
        icon: <EagleIcon className="w-6 h-6" />,
        iconClass: 'from-amber-500 to-orange-600 shadow-amber-500/30',
    },
    {
        title: 'Keep Bottles moving',
        badge: 'Support us',
        description: 'Help fund releases, infrastructure, and the work going into Bottles Next.',
        action: 'support',
        color: '#ec4899',
        icon: <Heart className="w-6 h-6 fill-current" />,
        iconClass: 'from-pink-500 to-rose-600 shadow-pink-500/30',
    },
];

const EagleBanner = ({ isHidden = false, onSupport }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsAnimated(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((current) => (current + 1) % slides.length);
        }, 7000);
        return () => clearInterval(timer);
    }, []);

    const slide = slides[activeSlide];
    const content = (
        <>
            <span>{slide.action ? 'Support' : 'Discover'}</span>
            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
        </>
    );

    return (
        <div
            className={`${isHidden ? 'hidden' : ''} fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl transition-all duration-500 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            <div className="relative">
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 rounded-2xl overflow-visible">
                    <rect
                        x="1"
                        y="1"
                        width="100%"
                        height="100%"
                        rx="16"
                        ry="16"
                        fill="none"
                        stroke={slide.color}
                        strokeWidth="2"
                        pathLength="100"
                        strokeLinecap="round"
                        style={{
                            width: 'calc(100% - 2px)',
                            height: 'calc(100% - 2px)',
                            strokeDasharray: '35 65',
                            animation: 'snakeBorder 3s linear infinite',
                            transition: 'stroke 300ms ease',
                        }}
                    />
                </svg>
                <style>{`
                    @keyframes snakeBorder { to { stroke-dashoffset: -100; } }
                    @keyframes bannerSlideIn {
                        from { opacity: 0.75; transform: translateY(4px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .banner-slide {
                        animation: bannerSlideIn 420ms cubic-bezier(0.22, 1, 0.36, 1);
                    }
                    @keyframes bannerColorWash {
                        from { opacity: 0.45; }
                        to { opacity: 0; }
                    }
                    .banner-color-wash {
                        animation: bannerColorWash 900ms ease-out forwards;
                    }
                    @media (prefers-reduced-motion: reduce) {
                        .banner-slide, .banner-color-wash { animation: none; }
                        .banner-color-wash { opacity: 0; }
                    }
                `}</style>

                <div
                    key={slide.title}
                    className="banner-slide relative bg-zinc-950/70 backdrop-blur-xl rounded-2xl px-4 sm:px-6 pt-4 pb-6 flex items-center gap-3 sm:gap-4 shadow-2xl overflow-hidden"
                >
                    <div
                        className="banner-color-wash absolute inset-0 pointer-events-none"
                        style={{ backgroundImage: `linear-gradient(110deg, ${slide.color} 0%, transparent 58%)` }}
                    />
                    <div className={`hidden xs:flex relative w-12 h-12 bg-gradient-to-br ${slide.iconClass} rounded-xl items-center justify-center text-white shadow-lg shrink-0`}>
                        {slide.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-white font-bold text-sm sm:text-lg truncate">{slide.title}</span>
                            <span className="hidden sm:inline px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-white tracking-wider uppercase shrink-0">
                                {slide.badge}
                            </span>
                        </div>
                        <p className="text-zinc-400 text-sm hidden sm:block truncate">{slide.description}</p>
                    </div>

                    {slide.action ? (
                        <button
                            onClick={onSupport}
                            className="shrink-0 bg-white text-black px-4 sm:px-5 py-2.5 rounded-full font-bold text-sm hover:bg-zinc-200 transition-colors flex items-center gap-1.5 group/btn"
                        >
                            {content}
                        </button>
                    ) : (
                        <Link
                            to={slide.href}
                            onClick={() => window.scrollTo(0, 0)}
                            className="shrink-0 bg-white text-black px-4 sm:px-5 py-2.5 rounded-full font-bold text-sm hover:bg-zinc-200 transition-colors flex items-center gap-1.5 group/btn"
                        >
                            {content}
                        </Link>
                    )}

                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex justify-center gap-2" aria-label="Featured content">
                        {slides.map((item, index) => (
                            <button
                                key={item.title}
                                onClick={() => setActiveSlide(index)}
                                className={`h-1.5 rounded-full transition-all ${index === activeSlide ? 'w-6 bg-white' : 'w-1.5 bg-white/30 hover:bg-white/60'}`}
                                aria-label={`Show ${item.title}`}
                                aria-current={index === activeSlide ? 'true' : undefined}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EagleBanner;
