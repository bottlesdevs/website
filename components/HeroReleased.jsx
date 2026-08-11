import React, { useState, useEffect } from 'react';
import { ChevronRight, Download, X, Sparkles } from 'lucide-react';
import { marked } from 'marked';

import { useLanguage } from '../i18n/LanguageContext';

const HeroReleased = ({ onDownload, onOpenPost, onModalChange }) => {
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

  useEffect(() => () => onModalChange?.(false), [onModalChange]);

  const handleOpenReleaseNotes = async () => {
    setShowModal(true);
    onModalChange?.(true);
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

  const handleCloseReleaseNotes = () => {
    setShowModal(false);
    onModalChange?.(false);
  };

  return (
    <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden min-h-[90vh] flex flex-col justify-center bg-transparent transition-colors duration-500">

      {/* Ambient background glow for Dark Mode */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden dark:block">
        <div className="hero-liquid-blob absolute top-[42%] left-1/2 w-[980px] h-[590px] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.38)_0%,rgba(192,38,211,0.2)_42%,transparent_72%)] rounded-[44%_56%_63%_37%/58%_42%_58%_42%] opacity-65 mix-blend-screen"></div>
        <div className="hero-liquid-blob-secondary absolute top-[56%] left-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.28)_0%,rgba(59,130,246,0.18)_44%,transparent_74%)] rounded-[63%_37%_46%_54%/42%_61%_39%_58%] opacity-55 mix-blend-screen"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] opacity-30"></div>
        <div className="hero-reactive-grid absolute inset-0"></div>
      </div>

      <style>{`
        @keyframes heroLiquidBlob {
          0% { transform: translate3d(-68%, -52%, 0) rotate(-8deg) scale(0.82, 1.16); border-radius: 32% 68% 72% 28% / 68% 31% 69% 32%; filter: blur(76px) hue-rotate(-8deg); }
          25% { transform: translate3d(-55%, -60%, 0) rotate(6deg) scale(1.18, 0.78); border-radius: 74% 26% 38% 62% / 27% 72% 28% 73%; filter: blur(68px) hue-rotate(8deg); }
          50% { transform: translate3d(-43%, -45%, 0) rotate(12deg) scale(0.88, 1.2); border-radius: 27% 73% 61% 39% / 76% 24% 68% 32%; filter: blur(82px) hue-rotate(18deg); }
          75% { transform: translate3d(-56%, -37%, 0) rotate(-4deg) scale(1.22, 0.82); border-radius: 68% 32% 24% 76% / 35% 64% 36% 65%; filter: blur(70px) hue-rotate(4deg); }
          100% { transform: translate3d(-66%, -50%, 0) rotate(-10deg) scale(0.9, 1.13); border-radius: 39% 61% 69% 31% / 63% 38% 62% 37%; filter: blur(76px) hue-rotate(-12deg); }
        }
        @keyframes heroLiquidBlobSecondary {
          0% { transform: translate3d(-30%, -58%, 0) rotate(11deg) scale(1.16, 0.78); border-radius: 71% 29% 43% 57% / 32% 69% 31% 68%; filter: blur(70px) hue-rotate(-10deg); }
          50% { transform: translate3d(-52%, -34%, 0) rotate(-9deg) scale(0.8, 1.2); border-radius: 28% 72% 65% 35% / 74% 26% 61% 39%; filter: blur(62px) hue-rotate(14deg); }
          100% { transform: translate3d(-35%, -64%, 0) rotate(6deg) scale(1.2, 0.84); border-radius: 64% 36% 26% 74% / 39% 66% 34% 61%; filter: blur(74px) hue-rotate(-18deg); }
        }
        @keyframes heroReactiveGrid {
          0% { mask-position: 35% 42%; -webkit-mask-position: 35% 42%; }
          35% { mask-position: 54% 35%; -webkit-mask-position: 54% 35%; }
          70% { mask-position: 61% 54%; -webkit-mask-position: 61% 54%; }
          100% { mask-position: 42% 47%; -webkit-mask-position: 42% 47%; }
        }
        .hero-liquid-blob {
          animation: heroLiquidBlob 9s ease-in-out infinite alternate;
          will-change: transform, filter;
        }
        .hero-liquid-blob-secondary {
          animation: heroLiquidBlobSecondary 12s ease-in-out infinite alternate;
          will-change: transform, filter;
        }
        .hero-reactive-grid {
          background-size: 40px 40px;
          background-image:
            linear-gradient(to right, rgba(196, 181, 253, 0.24) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(147, 197, 253, 0.2) 1px, transparent 1px);
          mask-image: radial-gradient(ellipse at center, black 0%, rgba(0, 0, 0, 0.72) 44%, transparent 76%);
          mask-repeat: no-repeat;
          mask-size: 1040px 570px;
          -webkit-mask-image: radial-gradient(ellipse at center, black 0%, rgba(0, 0, 0, 0.72) 44%, transparent 76%);
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-size: 1040px 570px;
          animation: heroReactiveGrid 9s ease-in-out infinite alternate;
          mix-blend-mode: screen;
          opacity: 0.52;
          will-change: mask-position;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-liquid-blob,
          .hero-liquid-blob-secondary,
          .hero-reactive-grid {
            animation: none;
          }
          .hero-liquid-blob,
          .hero-liquid-blob-secondary {
            transform: translate3d(-50%, -50%, 0);
          }
          .hero-reactive-grid {
            mask-position: center 44%;
            -webkit-mask-position: center 44%;
          }
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge */}
        <a
          href={releaseData ? releaseData.url : "https://github.com/bottlesdevs/Bottles/releases/latest"}
          target="_blank"
          rel="noreferrer"
          className="inline-block text-xs font-bold tracking-widest uppercase mb-8 text-zinc-500 dark:text-zinc-400 animate-in fade-in slide-in-from-bottom-4 duration-700 hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          <span>{releaseData ? `${t.heroReleased.release}${releaseData.tag}` : t.heroReleased.newRelease}</span>
        </a>

        {/* Main Title */}
        <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter text-zinc-900 dark:text-white mb-6 drop-shadow-sm animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
          Bottles <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500">66</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-3xl mx-auto text-2xl md:text-3xl text-zinc-500 dark:text-zinc-400 mb-12 font-medium leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          {t.heroReleased.subtitle.includes('!') ? (
            <>
              {t.heroReleased.subtitle.split('!')[0]}!
              <br />
              {t.heroReleased.subtitle.split('!').slice(1).join('!').trim()}
            </>
          ) : t.heroReleased.subtitle}
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
            alt="Bottles 66 Interface"
            className="w-full h-auto block drop-shadow-2xl rounded-xl animate-float"
          />
        </div>
      </div>

      {/* Release Notes Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={handleCloseReleaseNotes}
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
                onClick={handleCloseReleaseNotes}
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
