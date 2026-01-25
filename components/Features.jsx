import { Link } from 'react-router-dom';
import { Box, Zap, Shield, Globe, Cpu, RefreshCw, Gamepad2, ChevronRight, Code2, GitBranch } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const EagleIcon = ({ className }) => (
  <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M14.03 10.4768C14.03 10.4768 12.7332 5.99927 12.0063 3.76582C11.3273 1.68218 10.03 -0.0231676 7.30583 0.000233366C4.3056 0.268445 3.1773 2.41556 2.86551 3.66172C0.684194 4.59657 -0.177674 7.04278 0.0300293 7.97683C0.705305 7.35377 1.82678 6.41467 3.10011 6.44721C3.33067 6.51986 3.51685 6.68315 3.59244 6.98583C3.80041 7.81659 3.74848 12.6987 3.74848 12.6987L5.30645 11.0888L6.50093 12.5948L7.74763 10.7253L9.09761 12.3868L9.98057 10.4135L12.1102 12.0234L12.0064 9.89402L14.03 10.4768ZM6.36368 4.92318C5.84958 5.06174 5.3204 4.75719 5.18211 4.24333L6.8902 3.47683C7.02902 3.99066 6.87727 4.78519 6.36368 4.92318Z" fill="currentColor" />
  </svg>
);

const Features = ({ onNavigate }) => {
  const { t } = useLanguage();

  const features = [
    {
      title: t.features.gaming.title,
      description: t.features.gaming.description,
      icon: <Zap className="w-5 h-5" />,
    },
    {
      title: t.features.sandboxed.title,
      description: t.features.sandboxed.description,
      icon: <Shield className="w-5 h-5" />,
    },
    {
      title: t.features.versionManager.title,
      description: t.features.versionManager.description,
      icon: <RefreshCw className="w-5 h-5" />,
    },
    {
      title: t.features.dependencies.title,
      description: t.features.dependencies.description,
      icon: <Box className="w-5 h-5" />,
    },
    {
      title: t.features.versioned.title,
      description: t.features.versioned.description,
      icon: <GitBranch className="w-5 h-5" />,
    },
  ];

  return (
    <section id="features" className="py-32 bg-zinc-50 dark:bg-black border-t border-zinc-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white tracking-tight mb-6">
            {t.features.title} <br />
            <span className="text-zinc-500">{t.features.titleHighlight}</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden mb-32 shadow-sm dark:shadow-none">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-black p-8 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors group">
              <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center mb-6 text-zinc-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-white group-hover:border-blue-200 dark:group-hover:border-zinc-600 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-500 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}

          <Link
            to="/winebridge"
            onClick={() => window.scrollTo(0, 0)}
            className="bg-white dark:bg-black p-8 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors group"
          >
            <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center mb-6 text-zinc-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-white group-hover:border-blue-200 dark:group-hover:border-zinc-600 transition-all">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">{t.features.wineBridge.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-500 leading-relaxed text-sm">
              {t.features.wineBridge.description}
            </p>
          </Link>

          <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 dark:bg-zinc-800">
            <div className="bg-white dark:bg-black p-8 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors group">
              <div className="flex flex-col h-full justify-between gap-6">
                <div>
                  <div className="flex items-start gap-4 mb-6 md:mb-0">
                    <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-white group-hover:border-blue-200 dark:group-hover:border-zinc-600 transition-all shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">{t.features.installers.title}</h3>
                      <p className="text-zinc-600 dark:text-zinc-500 leading-relaxed text-sm">
                        {t.features.installers.description}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    onNavigate?.('appstore');
                    window.scrollTo(0, 0);
                  }}
                  className="w-full sm:w-auto self-center bg-zinc-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                >
                  {t.features.installers.button}
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-black p-8 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors group">
              <div className="flex flex-col h-full justify-between gap-6">
                <div>
                  <div className="flex items-start gap-4 mb-6 md:mb-0">
                    <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-white group-hover:border-blue-200 dark:group-hover:border-zinc-600 transition-all shrink-0">
                      <EagleIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                        {t.features.eagle.title}
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                          {t.features.eagle.badge}
                        </span>
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-500 leading-relaxed text-sm">
                        {t.features.eagle.description}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    // Link from react-router-dom handles this
                  }}
                  className="w-full sm:w-auto self-center bg-zinc-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                >
                  <Link to="/eagle" className="flex items-center gap-2">
                    {t.features.eagle.button}
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        {onNavigate && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl dark:shadow-none">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-purple-900/20 dark:to-blue-900/20"></div>
              <div className="relative p-10 flex flex-col h-full justify-between items-start gap-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-sm text-purple-700 dark:text-purple-300 mb-4">
                    <Gamepad2 className="w-4 h-4" />
                    <span>{t.features.gamingCard.badge}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">{t.features.gamingCard.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {t.features.gamingCard.description}
                  </p>
                </div>
                <button
                  onClick={() => {
                    onNavigate('gaming');
                    window.scrollTo(0, 0);
                  }}
                  className="bg-zinc-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center gap-2 shadow-lg"
                >
                  {t.features.gamingCard.button}
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl dark:shadow-none">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-orange-50 dark:from-pink-900/20 dark:to-orange-900/20"></div>
              <div className="relative p-10 flex flex-col h-full justify-between items-start gap-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-500/10 border border-pink-200 dark:border-pink-500/20 text-sm text-pink-700 dark:text-pink-300 mb-4">
                    <Cpu className="w-4 h-4" />
                    <span>{t.features.runnersCard.badge}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">{t.features.runnersCard.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {t.features.runnersCard.description}
                  </p>
                </div>
                <Link
                  to="/runners"
                  onClick={() => window.scrollTo(0, 0)}
                  className="bg-zinc-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center gap-2 shadow-lg"
                >
                  {t.features.runnersCard.button}
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Bottles Next Section - Full Width */}
      <div className="mt-20 relative py-20 overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center opacity-20 dark:opacity-10 pointer-events-none">
          <div className="w-[200%] h-[200%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_90deg,rgba(168,85,247,0.1)_180deg,transparent_270deg)] animate-[spin_10s_linear_infinite]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent dark:via-purple-500/10"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-medium mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4" />
            <span className="tracking-wide uppercase text-xs font-bold">{t.features.bottlesNext.badge}</span>
          </div>

          <h3 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-8 tracking-tight">
            {t.features.bottlesNext.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">{t.features.bottlesNext.titleHighlight}</span>
          </h3>

          <p className="text-zinc-600 dark:text-zinc-400 text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl mx-auto">
            {t.features.bottlesNext.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/next"
              onClick={() => window.scrollTo(0, 0)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-bold hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 shadow-xl shadow-purple-500/20"
            >
              {t.features.bottlesNext.explore}
              <ChevronRight className="w-5 h-5" />
            </Link>
            <a
              href="https://github.com/bottlesdevs/bottles-next"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-bold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
            >
              <Code2 className="w-5 h-5" />
              {t.features.bottlesNext.viewSource}
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Features;