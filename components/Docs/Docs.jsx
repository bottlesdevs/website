import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { marked } from 'marked';
import { ChevronRight, ChevronDown, Menu, X, ExternalLink } from 'lucide-react';

import { useLanguage } from '../../i18n/LanguageContext';

const Docs = () => {
    const { t, language } = useLanguage();
    const { '*': splat } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [sidebar, setSidebar] = useState([]);
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [expandedSections, setExpandedSections] = useState({});

    const BASE_URL = 'https://raw.githubusercontent.com/bottlesdevs/documentation/master';

    useEffect(() => {
        const fetchSummary = async () => {
            try {
                const response = await fetch(`${BASE_URL}/SUMMARY.md`);
                const text = await response.text();
                const items = parseSummary(text);
                setSidebar(items);

                const initialExpanded = {};
                items.forEach(item => {
                    if (item.children) initialExpanded[item.title] = true;
                });
                setExpandedSections(initialExpanded);
            } catch (error) {
                console.error('Failed to fetch summary:', error);
            }
        };
        fetchSummary();
    }, []);

    useEffect(() => {
        const fetchContent = async () => {
            setLoading(true);
            setSidebarOpen(false);
            try {
                let path = splat || 'README.md';
                if (!path.endsWith('.md')) path += '.md';

                if (path === '.md') path = 'README.md';

                const response = await fetch(`${BASE_URL}/${path}`);
                let text = await response.text();

                text = text.replace(/^---[\s\S]*?---\n/, '');

                text = text.replace(/{% hint style="info" %}/g, '<div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-4">');
                text = text.replace(/{% hint style="warning" %}/g, '<div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 my-4">');
                text = text.replace(/{% hint style="danger" %}/g, '<div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4">');
                text = text.replace(/{% hint style="success" %}/g, '<div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-4">');
                text = text.replace(/{% endhint %}/g, '</div>');

                text = text.replace(/(\.\.\/)?\.gitbook\/assets\//g, `${BASE_URL}/.gitbook/assets/`);

                setContent(text);
            } catch (error) {
                setContent(t.docs.notFound);
            } finally {
                setLoading(false);
            }
        };
        fetchContent();
    }, [splat]);

    const parseSummary = (text) => {
        const lines = text.split('\n');
        const items = [];
        let currentSection = null;

        lines.forEach(line => {
            const linkMatch = line.match(/^\* \[(.*)\]\((.*)\)/);
            const sectionMatch = line.match(/^## (.*)/);
            const subLinkMatch = line.match(/^  \* \[(.*)\]\((.*)\)/);

            if (sectionMatch) {
                currentSection = { title: sectionMatch[1], children: [] };
                items.push(currentSection);
            } else if (subLinkMatch && currentSection) {
                currentSection.children.push({
                    title: subLinkMatch[1],
                    path: subLinkMatch[2].replace('.md', '').replace('README', '')
                });
            } else if (linkMatch) {
                const path = linkMatch[2].replace('.md', '').replace('README', '');
                if (currentSection) {
                    items.push({ title: linkMatch[1], path });
                } else {
                    items.push({ title: linkMatch[1], path });
                }
            } else if (line.trim().startsWith('*') && currentSection) {
                const match = line.match(/^\* \[(.*)\]\((.*)\)/);
                if (match) {
                    currentSection.children.push({
                        title: match[1],
                        path: match[2].replace('.md', '').replace('README', '')
                    });
                }
            }
        });

        return items;
    };

    const toggleSection = (title) => {
        setExpandedSections(prev => ({ ...prev, [title]: !prev[title] }));
    };

    const isActive = (path) => {
        if (!path) return false;
        const currentPath = splat || '';
        const p1 = path.replace(/^\/|\/$/g, '');
        const p2 = currentPath.replace(/^\/|\/$/g, '');
        return p1 === p2;
    };

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-300 pt-16">
            <div className="flex">
                <button
                    className="md:hidden fixed bottom-6 right-6 z-50 p-4 bg-blue-600 text-white rounded-full shadow-lg"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    {sidebarOpen ? <X /> : <Menu />}
                </button>

                <aside className={`
                    fixed md:sticky top-16 h-[calc(100vh-4rem)] w-72 bg-zinc-50/50 dark:bg-black/50 backdrop-blur-xl border-r border-zinc-200 dark:border-zinc-800 overflow-y-auto transition-transform duration-300 z-40
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                `}>
                    <div className="p-6">
                        <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">{t.docs.title}</h2>
                        <nav className="space-y-1">
                            {sidebar.map((item, index) => (
                                <div key={index} className="mb-4">
                                    {item.children ? (
                                        <div>
                                            <button
                                                onClick={() => toggleSection(item.title)}
                                                className="flex items-center justify-between w-full text-left font-semibold text-zinc-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400"
                                            >
                                                {item.title}
                                                {expandedSections[item.title] ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                                            </button>
                                            {expandedSections[item.title] && (
                                                <div className="ml-2 space-y-1 border-l border-zinc-200 dark:border-zinc-800 pl-2">
                                                    {item.children.map((child, cIndex) => (
                                                        <Link
                                                            key={cIndex}
                                                            to={`/docs/${child.path}`}
                                                            className={`block py-1.5 px-2 text-sm rounded-md transition-colors ${isActive(child.path)
                                                                ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 font-medium'
                                                                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'
                                                                }`}
                                                        >
                                                            {child.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            to={`/docs/${item.path}`}
                                            className={`block py-1.5 text-sm font-medium transition-colors ${isActive(item.path)
                                                ? 'text-blue-600 dark:text-blue-400'
                                                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                                                }`}
                                        >
                                            {item.title}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </div>
                </aside>

                <main className="flex-1 min-w-0">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        {loading ? (
                            <div className="flex justify-center py-20">
                                <div className="w-10 h-10 border-4 border-zinc-200 border-t-blue-600 rounded-full animate-spin"></div>
                            </div>
                        ) : (
                            <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:scroll-mt-24 prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:underline prose-img:rounded-xl">
                                <div dangerouslySetInnerHTML={{ __html: marked.parse(content) }} />
                            </article>
                        )}

                        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                            <div className="flex flex-col gap-2">
                                <p>{t.docs.mistake} <a href={`https://github.com/bottlesdevs/documentation/edit/master/${splat || 'README'}.md`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">{t.docs.edit} <ExternalLink className="w-3 h-3" /></a></p>
                                <p>{t.docs.lastUpdated} {new Date().toLocaleDateString(language === 'en' ? 'en-US' : language)}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>{t.docs.poweredBy}</span>
                                <a href="https://www.gitbook.com" target="_blank" rel="noopener noreferrer" className="font-bold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    GitBook
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Docs;
