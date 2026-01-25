import { useLanguage } from '../i18n/LanguageContext';

const Hero = ({ onDownload, onOpenPost }) => {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-8xl font-black text-zinc-900 dark:text-white mb-8 tracking-tighter">
          Bottles
        </h1>
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto font-medium">
          {t.hero.simpleSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onDownload}
            className="px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-bold hover:scale-105 transition-transform shadow-xl"
          >
            {t.heroReleased.downloadButton}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;