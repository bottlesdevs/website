import React, { useEffect, useState } from 'react';
import jsyaml from 'js-yaml';
import { ExternalLink, AlertCircle } from 'lucide-react';


import { useLanguage } from '../../i18n/LanguageContext';

const Dependencies = () => {
    const { t } = useLanguage();
    const [dependencies, setDependencies] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDependencies = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/bottlesdevs/dependencies/main/index.yml');
                const text = await response.text();
                const data = jsyaml.load(text);
                setDependencies(data);
            } catch (error) {
                console.error('Failed to fetch dependencies:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDependencies();
    }, []);

    const getCategoryColor = (category) => {
        switch (category.toLowerCase()) {
            case 'essentials': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
            case 'fonts': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
            case 'runtimes': return 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300';
            case 'winebridge': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
            case 'runners': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
            case 'vkd3d': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300';
            case 'dxvk': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
            case 'nvapi': return 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300';
            case 'latencyflex': return 'bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300';
            default: return 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300';
        }
    };

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-300">
            <section className="pt-32 pb-20 border-b border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">{t.database.dependencies.title}</h1>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">
                        {t.database.dependencies.description}
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm">
                    {loading ? (
                        <div className="p-12 text-center">
                            <div className="inline-block w-8 h-8 border-4 border-zinc-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                            <p className="text-zinc-500">{t.database.dependencies.loading}</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800">
                                    <tr>
                                        <th className="px-6 py-4 font-semibold text-zinc-900 dark:text-white">{t.database.table.name}</th>
                                        <th className="px-6 py-4 font-semibold text-zinc-900 dark:text-white">{t.database.table.description}</th>
                                        <th className="px-6 py-4 font-semibold text-zinc-900 dark:text-white">{t.database.table.category}</th>
                                        <th className="px-6 py-4 font-semibold text-zinc-900 dark:text-white">{t.database.table.actions}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                                    {Object.entries(dependencies).map(([name, data]) => (
                                        <tr key={name} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors">
                                            <td className="px-6 py-4 font-medium text-zinc-900 dark:text-white">{name}</td>
                                            <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400">{data.Description}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(data.Category)}`}>
                                                    {data.Category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex gap-4 text-sm">
                                                    <a
                                                        href={`https://github.com/bottlesdevs/dependencies/blob/main/${data.Category}/${name}.yml`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                                                    >
                                                        {t.database.table.details} <ExternalLink className="w-3 h-3" />
                                                    </a>
                                                    <a
                                                        href="https://github.com/bottlesdevs/dependencies/issues/new/choose"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white flex items-center gap-1"
                                                    >
                                                        {t.database.table.report} <AlertCircle className="w-3 h-3" />
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dependencies;
