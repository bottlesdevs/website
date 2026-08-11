import { Terminal, GitBranch, Activity, Coffee, GlassWater, Gamepad2, ArrowRight, Code2, AlertCircle, Zap } from 'lucide-react';


import { useLanguage } from '../i18n/LanguageContext';

const Runners = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-300">

            <section className="pt-32 pb-20 bg-white dark:bg-zinc-900/20 border-b border-zinc-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8">
                        <Terminal className="w-4 h-4" />
                        <span>{t.runners.badge}</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-8 tracking-tight">
                        {t.runners.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{t.runners.titleHighlight}</span>
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                        {t.runners.subtitle}
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
                        <div className="flex-1 order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 text-xs font-bold uppercase tracking-wider mb-6">
                                <GlassWater className="w-4 h-4" />
                                {t.runners.soda.badge}
                            </div>
                            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">{t.runners.soda.title}</h2>
                            <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-xl border border-purple-200 dark:border-purple-800 mb-6 flex items-center gap-2">
                                <AlertCircle className="w-4 h-4" />
                                <p>{t.runners.soda.wineVersion}</p>
                            </div>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                                {t.runners.soda.description1}
                            </p>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                                {t.runners.soda.description2}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                                    <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{t.runners.soda.valveWine}</h3>
                                    <p className="text-sm text-zinc-500">{t.runners.soda.valveWineDesc}</p>
                                </div>
                                <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                                    <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{t.runners.soda.patches}</h3>
                                    <p className="text-sm text-zinc-500">{t.runners.soda.patchesDesc}</p>
                                </div>
                            </div>

                            <div className="mt-4 bg-purple-50 dark:bg-purple-950/20 p-5 rounded-xl border border-purple-200 dark:border-purple-900/60">
                                <div className="flex items-center gap-2 mb-2">
                                    <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                    <h3 className="font-bold text-zinc-900 dark:text-white">{t.runners.soda.adaptiveLaunch}</h3>
                                </div>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">{t.runners.soda.adaptiveLaunchDesc}</p>
                                <p className="text-xs font-semibold text-purple-700 dark:text-purple-300">{t.runners.soda.adaptiveLaunchRequires}</p>
                            </div>
                        </div>
                        <div className="flex-1 order-1 lg:order-2 flex justify-center">
                            <img
                                src="https://raw.githubusercontent.com/bottlesdevs/data/main/logo/soda-logo.svg"
                                alt="Soda Runner Logo"
                                className="w-64 h-64 md:w-96 md:h-96 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
                        <div className="flex-1 flex justify-center">
                            <img
                                src="https://raw.githubusercontent.com/bottlesdevs/data/main/logo/protosoda-logo.svg"
                                alt="ProtoSoda Runner Logo"
                                className="w-64 h-64 md:w-96 md:h-96 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
                                <Gamepad2 className="w-4 h-4" />
                                {t.runners.protosoda.badge}
                            </div>
                            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">{t.runners.protosoda.title}</h2>
                            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-xl border border-emerald-200 dark:border-emerald-800 mb-6 flex items-center gap-2">
                                <AlertCircle className="w-4 h-4" />
                                <p>{t.runners.protosoda.version}</p>
                            </div>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                                {t.runners.protosoda.description1}
                            </p>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                                {t.runners.protosoda.description2}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                                    <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{t.runners.protosoda.umu}</h3>
                                    <p className="text-sm text-zinc-500">{t.runners.protosoda.umuDesc}</p>
                                </div>
                                <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                                    <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{t.runners.protosoda.sodaCore}</h3>
                                    <p className="text-sm text-zinc-500">{t.runners.protosoda.sodaCoreDesc}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
                        <div className="flex-1 flex justify-center">
                            <img
                                src="https://raw.githubusercontent.com/bottlesdevs/data/main/logo/caffe-logo.svg"
                                alt="Caffe Runner Logo"
                                className="w-64 h-64 md:w-96 md:h-96 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-6">
                                <Coffee className="w-4 h-4" />
                                {t.runners.caffe.badge}
                            </div>
                            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">{t.runners.caffe.title}</h2>
                            <div className="bg-amber-100 dark:bg-amber-900/30 p-4 rounded-xl border border-amber-200 dark:border-amber-800 mb-6 flex items-center gap-2">
                                <AlertCircle className="w-4 h-4" />
                                <p>{t.runners.caffe.upgrading}</p>
                            </div>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                                {t.runners.caffe.description1}
                            </p>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                                {t.runners.caffe.description2}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                                    <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{t.runners.caffe.upstream}</h3>
                                    <p className="text-sm text-zinc-500">{t.runners.caffe.upstreamDesc}</p>
                                </div>
                                <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                                    <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{t.runners.caffe.alternative}</h3>
                                    <p className="text-sm text-zinc-500">{t.runners.caffe.alternativeDesc}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
                        <div className="flex-1 order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-400 text-xs font-bold uppercase tracking-wider mb-6">
                                <GitBranch className="w-4 h-4" />
                                {t.runners.vaniglia.badge}
                            </div>
                            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">{t.runners.vaniglia.title}</h2>
                            <div className="bg-lime-100 dark:bg-lime-900/30 p-4 rounded-xl border border-lime-200 dark:border-lime-800 mb-6 flex items-center gap-2">
                                <AlertCircle className="w-4 h-4" />
                                <p>{t.runners.vaniglia.version}</p>
                            </div>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                                {t.runners.vaniglia.description1}
                            </p>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                                {t.runners.vaniglia.description2}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                                    <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{t.runners.vaniglia.cleanBase}</h3>
                                    <p className="text-sm text-zinc-500">{t.runners.vaniglia.cleanBaseDesc}</p>
                                </div>
                                <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                                    <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{t.runners.vaniglia.staging}</h3>
                                    <p className="text-sm text-zinc-500">{t.runners.vaniglia.stagingDesc}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 order-1 lg:order-2 flex justify-center">
                            <img
                                src="https://raw.githubusercontent.com/bottlesdevs/data/main/logo/vaniglia-logo.svg"
                                alt="Vaniglia Runner Logo"
                                className="w-64 h-64 md:w-96 md:h-96 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 flex justify-center w-full">
                            <div className="w-full max-w-md rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-2xl">
                                <div className="flex items-center gap-3 pb-6 mb-6 border-b border-zinc-200 dark:border-zinc-800">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                                        <Code2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-zinc-900 dark:text-white">Wine 21.2.0 CX</p>
                                        <p className="text-sm text-zinc-500">{t.runners.crossover.buildLabel}</p>
                                    </div>
                                </div>
                                <div className="font-mono text-sm space-y-3 text-zinc-500 dark:text-zinc-400">
                                    <p><span className="text-blue-600 dark:text-blue-400">{t.runners.crossover.sourceLabel}</span> crossover-sources-21.2.0</p>
                                    <p><span className="text-blue-600 dark:text-blue-400">{t.runners.crossover.targetLabel}</span> x86_64</p>
                                    <p><span className="text-blue-600 dark:text-blue-400">{t.runners.crossover.statusLabel}</span> {t.runners.crossover.statusMaintained}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                                <Code2 className="w-4 h-4" />
                                {t.runners.crossover.badge}
                            </div>
                            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">{t.runners.crossover.title}</h2>
                            <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-xl border border-blue-200 dark:border-blue-800 mb-6 flex items-center gap-2">
                                <AlertCircle className="w-4 h-4" />
                                <p>{t.runners.crossover.version}</p>
                            </div>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                                {t.runners.crossover.description1}
                            </p>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                                {t.runners.crossover.description2}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                                    <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{t.runners.crossover.codeweavers}</h3>
                                    <p className="text-sm text-zinc-500">{t.runners.crossover.codeweaversDesc}</p>
                                </div>
                                <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                                    <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{t.runners.crossover.compatibility}</h3>
                                    <p className="text-sm text-zinc-500">{t.runners.crossover.compatibilityDesc}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="py-24 bg-white dark:bg-zinc-900/30 border-y border-zinc-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12 text-center">{t.runners.comparison.title}</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[900px] text-left border-collapse">
                            <thead>
                                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                                    <th className="py-4 px-6 text-sm font-semibold text-zinc-500 uppercase tracking-wider">{t.runners.comparison.feature}</th>
                                    <th className="py-4 px-6 text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{t.runners.comparison.sodaRecommended}</th>
                                    <th className="py-4 px-6 text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">{t.runners.comparison.protosoda}</th>
                                    <th className="py-4 px-6 text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">{t.runners.comparison.caffe}</th>
                                    <th className="py-4 px-6 text-sm font-semibold text-zinc-500 uppercase tracking-wider">{t.runners.comparison.vaniglia}</th>
                                    <th className="py-4 px-6 text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{t.runners.comparison.crossover}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                                <tr>
                                    <td className="py-4 px-6 font-medium text-zinc-900 dark:text-white">{t.runners.comparison.base}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.valveWine}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.proton}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.wineHQ}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.wineHQStaging}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.codeweaversWine}</td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-6 font-medium text-zinc-900 dark:text-white">{t.runners.comparison.bestFor}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.gamingModern}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.umuGaming}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.generalPurpose}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.testingVanilla}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.crossoverApps}</td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-6 font-medium text-zinc-900 dark:text-white">{t.runners.comparison.patches}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.protonTKG}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.sodaProton}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.bottlesSpecific}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.minimalNone}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.codeweaversPatches}</td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-6 font-medium text-zinc-900 dark:text-white">{t.runners.comparison.releaseCycle}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.independent}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.independent}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.followsWineHQ}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.followsWineHQ}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.followsCrossOver}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://usebottles.com/assets/pattern.svg')] opacity-5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-6">
                                <Code2 className="w-4 h-4" />
                                {t.runners.contribute.badge}
                            </div>
                            <h2 className="text-4xl font-bold mb-6">{t.runners.contribute.title}</h2>
                            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                                {t.runners.contribute.description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://github.com/bottlesdevs/build-tools/tree/main"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition-colors"
                                >
                                    <GitBranch className="w-5 h-5 mr-2" />
                                    {t.runners.contribute.viewSource}
                                </a>
                                <a
                                    href="https://github.com/bottlesdevs/wine/actions"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center px-6 py-3 rounded-full bg-zinc-800 text-white font-bold hover:bg-zinc-700 transition-colors border border-zinc-700"
                                >
                                    <Activity className="w-5 h-5 mr-2" />
                                    {t.runners.contribute.checkCI}
                                </a>
                            </div>
                        </div>

                        <div className="flex-1 w-full max-w-md bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                                <Terminal className="w-5 h-5 text-green-400" />
                                {t.runners.contribute.buildStatus}
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="font-mono text-sm">soda-11.0-5</span>
                                    </div>
                                    <span className="text-xs text-zinc-500">{t.runners.contribute.passing}</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span className="font-mono text-sm">protosoda-11.0-1</span>
                                    </div>
                                    <span className="text-xs text-zinc-500">{t.runners.contribute.passing}</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span className="font-mono text-sm">caffe-10.0</span>
                                    </div>
                                    <span className="text-xs text-zinc-500">{t.runners.contribute.passing}</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span className="font-mono text-sm">vaniglia-10.19</span>
                                    </div>
                                    <span className="text-xs text-zinc-500">{t.runners.contribute.passing}</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span className="font-mono text-sm">vaniglia-21.2.0-cx</span>
                                    </div>
                                    <span className="text-xs text-zinc-500">{t.runners.contribute.passing}</span>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-white/10 text-center">
                                <p className="text-sm text-zinc-500 mb-4">
                                    {t.runners.contribute.autoGenerated}
                                </p>
                                <a href="https://github.com/bottlesdevs/wine/actions" className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center">
                                    {t.runners.contribute.viewWorkflows} <ArrowRight className="w-3 h-3 ml-1" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Runners;
