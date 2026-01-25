import React, { useEffect, useState, useMemo, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Calendar, Clock, Share2, Check, Twitter, Mail, Printer, Link as LinkIcon } from 'lucide-react';
import { marked } from 'marked';
import { useLanguage } from '../i18n/LanguageContext';

const Blog = () => {
  const { t, language } = useLanguage();
  const { slug } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);
  const [readingProgress, setReadingProgress] = useState(0);
  const [showShareSuccess, setShowShareSuccess] = useState(false);
  const loadMoreRef = useRef(null);
  const POSTS_PER_PAGE = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const loadedPosts = [];

        const modules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default', eager: true });

        for (const path in modules) {
          try {
            const content = modules[path];
            const filename = path.split('/').pop() || '';
            const { frontmatter, content: body } = parseFrontmatter(content);

            loadedPosts.push({
              filename: filename,
              title: frontmatter.title || 'Untitled',
              description: frontmatter.description || '',
              pubDate: frontmatter.pubDate || '',
              content: body
            });
          } catch (err) {
            console.error(`Error parsing post ${path}:`, err);
          }
        }

        loadedPosts.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
        setPosts(loadedPosts);
        setVisiblePosts(loadedPosts.slice(0, POSTS_PER_PAGE));
      } catch (error) {
        console.error("Error loading posts", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (!loading && posts.length > 0) {
      if (slug) {
        const target = posts.find(p => p.filename === slug);
        if (target) {
          setSelectedPost(target);
          window.scrollTo(0, 0);
        } else {
          setSelectedPost(null);
        }
      } else {
        setSelectedPost(null);
      }
    }
  }, [loading, slug, posts]);

  useEffect(() => {
    if (loading || selectedPost || visiblePosts.length >= posts.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisiblePosts((prev) => {
            const nextPosts = posts.slice(prev.length, prev.length + POSTS_PER_PAGE);
            return [...prev, ...nextPosts];
          });
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [loading, selectedPost, visiblePosts.length, posts]);

  useEffect(() => {
    if (!selectedPost) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = (window.scrollY / totalHeight) * 100;
          setReadingProgress(Math.min(100, Math.max(0, progress)));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedPost]);

  const parseFrontmatter = (text) => {
    const match = text.match(/^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/);
    if (!match) return { frontmatter: {}, content: text };

    const frontmatterRaw = match[1];
    const content = match[2];
    const frontmatter = {};

    frontmatterRaw.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length > 0) {
        let value = valueParts.join(':').trim();
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1);
        }
        frontmatter[key.trim()] = value;
      }
    });

    return { frontmatter, content };
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(language === 'en' ? 'en-US' : language, options);
  };

  const calculateReadingTime = (text) => {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wordsPerMinute);
    return `${time} ${t.blog.minRead}`;
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setShowShareSuccess(true);
    setTimeout(() => setShowShareSuccess(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const similarPosts = useMemo(() => {
    if (!selectedPost || posts.length === 0) return [];

    const getKeywords = (str) => {
      return str.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/)
        .filter(w => w.length > 3 && !['this', 'that', 'with', 'from', 'bottles', 'linux', 'release'].includes(w));
    };

    const currentKeywords = new Set([
      ...getKeywords(selectedPost.title),
      ...getKeywords(selectedPost.description)
    ]);

    const scoredPosts = posts
      .filter(p => p.filename !== selectedPost.filename)
      .map(p => {
        const pKeywords = new Set([
          ...getKeywords(p.title),
          ...getKeywords(p.description)
        ]);
        let score = 0;
        pKeywords.forEach(k => { if (currentKeywords.has(k)) score++; });
        return { post: p, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 2)
      .map(item => item.post);

    return scoredPosts;
  }, [selectedPost, posts]);


  if (selectedPost) {
    const htmlContent = marked.parse(selectedPost.content);

    return (
      <div className="relative min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <div className="fixed top-16 left-0 w-full h-1 bg-zinc-200 dark:bg-zinc-800 z-40 no-print">
          <div
            className="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-150 ease-out"
            style={{ width: `${readingProgress}%` }}
          ></div>
        </div>

        <div className="print-only print-header text-center mb-8 hidden">
          <img src="https://usebottles.com/assets/logo.svg" alt="Bottles" className="h-8 mx-auto mb-4" />
        </div>

        <div className="pt-32 pb-20 border-t border-zinc-200 dark:border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

            <button
              onClick={() => { navigate('/blog'); window.scrollTo(0, 0); }}
              className="group flex items-center text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors mb-8 text-sm font-medium no-print"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {t.blog.back}
            </button>

            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-4 text-sm font-mono uppercase tracking-wider mb-4 no-print">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                  <Calendar className="w-4 h-4" />
                  {formatDate(selectedPost.pubDate)}
                </div>
                <div className="flex items-center gap-2 text-zinc-500">
                  <Clock className="w-4 h-4" />
                  {calculateReadingTime(selectedPost.content)}
                </div>
              </div>
              <div className="print-only mb-4 text-sm text-gray-500 italic hidden">
                {t.blog.publishedOn} {formatDate(selectedPost.pubDate)}
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight leading-tight mb-8">
                {selectedPost.title}
              </h1>

              <div className="flex flex-wrap gap-3 no-print">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedPost.title)}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-900 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 border border-zinc-200 dark:border-zinc-800 rounded-full text-sm text-zinc-600 dark:text-zinc-300 transition-all"
                  title="Share on X (Twitter)"
                >
                  <Twitter className="w-4 h-4" />
                </a>

                <a
                  href={`https://mastodonshare.com/?text=${encodeURIComponent(selectedPost.title)}%20${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-900 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 border border-zinc-200 dark:border-zinc-800 rounded-full text-sm text-zinc-600 dark:text-zinc-300 transition-all"
                  title="Share on Mastodon"
                >
                  <Share2 className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:?subject=${encodeURIComponent(selectedPost.title)}&body=${encodeURIComponent(shareUrl)}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-900 hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-600 dark:hover:text-green-400 border border-zinc-200 dark:border-zinc-800 rounded-full text-sm text-zinc-600 dark:text-zinc-300 transition-all"
                  title="Share via Email"
                >
                  <Mail className="w-4 h-4" />
                </a>

                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-full text-sm text-zinc-600 dark:text-zinc-300 transition-all"
                  title="Copy Link"
                >
                  {showShareSuccess ? <Check className="w-4 h-4 text-green-500" /> : <LinkIcon className="w-4 h-4" />}
                </button>

                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-full text-sm text-zinc-600 dark:text-zinc-300 transition-all"
                  title="Print"
                >
                  <Printer className="w-4 h-4" />
                </button>
              </div>
            </header>

            <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-code:text-purple-600 dark:prose-code:text-purple-400 text-xl text-justify font-mono">
              <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </article>

            {similarPosts.length > 0 && (
              <div className="mt-20 pt-12 border-t border-zinc-200 dark:border-white/5 no-print">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">{t.blog.readNext}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {similarPosts.map((post, i) => (
                    <div
                      key={i}
                      onClick={() => { navigate(`/blog/${post.filename}`); window.scrollTo(0, 0); }}
                      className="group cursor-pointer bg-zinc-50 dark:bg-zinc-900/20 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 rounded-2xl p-6 transition-all"
                    >
                      <div className="text-xs text-zinc-500 mb-2">{formatDate(post.pubDate)}</div>
                      <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                        {post.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <section className="pt-32 pb-20 border-b border-zinc-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">{t.blog.title}</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            {t.blog.description}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {loading ? (
          <div className="space-y-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="animate-pulse">
                <div className="h-6 bg-zinc-200 dark:bg-zinc-800 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-zinc-100 dark:bg-zinc-900 rounded w-full mb-2"></div>
                <div className="h-4 bg-zinc-100 dark:bg-zinc-900 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-12">
            {visiblePosts.map((post, index) => (
              <article
                key={index}
                className="group cursor-pointer flex flex-col md:flex-row gap-8 items-start hover:bg-zinc-50 dark:hover:bg-zinc-900/20 p-6 -mx-6 rounded-2xl transition-all"
                onClick={() => { navigate(`/blog/${post.filename}`); window.scrollTo(0, 0); }}
              >
                <div className="flex-1">
                  <div className="text-sm font-mono text-zinc-500 mb-3 flex items-center gap-4">
                    <span>{formatDate(post.pubDate)}</span>
                    <span className="w-1 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full"></span>
                    <span>{calculateReadingTime(post.content)}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <div className="inline-flex items-center text-sm font-semibold text-zinc-900 dark:text-white group-hover:translate-x-2 transition-transform">
                    {t.blog.readArticle} <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </article>
            ))}

            {visiblePosts.length < posts.length && (
              <div ref={loadMoreRef} className="py-10 text-center">
                <div className="inline-block w-8 h-8 border-4 border-zinc-200 border-t-blue-600 rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;