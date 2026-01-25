import { Link } from 'react-router-dom';
import {
    Eye, Cpu, Layers, FileSearch, Shield, Gamepad2, Box, Music2, Monitor,
    FileCode2, AlertTriangle, Sparkles, ChevronRight, Zap, GitBranch, FileScan,
    Binary, CheckCircle2, ArrowRight, Terminal
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const EagleIcon = ({ className }) => (
    <svg width="24" height="21" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M14.03 10.4768C14.03 10.4768 12.7332 5.99927 12.0063 3.76582C11.3273 1.68218 10.03 -0.0231676 7.30583 0.000233366C4.3056 0.268445 3.1773 2.41556 2.86551 3.66172C0.684194 4.59657 -0.177674 7.04278 0.0300293 7.97683C0.705305 7.35377 1.82678 6.41467 3.10011 6.44721C3.33067 6.51986 3.51685 6.68315 3.59244 6.98583C3.80041 7.81659 3.74848 12.6987 3.74848 12.6987L5.30645 11.0888L6.50093 12.5948L7.74763 10.7253L9.09761 12.3868L9.98057 10.4135L12.1102 12.0234L12.0064 9.89402L14.03 10.4768ZM6.36368 4.92318C5.84958 5.06174 5.3204 4.75719 5.18211 4.24333L6.8902 3.47683C7.02902 3.99066 6.87727 4.78519 6.36368 4.92318Z" fill="currentColor" />
    </svg>
);

const Eagle = () => {
    const { t } = useLanguage();

    const detectionCategories = [
        { icon: <Monitor className="w-5 h-5" />, title: t.eaglePage.detection.categories.graphics.title, description: t.eaglePage.detection.categories.graphics.description },
        { icon: <Music2 className="w-5 h-5" />, title: t.eaglePage.detection.categories.audio.title, description: t.eaglePage.detection.categories.audio.description },
        { icon: <Cpu className="w-5 h-5" />, title: t.eaglePage.detection.categories.runtimes.title, description: t.eaglePage.detection.categories.runtimes.description },
        { icon: <Gamepad2 className="w-5 h-5" />, title: t.eaglePage.detection.categories.engines.title, description: t.eaglePage.detection.categories.engines.description },
        { icon: <Shield className="w-5 h-5" />, title: t.eaglePage.detection.categories.protection.title, description: t.eaglePage.detection.categories.protection.description },
        { icon: <Box className="w-5 h-5" />, title: t.eaglePage.detection.categories.installers.title, description: t.eaglePage.detection.categories.installers.description },
    ];

    const intelligenceFeatures = [
        {
            icon: <FileScan className="w-6 h-6" />,
            title: t.eaglePage.intelligence.features.deepScan.title,
            description: t.eaglePage.intelligence.features.deepScan.description,
        },
        {
            icon: <GitBranch className="w-6 h-6" />,
            title: t.eaglePage.intelligence.features.neighborAnalysis.title,
            description: t.eaglePage.intelligence.features.neighborAnalysis.description,
        },
        {
            icon: <Sparkles className="w-6 h-6" />,
            title: t.eaglePage.intelligence.features.smartSuggestions.title,
            description: t.eaglePage.intelligence.features.smartSuggestions.description,
        },
        {
            icon: <AlertTriangle className="w-6 h-6" />,
            title: t.eaglePage.intelligence.features.compatibilityWarnings.title,
            description: t.eaglePage.intelligence.features.compatibilityWarnings.description,
        },
    ];

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-300">
            {/* Hero Section */}
            <section className="pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-orange-500/5 to-transparent dark:from-amber-900/20 dark:via-orange-900/10 dark:to-transparent pointer-events-none" />
                <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-amber-500/10 to-transparent rounded-full blur-3xl pointer-events-none opacity-50 dark:opacity-30" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400 text-sm font-medium mb-8">
                        <span>{t.eaglePage.hero.beta}</span>
                    </div>

                    <div className="flex items-center justify-center gap-4 mb-8">
                        <EagleIcon className="w-16 h-16 text-amber-600 dark:text-amber-400" />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
                        {t.eaglePage.hero.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400">{t.eaglePage.hero.titleHighlight}</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-10">
                        {t.eaglePage.hero.description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/"
                            onClick={() => window.scrollTo(0, 0)}
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-bold hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20"
                        >
                            {t.eaglePage.hero.download}
                            <ChevronRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-white dark:bg-zinc-900/30 border-y border-zinc-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">{t.eaglePage.howItWorks.title}</h2>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                            {t.eaglePage.howItWorks.description}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: t.eaglePage.howItWorks.steps.peParsing.title, desc: t.eaglePage.howItWorks.steps.peParsing.description, icon: <Binary className="w-6 h-6" /> },
                            { step: '02', title: t.eaglePage.howItWorks.steps.yaraScanning.title, desc: t.eaglePage.howItWorks.steps.yaraScanning.description, icon: <FileSearch className="w-6 h-6" /> },
                            { step: '03', title: t.eaglePage.howItWorks.steps.contextAnalysis.title, desc: t.eaglePage.howItWorks.steps.contextAnalysis.description, icon: <Layers className="w-6 h-6" /> },
                            { step: '04', title: t.eaglePage.howItWorks.steps.suggestions.title, desc: t.eaglePage.howItWorks.steps.suggestions.description, icon: <CheckCircle2 className="w-6 h-6" /> },
                        ].map((item, i) => (
                            <div key={i} className="relative">
                                <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 h-full">
                                    <div className="text-5xl font-bold text-zinc-100 dark:text-zinc-800 absolute top-4 right-4">{item.step}</div>
                                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4 relative z-10">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{item.title}</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detection Categories */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
                            {t.eaglePage.detection.title}
                        </h2>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                            {t.eaglePage.detection.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
                        {detectionCategories.map((cat, i) => (
                            <div key={i} className="bg-white dark:bg-black p-8 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors group">
                                <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center mb-6 text-zinc-500 dark:text-zinc-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 group-hover:border-amber-200 dark:group-hover:border-amber-800 transition-all">
                                    {cat.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">{cat.title}</h3>
                                <p className="text-zinc-600 dark:text-zinc-500 leading-relaxed text-sm">{cat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Intelligence Features */}
            <section className="py-24 bg-gradient-to-b from-zinc-100 to-zinc-50 dark:from-zinc-900/50 dark:to-black border-t border-zinc-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
                            {t.eaglePage.intelligence.title}
                        </h2>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                            {t.eaglePage.intelligence.description}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {intelligenceFeatures.map((feat, i) => (
                            <div key={i} className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-amber-300 dark:hover:border-amber-800 transition-colors group">
                                <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                                    {feat.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">{feat.title}</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{feat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Report Preview */}
            <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://usebottles.com/assets/pattern.svg')] opacity-5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                {t.eaglePage.report.title}
                            </h2>
                            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                                {t.eaglePage.report.description}
                            </p>
                            <ul className="space-y-4 text-zinc-300">
                                {t.eaglePage.report.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-black/50 backdrop-blur-sm rounded-2xl border border-white/10 p-6 font-mono text-sm overflow-hidden">
                            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                                <span className="text-zinc-500">eagle_report.md</span>
                            </div>
                            <pre className="text-zinc-400 whitespace-pre-wrap text-xs leading-relaxed">{`# Eagle Analysis Report

## Binary Information
- **Name:** CoolGame.exe
- **Product:** Cool Game 2024
- **Architecture:** x86_64 (64-bit)
- **Build Date:** 2024-11-14

## Detected Technologies

### Graphics
- DirectX 11 (Imports)
- DXGI (Imports)

### Engines
- Unity IL2CPP (UnityPlayer.dll)

### Runtimes
- Mono (mono-2.0-bdwgc.dll)

## Suggested Optimizations
- [x] Enable DXVK (DX9-11)
- [x] Enable GameMode
- [x] Use discrete GPU

## Analysed Files
- CoolGame.exe
- UnityPlayer.dll
- mono-2.0-bdwgc.dll`}</pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-b from-amber-50 to-zinc-50 dark:from-amber-900/10 dark:to-black border-t border-zinc-200 dark:border-white/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <EagleIcon className="w-20 h-20 text-amber-600 dark:text-amber-400 mx-auto mb-8" />
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
                        {t.eaglePage.cta.title}
                    </h2>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
                        {t.eaglePage.cta.description}
                    </p>
                    <Link
                        to="/"
                        onClick={() => window.scrollTo(0, 0)}
                        className="inline-flex items-center px-10 py-5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-bold text-lg hover:scale-105 transition-transform duration-200 shadow-xl shadow-amber-500/20"
                    >
                        {t.eaglePage.cta.button}
                        <ChevronRight className="w-6 h-6 ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Eagle;
