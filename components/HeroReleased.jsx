import React, { useState, useEffect } from 'react';
import { ChevronRight, Download, X, Sparkles } from 'lucide-react';
import { marked } from 'marked';

import { useLanguage } from '../i18n/LanguageContext';

const HeroReleased = ({ onDownload, onOpenPost }) => {
  const { t } = useLanguage();
  const [releaseData, setReleaseData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [releaseNotes, setReleaseNotes] = useState('');
  const [loadingNotes, setLoadingNotes] = useState(false);

  useEffect(() => {
    const fetchLatestRelease = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/bottlesdevs/Bottles/releases/latest');
        if (response.ok) {
          const data = await response.json();
          setReleaseData({
            tag: data.tag_name,
            url: data.html_url
          });
        }
      } catch (error) {
        console.error('Failed to fetch latest release:', error);
      }
    };

    fetchLatestRelease();
  }, []);

  const handleOpenReleaseNotes = async () => {
    setShowModal(true);
    setLoadingNotes(true);
    try {
      const response = await fetch('https://api.github.com/repos/bottlesdevs/Bottles/releases/latest');
      if (response.ok) {
        const data = await response.json();
        setReleaseNotes(data.body || 'No release notes available.');
      }
    } catch (error) {
      console.error('Failed to fetch release notes:', error);
      setReleaseNotes('Failed to load release notes.');
    } finally {
      setLoadingNotes(false);
    }
  };

  return (
    <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden min-h-[90vh] flex flex-col justify-center bg-transparent transition-colors duration-500">

      {/* Ambient background glow for Dark Mode */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden dark:block">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-500/20 rounded-full blur-[120px] opacity-50 mix-blend-screen animate-pulse"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge */}
        <a
          href={releaseData ? releaseData.url : "https://github.com/bottlesdevs/Bottles/releases/latest"}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/10 border border-zinc-200 dark:border-white/20 text-xs font-bold tracking-widest uppercase mb-8 text-zinc-900 dark:text-white animate-in fade-in slide-in-from-bottom-4 duration-700 hover:bg-zinc-200 dark:hover:bg-white/20 transition-colors cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span>{releaseData ? `${t.heroReleased.release}${releaseData.tag}` : t.heroReleased.newRelease}</span>
        </a>

        {/* Main Title */}
        <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter text-zinc-900 dark:text-white mb-6 drop-shadow-sm animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
          Bottles <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500">61</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-3xl mx-auto text-2xl md:text-3xl text-zinc-500 dark:text-zinc-400 mb-12 font-medium leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          {t.heroReleased.subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <button
            onClick={onDownload}
            className="h-14 px-10 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-3 hover:scale-105 active:scale-95 bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 shadow-xl"
          >
            {t.heroReleased.downloadButton}
            <Download className="w-5 h-5" />
          </button>
          <button
            onClick={handleOpenReleaseNotes}
            className="h-14 px-10 rounded-full text-lg font-semibold transition-all border flex items-center justify-center gap-2 border-zinc-200 hover:bg-zinc-50 text-zinc-900 dark:border-white/20 dark:hover:bg-white/10 dark:text-white"
          >
            {t.heroReleased.releaseNotes}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* App Screenshot */}
        <div className="relative mx-auto max-w-6xl mt-12 perspective-1000">
          <img
            src="/assets/hero/bottles-60.png"
            alt="Bottles 61 Interface"
            className="w-full h-auto block drop-shadow-2xl rounded-xl animate-float"
          />
        </div>
      </div>

      {/* Release Notes Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setShowModal(false)}
        >
          {/* Backdrop with blur */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300" />

          {/* Modal Container */}
          <div
            className="relative w-full max-w-3xl max-h-[85vh] bg-white/90 dark:bg-zinc-900/90 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 dark:border-white/10 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex-none px-6 py-5 border-b border-zinc-200/50 dark:border-white/5 flex items-center justify-between bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center shadow-inner">
                  <Sparkles className="w-5 h-5 text-zinc-600 dark:text-zinc-300" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white leading-none mb-1">
                    {t.heroReleased.modal.whatsNew}
                  </h2>
                  {releaseData && (
                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      {t.heroReleased.modal.version} {releaseData.tag}
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6 custom-scrollbar">
              {loadingNotes ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <div className="w-8 h-8 border-2 border-zinc-200 dark:border-zinc-700 border-t-blue-600 rounded-full animate-spin"></div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 animate-pulse">{t.heroReleased.modal.fetching}</p>
                </div>
              ) : (
                <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-img:rounded-xl prose-pre:bg-zinc-100 dark:prose-pre:bg-zinc-800/50 prose-pre:border prose-pre:border-zinc-200 dark:prose-pre:border-white/5">
                  <div dangerouslySetInnerHTML={{ __html: marked.parse(releaseNotes) }} />
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex-none px-6 py-4 bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-xl border-t border-zinc-200/50 dark:border-white/5 flex justify-between items-center">
              <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
                {t.heroReleased.modal.releasedOn}
              </span>
              <a
                href={releaseData?.url || 'https://github.com/bottlesdevs/Bottles/releases/latest'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-zinc-900/10 dark:shadow-white/10"
              >
                {t.heroReleased.modal.viewFull}
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroReleased;