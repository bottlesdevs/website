import React, { useEffect, useState } from 'react';
import jsyaml from 'js-yaml';
import { Search, Download, Info, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';

const AppStore = () => {
    const { t } = useLanguage();
    const [installers, setInstallers] = useState({});
    const [filteredInstallers, setFilteredInstallers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const fetchInstallers = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/bottlesdevs/programs/main/index.yml');
                const text = await response.text();
                const data = jsyaml.load(text);
                setInstallers(data);
                setFilteredInstallers(Object.entries(data));
            } catch (error) {
                console.error('Failed to fetch installers:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchInstallers();
    }, []);

    useEffect(() => {
        const filtered = Object.entries(installers).filter(([key, installer]) => {
            const matchesSearch = installer.Name.toLowerCase().includes(search.toLowerCase()) ||
                installer.Description.toLowerCase().includes(search.toLowerCase());
            const matchesFilter = filter === 'All' || installer.Grade === filter || installer.Category === filter;
            return matchesSearch && matchesFilter;
        });
        setFilteredInstallers(filtered);
    }, [search, filter, installers]);

    const getGradeColor = (grade) => {
        switch (grade.toLowerCase()) {
            case 'platinum': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
            case 'gold': return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
            case 'silver': return 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300';
            case 'bronze': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
            default: return 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300';
        }
    };

    const getCategoryColor = (category) => {
        switch (category.toLowerCase()) {
            case 'software': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
            case 'games': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
            default: return 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300';
        }
    };

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-300">
            <section className="pt-32 pb-12 bg-white dark:bg-zinc-900/20 border-b border-zinc-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">{t.appStore.title}</h1>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10">
                        {t.appStore.description}
                    </p>

                    <div className="max-w-md mx-auto relative">
                        <input
                            type="text"
                            placeholder={t.appStore.searchPlaceholder}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-full bg-zinc-100 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-blue-500 text-zinc-900 dark:text-white placeholder-zinc-500"
                        />
                        <Search className="absolute left-4 top-3.5 w-5 h-5 text-zinc-400" />
                    </div>

                    <div className="mt-8">
                        <a
                            href="https://github.com/bottlesdevs/programs?tab=readme-ov-file#how-to-contribute"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                        >
                            <Upload className="w-4 h-4" />
                            {t.appStore.publish}
                        </a>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {['All', 'Platinum', 'Gold', 'Silver', 'Bronze'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === f
                                ? 'bg-zinc-900 text-white dark:bg-white dark:text-black shadow-lg'
                                : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800'
                                }`}
                        >
                            {t.appStore.filters[f.toLowerCase()]}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <div className="text-center py-20">
                        <div className="inline-block w-12 h-12 border-4 border-zinc-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                        <p className="text-zinc-500">{t.appStore.loading}</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredInstallers.map(([key, installer]) => (
                            <div key={key} className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={`https://github.com/bottlesdevs/programs/blob/main/data/${key}/${installer.Icon}?raw=true`}
                                        alt={installer.Name}
                                        className="w-12 h-12 object-contain"
                                        onError={(e) => { e.target.src = 'https://usebottles.com/assets/icon.png' }}
                                    />
                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white line-clamp-1">{installer.Name}</h3>
                                </div>

                                <p className="text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-2 flex-grow">
                                    {installer.Description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getGradeColor(installer.Grade)}`}>
                                        {installer.Grade}
                                    </span>
                                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(installer.Category)}`}>
                                        {installer.Category}
                                    </span>
                                </div>

                                <div className="flex gap-3 mt-auto">
                                    <Link
                                        to={`/app#${key}`}
                                        className="flex-1 py-2 px-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white text-center text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Info className="w-4 h-4" />
                                        {t.appStore.card.details}
                                    </Link>
                                    <Link
                                        to="/docs/bottles/installers"
                                        className="flex-1 py-2 px-4 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-black text-center text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Download className="w-4 h-4" />
                                        {t.appStore.card.install}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AppStore;
