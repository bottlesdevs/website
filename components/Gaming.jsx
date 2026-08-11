import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download, Gamepad2, Layers, Database, Cpu, ChevronRight, MonitorPlay, ExternalLink } from 'lucide-react';

import { useLanguage } from '../i18n/LanguageContext';

const Gaming = ({ onDownload }) => {
  const { t, language } = useLanguage();
  const location = useLocation();
  const isArabic = language === 'ar';

  useEffect(() => {
    if (location.hash !== '#launcher-integrations') return undefined;

    const timer = window.setTimeout(() => {
      document.getElementById('launcher-integrations')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);

    return () => window.clearTimeout(timer);
  }, [location.hash]);

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
            <Link
              to="/umu"
              onClick={() => window.scrollTo(0, 0)}
              className="px-8 py-4 border border-white/30 bg-black/30 backdrop-blur-md text-white rounded-full text-lg font-bold hover:bg-white/10 transition-colors flex items-center gap-3"
            >
              <Gamepad2 className="w-5 h-5" />
              Discover UMU
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32 relative border-t border-white/10 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(239,68,68,0.2),transparent_35%),radial-gradient(circle_at_85%_70%,rgba(153,27,27,0.16),transparent_30%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-14 items-center">
            <div>
              <span className="text-red-400 font-bold uppercase tracking-wider text-sm">New in Bottles 66</span>
              <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">UMU joins the Library.</h2>
              <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                UMU brings the Steam Linux Runtime and the environment Proton expects outside Steam. Bottles now gives that system a place inside the Library you already use, where you can install a known game or add your own, keep its prefix and Proton build, and launch it without installing Steam or adding anything to the Steam Library.
              </p>
              <Link
                to="/umu"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center gap-2 bg-white text-black px-7 py-4 rounded-full font-bold hover:bg-zinc-200 transition-colors"
              >
                Explore UMU in Bottles
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-red-500/25 to-rose-900/20 blur-3xl" />
              <img
                src="/uploads/bottles-66/umu-library.png"
                alt="UMU games in the Bottles Library"
                className="relative w-full rounded-2xl border border-white/20 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-28 md:py-36 bg-black border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_52%,rgba(126,34,206,0.22),transparent_30%),radial-gradient(circle_at_70%_38%,rgba(79,70,229,0.1),transparent_34%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-14 lg:gap-20 items-center">
            <div className="relative flex justify-center min-h-[28rem] items-center">
              <div className="absolute w-80 h-80 rounded-full bg-purple-600/20 blur-[90px]" />
              <img
                src="https://raw.githubusercontent.com/bottlesdevs/data/main/logo/soda-logo.svg"
                alt="Soda"
                className="relative h-[25rem] md:h-[31rem] drop-shadow-2xl"
              />
            </div>
            <div className="max-w-3xl">
              <span className="text-purple-300 font-bold uppercase tracking-wider text-sm">The Bottles runner</span>
              <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-7">Games run better with Soda.</h2>
              <p className="text-xl text-zinc-400 leading-relaxed mb-9">
                Soda is the Wine runner maintained for Bottles. It follows Valve's Wine base, includes the patches Bottles needs, and receives compatibility fixes without waiting for another runner to change direction. Native Wayland, HDR, 32-bit applications, modern synchronization, and game-focused patches live in the same build.
              </p>
              <Link
                to="/runners"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center gap-2 bg-white text-black px-7 py-4 rounded-full font-bold hover:bg-zinc-200 transition-colors"
              >
                Discover Soda and ProtoSoda
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      <section className="py-32 relative border-t border-white/5 bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

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

            <div className={`flex-1 w-full relative mt-12 lg:mt-0 ${isArabic ? 'lg:-ml-64' : 'lg:-mr-64'}`}>
              <div className="absolute inset-0 bg-purple-900/20 blur-[100px] rounded-full pointer-events-none"></div>
              <img
                src="https://usebottles.com/assets/hero/gaming-platforms.png"
                alt="Supported Gaming Platforms"
                className={`relative z-10 max-w-none w-[150%] lg:w-[130%] ${isArabic ? '-translate-x-10 lg:translate-x-0' : 'translate-x-10 lg:translate-x-0'}`}
              />
            </div>

          </div>
        </div>
      </section>


      <section id="launcher-integrations" className="relative py-32 bg-zinc-950 border-t border-white/5 overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(59,130,246,0.12),transparent_32%),radial-gradient(circle_at_25%_60%,rgba(124,58,237,0.1),transparent_34%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-16 lg:gap-24 items-center">
            <div className="max-w-2xl">
              <span className="text-blue-400 font-bold uppercase tracking-wider text-sm">First-class launcher integrations</span>
              <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-7 text-white">Install the launcher. Keep the games.</h2>
              <p className="text-xl text-zinc-400 leading-relaxed mb-6">
                Bottles does not stop after installing Epic Games Store, Ubisoft Connect or Steam. It detects the games managed by each client and adds them to the Programs list and Library, with their own launch entry alongside everything else you run in Bottles.
              </p>
              <p className="text-lg text-zinc-500 leading-relaxed">
                Each source can be enabled separately in Preferences. The launcher remains responsible for downloads and updates, while Bottles keeps the games visible and ready to launch instead of treating the client as a black box.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-900/80 shadow-2xl overflow-hidden backdrop-blur-sm">
              <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white">Game sources</div>
                  <div className="text-sm text-zinc-500">Preferences</div>
                </div>
                <Gamepad2 className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                {[
                  t.gamingPage.integration.steam,
                  t.gamingPage.integration.epic,
                  t.gamingPage.integration.ubisoft
                ].map((name, i) => (
                  <div key={name} className="px-6 py-5 flex items-center gap-4 border-b border-white/10 last:border-0">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${i === 0 ? 'bg-blue-500/15 text-blue-300' : i === 1 ? 'bg-zinc-800 text-white' : 'bg-indigo-500/15 text-indigo-300'}`}>
                      <Database className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-white">{name}</div>
                      <div className="text-sm text-zinc-500">Show installed games in Bottles</div>
                    </div>
                    <div className="w-12 h-7 rounded-full bg-blue-500 p-1 flex justify-end shrink-0 shadow-inner">
                      <div className="w-5 h-5 rounded-full bg-white shadow" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 py-4 bg-black/25 text-sm text-zinc-400 flex items-center gap-3">
                <Gamepad2 className="w-4 h-4 text-blue-400 shrink-0" />
                Installed games appear automatically in your Library.
              </div>
            </div>
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
