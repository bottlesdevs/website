import { ArrowRight, Award } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const GrantBanner = ({ onOpenPost }) => {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-r from-zinc-900 to-black border-y border-white/5 py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/5 skew-x-12 -translate-x-full animate-[shimmer_3s_infinite]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-2xl shadow-green-900/10">

          <div className="shrink-0 bg-green-500/10 p-4 rounded-xl border border-green-500/20 text-green-400">
            <Award className="w-8 h-8" />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-white">{t.grantBanner.title}</h2>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500 text-white tracking-wider uppercase">{t.grantBanner.badge}</span>
            </div>
            <p className="text-zinc-400 text-lg leading-relaxed">
              {t.grantBanner.description}
            </p>
            <button
              onClick={() => onOpenPost('2025-08-04-nlnet-commons-fund.md')}
              className="mt-4 inline-flex items-center text-white font-semibold hover:text-green-300 transition-colors group"
            >
              {t.grantBanner.learnMore} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrantBanner;