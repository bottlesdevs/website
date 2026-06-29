import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import jsyaml from 'js-yaml';
import { marked } from 'marked';
import { ArrowLeft, Download, Star, Shield, Package, Settings, ExternalLink, X } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

const AppDetails = () => {
    const { t } = useLanguage();
    const location = useLocation();
    const [appId, setAppId] = useState('');
    const [entry, setEntry] = useState(null);
    const [details, setDetails] = useState(null);
    const [dependenciesData, setDependenciesData] = useState({});
    const [loading, setLoading] = useState(true);
    const [reviewContent, setReviewContent] = useState(null);
    const [showReview, setShowReview] = useState(false);

    useEffect(() => {
        const hash = location.hash.substring(1);
        if (hash) {
            setAppId(hash);
            fetchAppData(hash);
        }
    }, [location]);

    const fetchAppData = async (id) => {
        setLoading(true);
        try {
            const indexRes = await fetch('https://raw.githubusercontent.com/bottlesdevs/programs/main/index.yml');
            const indexText = await indexRes.text();
            const index = jsyaml.load(indexText);
            const appEntry = index[id];

            if (appEntry) {
                setEntry(appEntry);

                const detailsRes = await fetch(`https://raw.githubusercontent.com/bottlesdevs/programs/main/${appEntry.Category}/${id}.yml`);
                const detailsText = await detailsRes.text();
                const appDetails = jsyaml.load(detailsText);
                setDetails(appDetails);

                if (appDetails.Dependencies && appDetails.Dependencies.length > 0) {
                    const depRes = await fetch('https://raw.githubusercontent.com/bottlesdevs/dependencies/main/index.yml');
                    const depText = await depRes.text();
                    const depIndex = jsyaml.load(depText);
                    setDependenciesData(depIndex);
                }

                try {
                    const reviewRes = await fetch(`https://raw.githubusercontent.com/bottlesdevs/programs/main/Reviews/${id}.md`);
                    if (reviewRes.ok) {
                        const reviewText = await reviewRes.text();
                        setReviewContent(reviewText);
                    }
                } catch (e) {
                    console.log("No review found");
                }
            }
        } catch (error) {
            console.error('Failed to fetch app data:', error);
        } finally {
            setLoading(false);
        }
    };

    const getGradeColor = (grade) => {
        switch (grade?.toLowerCase()) {
            case 'platinum': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
            case 'gold': return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
            case 'silver': return 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300';
            case 'bronze': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
            default: return 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300';
        }
    };

    const getGradeDescription = (grade) => {
        const gradeKey = grade?.toLowerCase();
        return t.appStore?.details?.grades?.[gradeKey] || '';
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black">
                <div className="text-center">
                    <div className="inline-block w-12 h-12 border-4 border-zinc-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                    <p className="text-zinc-500">{t.appStore?.details?.loading || 'Loading app details...'}</p>
                </div>
            </div>
        );
    }

    if (!entry) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">{t.appStore?.details?.notFound || 'App not found'}</h1>
                    <Link to="/appstore" className="text-blue-600 hover:underline">{t.appStore?.details?.back || 'Back to App Store'}</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-300">
            <section className="pt-32 pb-12 bg-white dark:bg-zinc-900/20 border-b border-zinc-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/appstore" className="inline-flex items-center text-zinc-500 hover:text-zinc-900 dark:hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> {t.appStore?.details?.back || 'Back to App Store'}
                    </Link>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <img
                            src={`https://github.com/bottlesdevs/programs/blob/main/data/${appId}/${entry.Icon}?raw=true`}
                            alt={entry.Name}
                            className="w-24 h-24 object-contain"
                            onError={(e) => { e.target.src = 'https://usebottles.com/assets/icon.png' }}
                        />
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">{entry.Name}</h1>
                            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-6 max-w-3xl">{details?.Description}</p>

                            <div className="flex flex-wrap gap-3 mb-8">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getGradeColor(entry.Grade)}`}>
                                    {entry.Grade}
                                </span>
                                <span className="px-3 py-1 rounded-full text-sm font-medium bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300">
                                    {entry.Category}
                                </span>
                                <span className="px-3 py-1 rounded-full text-sm font-medium bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300">
                                    {entry.Arch === 'win64' ? '64-bit' : '32-bit'}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/docs/bottles/installers"
                                    className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
                                >
                                    <Download className="w-5 h-5 mr-2" />
                                    {t.appStore?.details?.install || 'Install'}
                                </Link>
                                {reviewContent && (
                                    <button
                                        onClick={() => setShowReview(true)}
                                        className="inline-flex items-center px-6 py-3 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white font-medium transition-colors"
                                    >
                                        <Star className="w-5 h-5 mr-2" />
                                        {t.appStore?.details?.readReview || 'Read review'}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
                    <img
                        src={`https://github.com/bottlesdevs/programs/blob/main/data/${appId}/screenshot.png?raw=true`}
                        alt={`${entry.Name} Screenshot`}
                        className="w-full h-auto"
                        onError={(e) => e.target.style.display = 'none'}
                    />
                </div>

                <section>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                        <Shield className="w-6 h-6 text-blue-600" />
                        {(t.appStore?.details?.aboutGrade || 'About this {grade} app').replace('{grade}', entry.Grade)}
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                        {getGradeDescription(entry.Grade)}
                    </p>
                </section>

                {details?.Dependencies && details.Dependencies.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                            <Package className="w-6 h-6 text-purple-600" />
                            {t.appStore?.details?.dependencies?.title || 'Dependencies'}
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                            {t.appStore?.details?.dependencies?.description || 'These dependencies are required for the installer.'}
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {details.Dependencies.map(dep => (
                                <div key={dep} className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
                                    <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{dep}</h3>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                        {dependenciesData[dep]?.Description || t.appStore?.details?.dependencies?.noDescription || 'No description available.'}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {details?.Parameters && Object.keys(details.Parameters).length > 0 && (
                    <section>
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                            <Settings className="w-6 h-6 text-zinc-500" />
                            {t.appStore?.details?.configuration?.title || 'Configuration'}
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                            {t.appStore?.details?.configuration?.description || 'The following configuration will be applied to your bottle:'}
                        </p>
                        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
                            <ul className="space-y-2">
                                {Object.entries(details.Parameters).map(([param, value]) => (
                                    <li key={param} className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300 font-mono text-sm">
                                        <div className={`w-2 h-2 rounded-full ${value ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                        {param}: <span className={value ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>{value ? (t.appStore?.details?.configuration?.enabled || 'enabled') : (t.appStore?.details?.configuration?.disabled || 'disabled')}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                )}

                <section className="py-6 bg-white dark:bg-zinc-900/20 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                    <div className="px-6">
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                            {t.appStore?.details?.disclaimer || 'Bottles does not re-distribute or host the files but only downloads them from the vendor\'s official sources. These files are checked by our maintainers and do not contain viruses. However, they may be subject to copyright or licenses of different types, including proprietary ones.'}
                        </p>
                    </div>
                </section>

                <section className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`https://www.winehq.org/search?q=${entry.Name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white transition-colors"
                        >
                            {t.appStore?.details?.wineDb || 'More info on WineDB'} <ExternalLink className="w-4 h-4" />
                        </a>
                        <a
                            href={`https://www.protondb.com/search?q=${entry.Name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white transition-colors"
                        >
                            {t.appStore?.details?.protonDb || 'More info on ProtonDB'} <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </section>
            </div>

            {showReview && reviewContent && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white dark:bg-zinc-900 w-full max-w-3xl max-h-[80vh] rounded-2xl shadow-2xl flex flex-col">
                        <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">{t.appStore?.details?.review || 'Review for'} {entry.Name}</h2>
                            <button onClick={() => setShowReview(false)} className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="p-8 overflow-y-auto prose prose-lg dark:prose-invert max-w-none">
                            <div dangerouslySetInnerHTML={{ __html: marked.parse(reviewContent) }} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AppDetails;
