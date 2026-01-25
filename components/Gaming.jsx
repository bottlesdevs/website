import { Link } from 'react-router-dom';
import { Download, Gamepad2, Layers, Database, Cpu, ChevronRight, MonitorPlay, ExternalLink } from 'lucide-react';

import { useLanguage } from '../i18n/LanguageContext';

const Gaming = ({ onDownload }) => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-black">

        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="https://usebottles.com/assets/videos/gaming-1.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] opacity-80"></div>
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center flex flex-col items-center justify-center h-full pt-24">
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter text-white mb-8 drop-shadow-2xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            {t.gamingPage.hero.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              {t.gamingPage.hero.titleHighlight}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-lg animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            {t.gamingPage.hero.subtitle}
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <button
              onClick={onDownload}
              className="group relative px-8 py-4 bg-white text-black rounded-full text-lg font-bold hover:bg-zinc-200 transition-all flex items-center gap-3 overflow-hidden"
            >
              <Download className="w-5 h-5" />
              <span>{t.gamingPage.hero.download}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
            </button>
          </div>
        </div>
      </section>


      <section className="py-32 relative border-t border-white/5 bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">

            <div className="flex-1 space-y-8 lg:max-w-xl relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                {t.gamingPage.platformHub.title} <br />
                <span className="text-zinc-500">{t.gamingPage.platformHub.titleHighlight}</span>
              </h2>

              <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
                <p>
                  {t.gamingPage.platformHub.description1}
                </p>
                <p>
                  <strong className="text-white">Epic Games Store, GOG Galaxy, EA App, Battle.net</strong>, {t.gamingPage.platformHub.description2.split(', ').slice(4).join(', ')}
                </p>
                <p>
                  {t.gamingPage.platformHub.description3}
                </p>
              </div>

              <Link to="/docs" className="inline-flex items-center text-white font-semibold border-b border-white/20 pb-1 hover:border-white transition-colors">
                {t.gamingPage.platformHub.documentation} <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="flex-1 w-full relative lg:-mr-64 mt-12 lg:mt-0">
              <div className="absolute inset-0 bg-purple-900/20 blur-[100px] rounded-full pointer-events-none"></div>
              <img
                src="https://usebottles.com/assets/hero/gaming-platforms.png"
                alt="Supported Gaming Platforms"
                className="relative z-10 max-w-none w-[150%] lg:w-[130%] transform translate-x-10 lg:translate-x-0"
              />
            </div>

          </div>
        </div>
      </section>


      <section className="py-32 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t.gamingPage.integration.title}</h2>
            <p className="text-zinc-400 text-xl leading-relaxed">
              {t.gamingPage.integration.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              t.gamingPage.integration.epic,
              t.gamingPage.integration.ubisoft,
              t.gamingPage.integration.steam
            ].map((name, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl flex flex-col items-center justify-center hover:border-zinc-600 transition-colors group">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{name}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>


      <section className="py-32 bg-zinc-950 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl">
              {t.gamingPage.proton.title}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">

            <div className="bg-zinc-900/30 border border-white/10 rounded-3xl p-10 flex flex-col hover:bg-zinc-900/50 transition-colors group">
              <div className="w-14 h-14 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center mb-8">
                <Layers className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t.gamingPage.proton.prefix.title}</h3>
              <p className="text-zinc-400 text-lg leading-relaxed flex-grow">
                {t.gamingPage.proton.prefix.description}
              </p>
            </div>

            <div className="bg-zinc-900/30 border border-white/10 rounded-3xl p-10 flex flex-col hover:bg-zinc-900/50 transition-colors">
              <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-8">
                <MonitorPlay className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t.gamingPage.proton.bridge.title}</h3>
              <p className="text-zinc-400 text-lg leading-relaxed flex-grow">
                {t.gamingPage.proton.bridge.description}
              </p>
            </div>

          </div>

          <div className="relative rounded-3xl overflow-hidden border border-white/10 group bg-black">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm z-0"></div>

            <div className="relative z-10 p-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{t.gamingPage.proton.protondb.title}</h3>
                <p className="text-zinc-300 text-lg max-w-3xl leading-relaxed">
                  {t.gamingPage.proton.protondb.description}
                </p>
              </div>
              <a
                href="https://www.protondb.com/"
                target="_blank"
                rel="noreferrer"
                className="shrink-0 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
              >
                {t.gamingPage.proton.protondb.button} <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Gaming;