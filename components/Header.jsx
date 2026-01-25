import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Sun, Moon, Monitor } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = ({ currentView, onNavigate, onDownload, theme, onThemeChange, forceDark = false }) => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (view) => {
    onNavigate(view);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const cycleTheme = () => {
    if (theme === 'system') onThemeChange('light');
    else if (theme === 'light') onThemeChange('dark');
    else onThemeChange('system');
  };

  const ThemeIcon = () => {
    if (theme === 'light') return <Sun className="w-5 h-5" />;
    if (theme === 'dark') return <Moon className="w-5 h-5" />;
    return <Monitor className="w-5 h-5" />;
  };

  const isEffectivelyDark = forceDark ||
    (theme === 'dark') ||
    (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  const navItems = [
    { key: 'features', label: t.header.features },
    { key: 'gaming', label: t.header.gaming },
    { key: 'blog', label: t.header.blog },
    { key: 'funding', label: t.header.funding },
    { key: 'database', label: t.header.database },
    { key: 'appstore', label: t.header.appStore },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
      ? (isEffectivelyDark ? 'bg-black/50 backdrop-blur-xl border-white/5' : 'bg-white/80 backdrop-blur-xl border-zinc-200')
      : 'bg-transparent border-b border-transparent'
      } ${scrolled ? 'border-b' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNav('home')}>
            <img
              src="https://usebottles.com/assets/logo.svg"
              alt="Bottles"
              className={`h-8 w-auto transition-transform group-hover:scale-105 ${isEffectivelyDark ? 'hidden' : 'block'}`}
            />
            <img
              src="https://usebottles.com/assets/logo-dark.svg"
              alt="Bottles"
              className={`h-8 w-auto transition-transform group-hover:scale-105 ${isEffectivelyDark ? 'block' : 'hidden'}`}
            />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navItems.map((item) => {
                const isActive = currentView === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => {
                      if (item.key === 'features') {
                        handleNav('home');
                        setTimeout(() => {
                          const featuresSection = document.getElementById('features');
                          if (featuresSection) {
                            featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }, 100);
                      } else {
                        handleNav(item.key);
                      }
                    }}
                    className={`text-sm font-medium transition-colors ${isActive
                      ? (isEffectivelyDark ? 'text-white' : 'text-zinc-900')
                      : (isEffectivelyDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black')
                      }`}
                  >
                    {item.label}
                  </button>
                )
              })}
              <Link
                to="/docs"
                className={`transition-colors text-sm font-medium ${isEffectivelyDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'
                  }`}
              >
                {t.header.docs}
              </Link>

              <div className={`h-4 w-px mx-2 ${isEffectivelyDark ? 'bg-zinc-800' : 'bg-zinc-300'}`}></div>

              <LanguageSwitcher />

              <button
                onClick={cycleTheme}
                className={`transition-colors ${isEffectivelyDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'
                  }`}
                title={`Current theme: ${theme}`}
              >
                <ThemeIcon />
              </button>

              <a
                href="https://github.com/bottlesdevs/Bottles"
                target="_blank"
                rel="noreferrer"
                className={`transition-colors ${isEffectivelyDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'
                  }`}
              >
                <Github className="w-5 h-5" />
              </a>
              <button
                onClick={onDownload}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${isEffectivelyDark
                  ? 'bg-white text-black hover:bg-zinc-200'
                  : 'bg-zinc-900 text-white hover:bg-zinc-800'
                  }`}
              >
                {t.header.download}
              </button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden gap-4 items-center">
            <LanguageSwitcher />
            <button onClick={cycleTheme} className={isEffectivelyDark ? 'text-zinc-400' : 'text-zinc-600'}>
              <ThemeIcon />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${isEffectivelyDark
                ? 'text-zinc-400 hover:text-white'
                : 'text-zinc-600 hover:text-black'
                }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden border-b ${isEffectivelyDark ? 'bg-black border-zinc-800' : 'bg-white border-zinc-200'
          }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(item => (
              <button
                key={item.key}
                onClick={() => {
                  if (item.key === 'features') {
                    handleNav('home');
                    setTimeout(() => {
                      const featuresSection = document.getElementById('features');
                      if (featuresSection) {
                        featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 100);
                  } else {
                    handleNav(item.key);
                  }
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${isEffectivelyDark
                  ? 'text-zinc-300 hover:text-white'
                  : 'text-zinc-600 hover:text-black'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => { setIsOpen(false); onDownload(); }}
              className={`block w-full px-3 py-2 rounded-md text-base font-medium text-center mt-4 ${isEffectivelyDark
                ? 'bg-white text-black'
                : 'bg-black text-white'
                }`}
            >
              {t.header.download}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;