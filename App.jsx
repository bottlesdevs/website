import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import Header from './components/Header';
import Hero from './components/HeroReleased';
import Features from './components/Features';
import Community from './components/Community';
import DownloadSection from './components/Download';
import Funding from './components/Funding';
import Blog from './components/Blog';
import DatabaseHome from './components/Database/DatabaseHome';
import Dependencies from './components/Database/Dependencies';
import Components from './components/Database/Components';
import AppStore from './components/AppStore/AppStore';
import AppDetails from './components/AppStore/AppDetails';
import Docs from './components/Docs/Docs';
import Sponsors from './components/Sponsors';
import Gaming from './components/Gaming';
import Next from './components/Next';
import Runners from './components/Runners';
import Eagle from './components/Eagle';
import EagleBanner from './components/EagleBanner';
import WineBridge from './components/WineBridge';
import Footer from './components/Footer';
import GrantBanner from './components/GrantBanner';

const App = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showDownloadModal, setShowDownloadModal] = useState(false);
    const [theme, setTheme] = useState('system');

    const getCurrentView = () => {
        const path = location.pathname;
        if (path.startsWith('/funding')) return 'funding';
        if (path.startsWith('/blog')) return 'blog';
        if (path.startsWith('/gaming')) return 'gaming';
        return 'home';
    };

    const currentView = getCurrentView();

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');

        if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            root.classList.add(systemTheme);
        } else {
            root.classList.add(theme);
        }
    }, [theme]);

    const handleOpenDownload = () => {
        setShowDownloadModal(true);
    };

    const handleOpenPost = (filename) => {
        navigate(`/blog/${filename}`);
        window.scrollTo(0, 0);
    };

    const handleNavigate = (view) => {
        if (view === 'home') navigate('/');
        else navigate(`/${view}`);
    };

    const isGaming = currentView === 'gaming';

    return (
        <LanguageProvider>
            <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 font-sans selection:bg-blue-500 selection:text-white transition-colors duration-300">
                <Header
                    currentView={currentView}
                    onNavigate={handleNavigate}
                    onDownload={handleOpenDownload}
                    theme={theme}
                    onThemeChange={setTheme}
                    forceDark={isGaming}
                />
                <main className="relative">
                    <div className="fixed inset-0 bg-grid z-0 pointer-events-none opacity-[0.5] dark:opacity-[0.3]"></div>

                    <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-zinc-900/5 to-transparent pointer-events-none z-0" />

                    <div className="relative z-10">
                        <Routes>
                            <Route path="/" element={
                                <>
                                    <Hero onDownload={handleOpenDownload} onOpenPost={handleOpenPost} />
                                    <GrantBanner onOpenPost={handleOpenPost} />
                                    <Features onNavigate={handleNavigate} />
                                    <Community />
                                    <Sponsors onNavigate={handleNavigate} />
                                    <EagleBanner />
                                </>
                            } />
                            <Route path="/funding" element={<Funding />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/blog/:slug" element={<Blog />} />
                            <Route path="/database" element={<DatabaseHome />} />
                            <Route path="/runners" element={<Runners />} />
                            <Route path="/next" element={<Next />} />
                            <Route path="/eagle" element={<Eagle />} />
                            <Route path="/winebridge" element={<WineBridge onDownload={handleOpenDownload} />} />
                            <Route path="/database/dependencies" element={<Dependencies />} />
                            <Route path="/database/components" element={<Components />} />
                            <Route path="/appstore" element={<AppStore />} />
                            <Route path="/app" element={<AppDetails />} />
                            <Route path="/docs/*" element={<Docs />} />
                            <Route path="/gaming" element={<Gaming onNavigate={handleNavigate} />} />
                        </Routes>
                    </div>
                    <DownloadSection showModal={showDownloadModal} setShowModal={setShowDownloadModal} />
                </main>
                <Footer />
            </div>
        </LanguageProvider>
    );
};

export default App;