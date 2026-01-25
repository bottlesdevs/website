import {
    Terminal, Cpu, Database, Play, FileCode2, Zap, Download,
    Layers, Shield, AlertCircle, CheckCircle2, GitBranch
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const WineBridge = ({ onDownload }) => {
    const { t } = useLanguage();

    const commands = [
        {
            name: 'runExe',
            description: t.wineBridgePage.commands.list.runExe.description,
            icon: <Play className="w-5 h-5" />,
        },
        {
            name: 'getRunningProcs',
            description: t.wineBridgePage.commands.list.getRunningProcs.description,
            icon: <Cpu className="w-5 h-5" />,
        },
        {
            name: 'killProc / killProcByName',
            description: t.wineBridgePage.commands.list.killProc.description,
            icon: <AlertCircle className="w-5 h-5" />,
        },
        {
            name: 'registryKeys',
            description: t.wineBridgePage.commands.list.registryKeys.description,
            icon: <Database className="w-5 h-5" />,
        },
    ];

    const benefits = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: t.wineBridgePage.why.benefits.fast.title,
            description: t.wineBridgePage.why.benefits.fast.description,
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: t.wineBridgePage.why.benefits.native.title,
            description: t.wineBridgePage.why.benefits.native.description,
        },
        {
            icon: <Layers className="w-6 h-6" />,
            title: t.wineBridgePage.why.benefits.simple.title,
            description: t.wineBridgePage.why.benefits.simple.description,
        },
        {
            icon: <GitBranch className="w-6 h-6" />,
            title: t.wineBridgePage.why.benefits.openSource.title,
            description: t.wineBridgePage.why.benefits.openSource.description,
        },
    ];

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-300">
            {/* Hero Section */}
            <section className="pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 via-orange-500/5 to-transparent dark:from-pink-900/20 dark:via-orange-900/10 dark:to-transparent pointer-events-none" />
                <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-pink-500/10 to-transparent rounded-full blur-3xl pointer-events-none opacity-50 dark:opacity-30" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
                        {t.wineBridgePage.hero.title}<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-600 dark:from-pink-400 dark:to-orange-400">{t.wineBridgePage.hero.titleHighlight}</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-10">
                        {t.wineBridgePage.hero.description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://github.com/bottlesdevs/WineBridge"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-bold hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 shadow-xl shadow-pink-500/20"
                        >
                            <FileCode2 className="w-5 h-5" />
                            {t.wineBridgePage.hero.github}
                        </a>
                        <button
                            onClick={onDownload}
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-bold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
                        >
                            <Download className="w-5 h-5" />
                            {t.wineBridgePage.hero.try}
                        </button>
                    </div>
                </div>
            </section>

            {/* Why WineBridge */}
            <section className="py-24 bg-white dark:bg-zinc-900/30 border-y border-zinc-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">{t.wineBridgePage.why.title}</h2>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                            <a href="https://linux.die.net/man/1/winedbg" target='_blank' className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-sm">winedbg</a> {t.wineBridgePage.why.description.split('winedbg')[1]}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                                <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-orange-100 dark:from-pink-900/30 dark:to-orange-900/30 rounded-xl flex items-center justify-center text-pink-600 dark:text-pink-400 mb-4">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{benefit.title}</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 text-sm">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Available Commands */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
                            {t.wineBridgePage.commands.title}
                        </h2>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                            {t.wineBridgePage.commands.description.split('WineBridge.exe help')[0]}<code className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-sm">WineBridge.exe help</code>{t.wineBridgePage.commands.description.split('WineBridge.exe help')[1]}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-px bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
                        {commands.map((cmd, i) => (
                            <div key={i} className="bg-white dark:bg-black p-8 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors group">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 group-hover:border-pink-200 dark:group-hover:border-pink-800 transition-all shrink-0">
                                        {cmd.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 font-mono">{cmd.name}</h3>
                                        <p className="text-zinc-600 dark:text-zinc-500 text-sm">{cmd.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Usage Example */}
            <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://usebottles.com/assets/pattern.svg')] opacity-5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                {t.wineBridgePage.usage.title}
                            </h2>
                            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                                {t.wineBridgePage.usage.description}
                            </p>
                            <ul className="space-y-4 text-zinc-300">
                                {t.wineBridgePage.usage.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-black/50 backdrop-blur-sm rounded-2xl border border-white/10 p-6 font-mono text-sm overflow-hidden">
                            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                                <span className="text-zinc-500">terminal</span>
                            </div>
                            <pre className="text-zinc-400 whitespace-pre-wrap text-xs leading-relaxed">{`# List running processes
$ wine WineBridge.exe getRunningProcs
explorer.exe|1234
plugplay.exe|5678
winedevice.exe|9012

# Kill a process by name
$ wine WineBridge.exe killProcByName explorer.exe

# Run an executable
$ wine WineBridge.exe runExe "C:\\Program Files\\App\\app.exe"

# List registry startup entries
$ wine WineBridge.exe registryKeys HCU list
Steam|"C:\\Program Files\\Steam\\Steam.exe" -silent`}</pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-b from-pink-50 to-zinc-50 dark:from-pink-900/10 dark:to-black border-t border-zinc-200 dark:border-white/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Terminal className="w-16 h-16 text-pink-600 dark:text-pink-400 mx-auto mb-8" />
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
                        {t.wineBridgePage.cta.title}
                    </h2>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
                        {t.wineBridgePage.cta.description}
                    </p>
                    <a
                        href="https://github.com/bottlesdevs/WineBridge"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-10 py-5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-bold text-lg hover:scale-105 transition-transform duration-200 shadow-xl shadow-pink-500/20"
                    >
                        <FileCode2 className="w-6 h-6 mr-2" />
                        {t.wineBridgePage.cta.button}
                    </a>
                </div>
            </section>
        </div>
    );
};

export default WineBridge;
