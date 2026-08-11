import { Link } from 'react-router-dom';
import {
    ArrowRight, Check, Download, ExternalLink, FolderCog, Gamepad2,
    Library, PackageCheck, Search, Settings2, Sparkles
} from 'lucide-react';

const Umu = () => (
    <div className="min-h-screen bg-black text-white overflow-hidden">
        <section className="relative pt-36 pb-24 border-b border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(239,68,68,0.3),transparent_38%),radial-gradient(circle_at_80%_40%,rgba(153,27,27,0.2),transparent_34%)]" />
            <div className="absolute inset-0 bg-grid opacity-20" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-center">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-7">
                            Your games. <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Powered by UMU.</span>
                        </h1>
                        <p className="text-xl text-zinc-300 leading-relaxed mb-10 max-w-2xl">
                            Bottles 66 brings UMU into the Library you are already used to. UMU provides the Steam runtime container and environment Proton expects, so Bottles can launch Windows games as Proton games outside Steam, without adding them to the Steam Library or requiring Steam to be installed.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/"
                                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition-colors"
                            >
                                <Download className="w-5 h-5" />
                                Get Bottles
                            </Link>
                            <a
                                href="https://github.com/Open-Wine-Components/umu-launcher"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-colors"
                            >
                                Meet UMU
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                        <a
                            href="https://github.com/Open-Wine-Components"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-zinc-400 hover:text-red-300 transition-colors"
                        >
                            A project by Open Wine Components
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-8 bg-gradient-to-r from-red-500/30 to-rose-900/20 blur-3xl" />
                        <img
                            src="/uploads/bottles-66/umu-library.png"
                            alt="UMU games in the Bottles Library"
                            className="relative rounded-2xl border border-white/20 shadow-2xl w-full"
                        />
                    </div>
                </div>
            </div>
        </section>

        <section className="py-28 bg-zinc-950 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-14">
                    <span className="text-red-400 font-bold tracking-wider uppercase text-sm">Inside the Library</span>
                    <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">A Proton game feels at home in Bottles.</h2>
                    <p className="text-xl text-zinc-400 leading-relaxed">
                        Games launched through UMU appear beside the programs already in your Library. Bottles keeps the cover, executable, prefix, Proton build, launch options, dependencies, and environment settings together while UMU prepares the runtime Proton uses to start the game.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { icon: Gamepad2, title: 'Proton outside Steam', text: 'Run games through the Steam Linux Runtime without installing Steam or adding them to its Library.' },
                        { icon: Search, title: 'Recognize known games', text: 'Match a title with the shared UMU database so its identity and available game fixes follow it.' },
                        { icon: Library, title: 'Bring your own game', text: 'Set up an installer or executable even when the title is not present in the database.' },
                        { icon: FolderCog, title: 'Manage every prefix', text: 'Open, inspect, configure, or remove the prefix tied to each game.' },
                    ].map(({ icon: Icon, title, text }) => (
                        <div key={title} className="rounded-2xl border border-white/10 bg-black p-7 hover:border-red-500/40 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-red-500/15 text-red-300 flex items-center justify-center mb-6">
                                <Icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{title}</h3>
                            <p className="text-zinc-400 leading-relaxed">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-28 bg-black relative overflow-hidden">
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-75" viewBox="0 0 1440 720" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                    <filter id="protonGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="5" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                {[
                    { path: 'M-80 110 C180 80 300 220 540 330', color: '#a855f7', delay: '0s' },
                    { path: 'M-40 610 C180 640 340 470 550 365', color: '#22d3ee', delay: '-1.4s' },
                    { path: 'M1480 40 C1100 90 900 210 610 330', color: '#22d3ee', delay: '-2.6s' },
                    { path: 'M1500 680 C1110 640 900 500 610 375', color: '#a855f7', delay: '-3.8s' },
                    { path: 'M720 -60 C700 100 640 210 585 315', color: '#c084fc', delay: '-0.8s' },
                    { path: 'M700 780 C690 620 630 500 580 390', color: '#67e8f9', delay: '-3.1s' },
                ].map(({ path, color, delay }) => (
                    <g key={path}>
                        <path d={path} fill="none" stroke={color} strokeOpacity="0.12" strokeWidth="1" />
                        <path
                            d={path}
                            fill="none"
                            stroke={color}
                            strokeWidth="2"
                            strokeLinecap="round"
                            pathLength="100"
                            strokeDasharray="5 95"
                            filter="url(#protonGlow)"
                            className="proton-stream"
                            style={{ animationDelay: delay }}
                        />
                    </g>
                ))}
            </svg>
            <style>{`
                @keyframes protonStream {
                    to { stroke-dashoffset: -100; }
                }
                .proton-stream {
                    animation: protonStream 4.8s linear infinite;
                }
                @media (prefers-reduced-motion: reduce) {
                    .proton-stream { animation: none; }
                }
            `}</style>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative flex items-center justify-center min-h-96">
                        <div className="absolute w-80 h-80 bg-gradient-to-br from-purple-500/30 to-cyan-400/30 rounded-full blur-3xl" />
                        <img src="/assets/protosoda-runner.svg" alt="ProtoSoda" className="relative h-80 md:h-[28rem] mx-auto drop-shadow-2xl" />
                    </div>

                    <div>
                        <span className="inline-flex items-center gap-2 text-cyan-300 font-bold tracking-wider uppercase text-sm mb-5">
                            <Sparkles className="w-4 h-4" />
                            Made for UMU
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">Meet ProtoSoda.</h2>
                        <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                            ProtoSoda is the Soda you already know, adapted for Proton and ready for UMU. It brings the same compatibility work and Bottles integration to games launched through UMU. Bottles uses it by default, but every game can use another Proton build when needed.
                        </p>
                        <div className="space-y-4">
                            {[
                                'Managed through the Bottles runner catalog',
                                'Prepared for UMU and protonfixes',
                                'Selectable for each game',
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3 text-zinc-200">
                                    <span className="w-6 h-6 rounded-full bg-cyan-500/15 text-cyan-300 flex items-center justify-center">
                                        <Check className="w-4 h-4" />
                                    </span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-28 bg-zinc-950 border-y border-white/10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl border border-white/10 bg-black p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-10 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-5 text-red-300">
                            <PackageCheck className="w-7 h-7" />
                            <span className="font-bold uppercase tracking-wider text-sm">Dependencies</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-5">Use the catalog you trust.</h2>
                        <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl">
                            Install compatible Bottles dependency recipes from a searchable dialog, or select Winetricks for verbs that belong to its catalog. Protonfixes stays under UMU control and known games receive it automatically.
                        </p>
                    </div>
                    <Gamepad2 className="w-28 h-28 text-red-500/60 hidden md:block" />
                </div>
            </div>
        </section>

        <section className="py-28 bg-gradient-to-r from-red-950 via-black to-rose-950 text-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">Built with Open Wine Components.</h2>
                <p className="text-xl text-zinc-300 leading-relaxed mb-10">
                    UMU is developed by Open Wine Components, the team bringing projects together around a shared Wine and Proton ecosystem. Bottles is part of that team and now gives UMU a complete graphical home.
                </p>
                <a
                    href="https://github.com/Open-Wine-Components"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-zinc-200 transition-colors"
                >
                    Open Wine Components
                    <ArrowRight className="w-5 h-5" />
                </a>
            </div>
        </section>
    </div>
);

export default Umu;
