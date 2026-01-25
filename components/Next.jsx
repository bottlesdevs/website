import React, { useEffect, useState } from 'react';
import { ArrowRight, Code2, Layers, Server, Cpu, Globe, Layout, Terminal, GitCommit, GitPullRequest, Loader2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Next = () => {
    const { t } = useLanguage();
    const [commits, setCommits] = useState([]);
    const [pullRequests, setPullRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGitHubData = async () => {
            const repos = ['next-cli', 'next-core', 'next-docs', 'next-server', 'next-winebridge'];
            try {
                const [commitsData, prsData] = await Promise.all([
                    Promise.all(repos.map(repo =>
                        fetch(`https://api.github.com/repos/bottlesdevs/${repo}/commits?per_page=5`)
                            .then(res => res.json())
                            .then(data => Array.isArray(data) ? data.map((c) => ({ ...c, repository: { name: repo } })) : [])
                    )),
                    Promise.all(repos.map(repo =>
                        fetch(`https://api.github.com/repos/bottlesdevs/${repo}/pulls?state=open`)
                            .then(res => res.json())
                            .then(data => Array.isArray(data) ? data.map((p) => ({ ...p, repository: { name: repo } })) : [])
                    ))
                ]);

                const allCommits = commitsData.flat()
                    .sort((a, b) => new Date(b.commit.author.date).getTime() - new Date(a.commit.author.date).getTime())
                    .slice(0, 10);

                const allPrs = prsData.flat()
                    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

                setCommits(allCommits);
                setPullRequests(allPrs);
            } catch (error) {
                console.error('Failed to fetch GitHub data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGitHubData();
    }, []);

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-300">
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-white dark:bg-zinc-900/20 border-b border-zinc-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-sm font-medium mb-8">
                        <Terminal className="w-4 h-4" />
                        <span>{t.nextPage.hero.badge}</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-8 tracking-tight">
                        {t.nextPage.hero.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">{t.nextPage.hero.titleHighlight}</span>
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                        {t.nextPage.hero.description}
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <a
                            href="https://github.com/bottlesdevs/bottles-next"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-bold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
                        >
                            <Code2 className="w-5 h-5 mr-2" />
                            {t.nextPage.hero.github}
                        </a>
                        <a
                            href="https://www.figma.com/proto/iWNlSzDKpTucBNzQymGzyY/Bottles-Next?type=design&node-id=29-1150&t=Ge4CUBp7vcWkoy3l-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=29%3A1150"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-bold hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                        >
                            <Layout className="w-5 h-5 mr-2" />
                            {t.nextPage.hero.prototype}
                        </a>
                    </div>
                </div>
            </section>

            {/* Architecture Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">{t.nextPage.architecture.title}</h2>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                            {t.nextPage.architecture.description}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Client */}
                        <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Layout className="w-32 h-32" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                                    <Layout className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">{t.nextPage.architecture.client.title}</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                                    {t.nextPage.architecture.client.description}
                                </p>
                                <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                                    {t.nextPage.architecture.client.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Server */}
                        <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Server className="w-32 h-32" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                                    <Server className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">{t.nextPage.architecture.server.title}</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                                    {t.nextPage.architecture.server.description}
                                </p>
                                <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                                    {t.nextPage.architecture.server.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Agent */}
                        <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Cpu className="w-32 h-32" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                                    <Cpu className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">{t.nextPage.architecture.agent.title}</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                                    {t.nextPage.architecture.agent.description}
                                </p>
                                <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                                    {t.nextPage.architecture.agent.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-24 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://usebottles.com/assets/pattern.svg')] opacity-[0.03] dark:opacity-[0.05]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">{t.nextPage.valueProp.title}</h2>
                            <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-6 leading-relaxed">
                                {t.nextPage.valueProp.description1}
                            </p>
                            <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8 leading-relaxed">
                                {t.nextPage.valueProp.description2}
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                                        <Globe className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-zinc-900 dark:text-white mb-1">{t.nextPage.valueProp.universal.title}</h3>
                                        <p className="text-zinc-600 dark:text-zinc-400 text-sm">{t.nextPage.valueProp.universal.description}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                                        <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-zinc-900 dark:text-white mb-1">{t.nextPage.valueProp.scalable.title}</h3>
                                        <p className="text-zinc-600 dark:text-zinc-400 text-sm">{t.nextPage.valueProp.scalable.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CSS Architecture Diagram */}
                        <div className="flex flex-col items-center justify-center py-8">
                            {/* Client Block */}
                            <div className="w-64 bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-xl p-6 relative z-10">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex -space-x-1">
                                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                                    </div>
                                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">Rust | Python | ...</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Client</h3>
                                    <Layout className="w-6 h-6 text-zinc-400" />
                                </div>
                            </div>

                            {/* Connection 1 */}
                            <div className="h-16 w-px bg-zinc-300 dark:bg-zinc-700 relative my-2">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-100 dark:bg-zinc-900 p-1.5 rounded-full border border-zinc-200 dark:border-zinc-700">
                                    <Globe className="w-4 h-4 text-zinc-400" />
                                </div>
                            </div>

                            {/* Server Block */}
                            <div className="w-64 bg-zinc-900 dark:bg-black rounded-2xl border border-zinc-700 dark:border-zinc-800 shadow-2xl p-6 relative z-10">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                                    <span className="text-xs font-mono text-zinc-400">Rust</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl font-bold text-white">Server</h3>
                                    <Server className="w-6 h-6 text-zinc-500" />
                                </div>
                            </div>

                            {/* Connection 2 */}
                            <div className="h-16 w-px bg-zinc-300 dark:bg-zinc-700 relative my-2">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-100 dark:bg-zinc-900 p-1.5 rounded-full border border-zinc-200 dark:border-zinc-700">
                                    <Terminal className="w-4 h-4 text-zinc-400" />
                                </div>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                                    <div className="w-2 h-2 border-r border-b border-zinc-300 dark:border-zinc-700 transform rotate-45"></div>
                                </div>
                            </div>

                            {/* Agent Block */}
                            <div className="w-64 bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-xl p-6 relative z-10">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">C# + .NET</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Agent</h3>
                                    <Cpu className="w-6 h-6 text-zinc-400" />
                                </div>
                                <div className="mt-2 text-xs text-zinc-400 text-right">WineBridge</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* UI Prototype Section */}
            <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://usebottles.com/assets/pattern.svg')] opacity-5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                            <Layout className="w-4 h-4" />
                            <span>{t.nextPage.prototype.preview}</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.nextPage.prototype.title}</h2>
                        <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
                            {t.nextPage.prototype.description}
                        </p>
                    </div>

                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                        <img
                            src="https://usebottles.com/uploads/bottles-next-app-details.png"
                            alt="Bottles Next UI Prototype"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Donations & NLnet Section */}
            <section className="py-24 bg-gradient-to-b from-green-900/10 to-zinc-50 dark:from-green-900/10 dark:to-black transition-colors duration-300">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 border border-green-100 dark:border-green-900/30 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-32 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 p-32 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">{t.nextPage.donations.title}</h2>
                            <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8 leading-relaxed">
                                {t.nextPage.donations.description}
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href="/funding"
                                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-green-600 text-white font-bold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-600/20"
                                >
                                    <Globe className="w-5 h-5" />
                                    {t.nextPage.donations.supportButton}
                                </a>
                                <a
                                    href="/posts/2025-08-04-nlnet-commons-fund"
                                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-bold hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                                >
                                    {t.nextPage.donations.readButton}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Development Activity Section */}
            <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">{t.nextPage.devActivity.title}</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-3xl mx-auto">
                            {t.nextPage.devActivity.description}
                        </p>
                    </div>

                    {loading ? (
                        <div className="flex justify-center py-12">
                            <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
                        </div>
                    ) : (
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Latest Commits */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <GitCommit className="w-6 h-6 text-purple-500" />
                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{t.nextPage.devActivity.latestCommits}</h3>
                                </div>
                                <div className="space-y-4">
                                    {commits.map((commit) => (
                                        <a
                                            key={commit.sha}
                                            href={commit.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-purple-500 dark:hover:border-purple-500 transition-colors group"
                                        >
                                            <div className="flex justify-between items-start gap-4">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="text-xs font-mono bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded text-zinc-500 dark:text-zinc-400">
                                                            {commit.repository.name}
                                                        </span>
                                                        <span className="text-xs text-zinc-400">
                                                            {new Date(commit.commit.author.date).toLocaleDateString()}
                                                        </span>
                                                    </div>
                                                    <p className="text-zinc-900 dark:text-zinc-200 font-medium line-clamp-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                                        {commit.commit.message}
                                                    </p>
                                                    <p className="text-sm text-zinc-500 mt-1">
                                                        by {commit.commit.author.name}
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Active Pull Requests */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <GitPullRequest className="w-6 h-6 text-blue-500" />
                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{t.nextPage.devActivity.activePrs}</h3>
                                </div>
                                {pullRequests.length === 0 ? (
                                    <div className="bg-zinc-100 dark:bg-zinc-900/50 rounded-xl p-8 text-center border border-zinc-200 dark:border-zinc-800 border-dashed">
                                        <p className="text-zinc-500">{t.nextPage.devActivity.noPrs}</p>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {pullRequests.map((pr) => (
                                            <a
                                                key={pr.id}
                                                href={pr.html_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group"
                                            >
                                                <div className="flex justify-between items-start gap-4">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <span className="text-xs font-mono bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded text-zinc-500 dark:text-zinc-400">
                                                                {pr.repository.name}
                                                            </span>
                                                            <span className="text-xs text-zinc-400">
                                                                #{pr.number}
                                                            </span>
                                                        </div>
                                                        <p className="text-zinc-900 dark:text-zinc-200 font-medium line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                            {pr.title}
                                                        </p>
                                                        <div className="flex items-center gap-2 mt-2">
                                                            <img src={pr.user.avatar_url} alt={pr.user.login} className="w-5 h-5 rounded-full" />
                                                            <span className="text-sm text-zinc-500">{pr.user.login}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Articles */}
            <section className="py-24 bg-white dark:bg-zinc-900/30 border-t border-zinc-200 dark:border-white/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12">{t.nextPage.readMore.title}</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <a href="/posts/2024-12-22-matter-of-technology" className="block group text-left">
                            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-purple-500 dark:hover:border-purple-500 transition-colors h-full">
                                <span className="text-sm text-zinc-500 mb-2 block">Dec 22, 2024</span>
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                    {t.nextPage.readMore.article1.title}
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                                    {t.nextPage.readMore.article1.description}
                                </p>
                            </div>
                        </a>
                        <a href="/posts/2024-12-27-rust-libcosmic-next" className="block group text-left">
                            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-purple-500 dark:hover:border-purple-500 transition-colors h-full">
                                <span className="text-sm text-zinc-500 mb-2 block">Dec 27, 2024</span>
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                    {t.nextPage.readMore.article2.title}
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                                    {t.nextPage.readMore.article2.description}
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Next;
