import { Link } from 'react-router-dom';
import { Layers, Puzzle, CloudDownload } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

const DatabaseHome = () => {
    const { t } = useLanguage();
    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-300">
            <section className="pt-32 pb-20 border-b border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">{t.database.title}</h1>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        {t.database.description}
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-3 gap-8">
                    <Link to="/database/dependencies" className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                            <Layers className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">{t.database.dependencies.title}</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">
                            {t.database.dependencies.description}
                        </p>
                    </Link>

                    <Link to="/database/components" className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                            <Puzzle className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">{t.database.components.title}</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">
                            {t.database.components.description}
                        </p>
                    </Link>

                    <Link to="/appstore" className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                            <CloudDownload className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">{t.database.installers.title}</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">
                            {t.database.installers.description}
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DatabaseHome;
