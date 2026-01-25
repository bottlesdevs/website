import { Terminal, GitBranch, Activity, Coffee, GlassWater, ArrowRight, Code2, AlertCircle } from 'lucide-react';


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
                                <p>{t.runners.soda.upgrading}</p>
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
                        </div>
                        <div className="flex-1 order-1 lg:order-2 flex justify-center">
                            <img
                                src="https://raw.githubusercontent.com/bottlesdevs/data/main/logo/soda-logo.svg"
                                alt="Soda Runner Logo"
                                className="w-64 h-64 md:w-96 md:h-96 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-16">
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

                </div>
            </section>

            <section className="py-24 bg-white dark:bg-zinc-900/30 border-y border-zinc-200 dark:border-white/5">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12 text-center">{t.runners.comparison.title}</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                                    <th className="py-4 px-6 text-sm font-semibold text-zinc-500 uppercase tracking-wider">{t.runners.comparison.feature}</th>
                                    <th className="py-4 px-6 text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{t.runners.comparison.sodaRecommended}</th>
                                    <th className="py-4 px-6 text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">{t.runners.comparison.caffe}</th>
                                    <th className="py-4 px-6 text-sm font-semibold text-zinc-500 uppercase tracking-wider">{t.runners.comparison.vaniglia}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                                <tr>
                                    <td className="py-4 px-6 font-medium text-zinc-900 dark:text-white">{t.runners.comparison.base}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.valveWine}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.wineHQ}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.wineHQStaging}</td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-6 font-medium text-zinc-900 dark:text-white">{t.runners.comparison.bestFor}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.gamingModern}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.generalPurpose}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.testingVanilla}</td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-6 font-medium text-zinc-900 dark:text-white">{t.runners.comparison.patches}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.protonTKG}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.bottlesSpecific}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.minimalNone}</td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-6 font-medium text-zinc-900 dark:text-white">{t.runners.comparison.releaseCycle}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.independent}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.followsWineHQ}</td>
                                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{t.runners.comparison.followsWineHQ}</td>
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
                                        <span className="font-mono text-sm">soda-9.0-1</span>
                                    </div>
                                    <span className="text-xs text-zinc-500">{t.runners.contribute.passing}</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span className="font-mono text-sm">caffe-9.0</span>
                                    </div>
                                    <span className="text-xs text-zinc-500">{t.runners.contribute.passing}</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                        <span className="font-mono text-sm">vaniglia-staging</span>
                                    </div>
                                    <span className="text-xs text-zinc-500">{t.runners.contribute.building}</span>
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
