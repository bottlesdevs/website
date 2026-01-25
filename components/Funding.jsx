import React, { useState, useEffect } from 'react';
import {
  Heart, CreditCard, Wallet, Search,
  X as XIcon, Info, BookOpen, CircleDollarSign,
  Bitcoin
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const tasksData = [
  {
    status: "DONE",
    title: "Library mode",
    description: "Allow users to add any program from any bottle in a library view for easy access.",
    progress: 100,
    link: "https://usebottles.com/posts/2022-08-28-release-2022.8.28",
  },
  {
    status: "ALPHA",
    title: "Per-bottle sandbox",
    description: "Experimental feature for wrapping each bottle with a sandbox to limit permissions.",
    progress: 80,
    link: "https://github.com/bottlesdevs/Bottles/issues/1158",
    infoText: "Estimated time: 1 week of work based on average hourly cost.",
    icons: [{ name: 'build', title: 'In progress' }, { name: 'help', title: 'Needs funding' }]
  },
  {
    status: "REJECTED",
    title: "Layered bottles",
    description: "Our solution for multiple environments in one bottle. Planned for Bottles Next.",
    progress: 0,
    link: "https://github.com/bottlesdevs/Bottles/issues/510",
    infoText: "This feature is planned for Bottles Next.",
  },
  {
    status: "WIP",
    title: "Integration of UMU",
    description: "Integration of UMU to enhance the gaming compatibility in Bottles.",
    progress: 10,
    link: "https://usebottles.com/posts/2024-09-24-umu-next/",
    infoText: "Estimated time: 4 weeks of work based on average hourly cost.",
    icons: [{ name: 'build', title: 'In progress' }, { name: 'help', title: 'Needs funding' }]
  },
  {
    status: "NEXT",
    title: "Bottles Next",
    description: "A complete redesign of Bottles to overcome current limitations and provide a consistent user experience across Linux and macOS.",
    progress: 15,
    link: "https://usebottles.com/posts/2023-10-05-bottles-next-a-new-chapter/",
    infoText: "We are looking for funds, contributors, and companies to provide infrastructure support.",
    icons: [{ name: 'build', title: 'In progress' }, { name: 'help', title: 'Needs funding' }]
  },
];

const cryptoAddresses = [
  { name: "Ethereum (ETH)", network: "ERC20", address: "0xef6a653c63db31403f507bca277f719d2f3d44f8", suggested: true },
  { name: "Bitcoin (BTC)", network: "BTC(SegWit)", address: "bc1q2svx64v90hyyd7jt8xamvqm9vc5248l5rgzwpm" },
  { name: "Litecoin (LTC)", network: "LTC", address: "LWqpd2411CQTuWD15bcPP7bfAw3wmYHScm" },
  { name: "Ripple (XRP)", network: "XRP", address: "rNxp4h8apvRis6mJf9Sh8C6iRxfrDWN7AV", memo: "420078619" },
];

const otherSponsors = [
  "Christopher (kit) Eubanks", "Black_file", "Chris", "Robin Lee",
  "Andrew Ego", "Sonny Piers", "Dan G", "Caleb Woodbine",
  "Robert Krisztian Sandor", "+ All the anonymous donations"
];

const Funding = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [showCryptoModal, setShowCryptoModal] = useState(false);
  const [infoModalText, setInfoModalText] = useState(null);
  const [sponsors, setSponsors] = useState([]);
  const [liberapay, setLiberapay] = useState({ patrons: 0, amount: '0.00 USD' });

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const res = await fetch("https://ghs.vercel.app/v2/sponsors/bottlesdevs");
        const data = await res.json();
        const all = [...data.sponsors.current, ...data.sponsors.past].map((s) => ({
          username: s.username,
          avatar: s.avatar || `https://ui-avatars.com/api/?name=${s.username}&background=random`
        }));
        setSponsors(all);
      } catch (e) {
        console.error("Failed to fetch sponsors", e);
      }
    };

    const fetchLiberapay = async () => {
      try {
        const res = await fetch("https://liberapay.com/bottles/public.json");
        const data = await res.json();
        setLiberapay({
          patrons: data.npatrons || 0,
          amount: `${data.receiving.amount} ${data.receiving.currency}`
        });
      } catch (e) {
        console.error("Failed to fetch liberapay", e);
      }
    };

    fetchSponsors();
    fetchLiberapay();
  }, []);

  const filteredTasks = tasksData.filter(task => {
    const matchesStatus = filter ? task.status === filter : true;
    const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusStyle = (status) => {
    switch (status) {
      case 'DONE': return 'text-green-600 dark:text-green-400 border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-900/20';
      case 'ALPHA': return 'text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-900 bg-yellow-50 dark:bg-yellow-900/20';
      case 'REJECTED': return 'text-red-600 dark:text-red-400 border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/20';
      case 'WIP': return 'text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/20';
      case 'NEXT': return 'text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900 bg-purple-50 dark:bg-purple-900/20';
      default: return 'text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900';
    }
  };

  const getProgressColor = (status) => {
    switch (status) {
      case 'DONE': return 'bg-green-500';
      case 'ALPHA': return 'bg-yellow-500';
      case 'REJECTED': return 'bg-red-500';
      case 'WIP': return 'bg-blue-500';
      case 'NEXT': return 'bg-purple-500';
      default: return 'bg-zinc-500';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-32 pb-20 border-b border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">{t.funding.title}</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {t.funding.description}
          </p>
        </div>
      </section>

      {/* Donation Methods */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pb-24">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-8">{t.funding.channels.title}</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { name: 'GitHub Sponsors', icon: <Heart className="w-6 h-6" />, link: "https://github.com/sponsors/bottlesdevs", desc: t.funding.channels.github.desc, highlight: false },
            { name: 'PayPal', icon: <CreditCard className="w-6 h-6" />, link: "https://www.paypal.com/donate?hosted_button_id=HM2VKUH5STU4J", desc: t.funding.channels.paypal.desc, highlight: true },
            { name: 'LiberaPay', icon: <Wallet className="w-6 h-6" />, link: "https://liberapay.com/bottles", desc: t.funding.channels.liberapay.desc, highlight: false },
            { name: 'Patreon', icon: <Heart className="w-6 h-6" />, link: "https://www.patreon.com/MirkoBrombin", desc: t.funding.channels.patreon.desc, highlight: false },
            { name: 'Crypto', icon: <Bitcoin className="w-6 h-6" />, action: () => setShowCryptoModal(true), desc: t.funding.channels.crypto.desc, highlight: false },
            { name: 'Polar.sh', icon: <CircleDollarSign className="w-6 h-6" />, link: "https://buy.polar.sh/polar_cl_yKpkVQyu6SfCFKTRkxPl84tgKI93PIKwRbEWh1OnJ7v", desc: t.funding.channels.polar.desc, highlight: false },
          ].map((method, i) => (
            <div key={i} className={`p-6 rounded-xl border transition-all group relative overflow-hidden shadow-sm dark:shadow-none ${method.highlight
              ? 'bg-zinc-900 dark:bg-white text-white dark:text-black border-zinc-900 dark:border-white'
              : 'bg-white dark:bg-black border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600'
              }`}>
              <div className="flex justify-between items-start mb-8">
                <div className={`${method.highlight ? 'text-white dark:text-black' : 'text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors'}`}>
                  {method.icon}
                </div>
                {method.highlight && <span className="px-2 py-1 bg-white dark:bg-black text-black dark:text-white text-[10px] font-bold uppercase tracking-wider rounded">{t.funding.channels.preferred}</span>}
              </div>
              <h3 className={`text-xl font-bold mb-1 ${method.highlight ? 'text-white dark:text-black' : 'text-zinc-900 dark:text-white'}`}>{method.name}</h3>
              <p className={`text-sm mb-6 ${method.highlight ? 'text-zinc-300 dark:text-zinc-600' : 'text-zinc-600 dark:text-zinc-500'}`}>{method.desc}</p>

              {method.link ? (
                <a href={method.link} target="_blank" rel="noreferrer" className="absolute inset-0"></a>
              ) : (
                <button onClick={method.action} className="absolute inset-0"></button>
              )}
            </div>
          ))}
        </div>

        {/* Roadmap */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-end gap-4 border-b border-zinc-200 dark:border-white/5 pb-8">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-2">{t.funding.roadmap.title}</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">{t.funding.roadmap.description}</p>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                placeholder={t.funding.roadmap.searchPlaceholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-lg py-2 pl-10 pr-4 text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-500 placeholder-zinc-500"
              />
            </div>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {['WIP', 'DONE', 'ALPHA', 'NEXT', 'REJECTED'].map(s => (
            <button
              key={s}
              onClick={() => setFilter(filter === s ? '' : s)}
              className={`px-3 py-1 rounded text-xs font-medium border transition-colors ${filter === s
                ? 'bg-zinc-900 dark:bg-white text-white dark:text-black border-zinc-900 dark:border-white'
                : 'bg-white dark:bg-black text-zinc-600 dark:text-zinc-500 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-300'
                }`}
            >
              {t.funding.tasks.status[s.toLowerCase()] || s}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {filteredTasks.map((task, i) => (
            <div key={i} className="bg-zinc-50 dark:bg-zinc-900/20 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 flex flex-col hover:bg-white dark:hover:bg-zinc-900/40 transition-colors shadow-sm dark:shadow-none">
              <div className="flex justify-between items-start mb-4">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wider border ${getStatusStyle(task.status)}`}>
                  {t.funding.tasks.status[task.status.toLowerCase()] || task.status}
                </span>
                {task.infoText && (
                  <button onClick={() => setInfoModalText(task.infoText)} className="text-zinc-500 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-white transition-colors">
                    <Info className="w-4 h-4" />
                  </button>
                )}
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{task.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-500 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: task.description }}></p>

              <div className="mt-auto space-y-4">
                <div className="h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className={`h-full ${getProgressColor(task.status)}`} style={{ width: `${task.progress}%` }}></div>
                </div>
                <a href={task.link} target="_blank" rel="noreferrer" className="flex items-center justify-center w-full py-2 rounded-lg border border-zinc-300 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 text-sm hover:text-zinc-900 dark:hover:text-white hover:border-zinc-500 dark:hover:border-zinc-600 transition-all bg-white dark:bg-transparent">
                  <BookOpen className="w-3 h-3 mr-2" /> {t.funding.tasks.viewDetails}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Sponsors List */}
        <div className="text-center border-t border-zinc-200 dark:border-white/5 pt-20">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-8">{t.funding.supporters.title}</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-12">
            {sponsors.map((s, i) => (
              <div key={i} className="w-10 h-10 rounded-full overflow-hidden border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900 tooltip" title={s.username}>
                <img src={s.avatar} alt={s.username} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="inline-flex items-center gap-6 px-8 py-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-white/5 shadow-sm dark:shadow-none">
            <div className="text-left">
              <div className="text-xs text-zinc-500 uppercase tracking-wider">{t.funding.supporters.patrons}</div>
              <div className="text-xl font-bold text-zinc-900 dark:text-white">{liberapay.patrons}</div>
            </div>
            <div className="h-8 w-px bg-zinc-300 dark:bg-zinc-800"></div>
            <div className="text-left">
              <div className="text-xs text-zinc-500 uppercase tracking-wider">{t.funding.supporters.weekly}</div>
              <div className="text-xl font-bold text-zinc-900 dark:text-white">{liberapay.amount}</div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs text-zinc-600">
            {otherSponsors.map((name, i) => (
              <span key={i}>{name} • </span>
            ))}
            <span>{t.funding.supporters.anonymous}</span>
          </div>
        </div>

      </div>

      {/* Modals */}
      {showCryptoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-2xl max-w-lg w-full shadow-2xl">
            <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{t.funding.modals.cryptoTitle}</h3>
              <button onClick={() => setShowCryptoModal(false)} className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
                <XIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              {cryptoAddresses.map((crypto, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50">
                  <div className="flex justify-between mb-2">
                    <span className="text-zinc-900 dark:text-white font-medium">{crypto.name}</span>
                    <span className="text-zinc-500 dark:text-zinc-600 text-xs font-mono">{crypto.network}</span>
                  </div>
                  <code className="block bg-zinc-100 dark:bg-black p-3 rounded text-zinc-600 dark:text-zinc-400 text-xs font-mono break-all border border-zinc-200 dark:border-zinc-800 select-all">
                    {crypto.address}
                  </code>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {infoModalText && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-2xl max-w-sm w-full p-8 text-center shadow-2xl">
            <Info className="w-10 h-10 text-zinc-900 dark:text-white mx-auto mb-4" />
            <p className="text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">{infoModalText}</p>
            <button onClick={() => setInfoModalText(null)} className="w-full py-2 bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-700 dark:hover:bg-zinc-200 rounded font-medium transition-colors">
              {t.funding.modals.close}
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Funding;