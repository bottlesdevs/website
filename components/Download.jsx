import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
   Copy, Check, Terminal, Download as DownloadIcon,
   Heart, X, AlertCircle, Monitor, ChevronRight, Hammer
} from 'lucide-react';
import Select from './Select';

import { useLanguage } from '../i18n/LanguageContext';

const EagleIcon = ({ className }) => (
   <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M14.03 10.4768C14.03 10.4768 12.7332 5.99927 12.0063 3.76582C11.3273 1.68218 10.03 -0.0231676 7.30583 0.000233366C4.3056 0.268445 3.1773 2.41556 2.86551 3.66172C0.684194 4.59657 -0.177674 7.04278 0.0300293 7.97683C0.705305 7.35377 1.82678 6.41467 3.10011 6.44721C3.33067 6.51986 3.51685 6.68315 3.59244 6.98583C3.80041 7.81659 3.74848 12.6987 3.74848 12.6987L5.30645 11.0888L6.50093 12.5948L7.74763 10.7253L9.09761 12.3868L9.98057 10.4135L12.1102 12.0234L12.0064 9.89402L14.03 10.4768ZM6.36368 4.92318C5.84958 5.06174 5.3204 4.75719 5.18211 4.24333L6.8902 3.47683C7.02902 3.99066 6.87727 4.78519 6.36368 4.92318Z" fill="currentColor" />
   </svg>
);

const PayPalIcon = ({ className }) => (
   <svg viewBox="0 0 124 33" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path fill="#253B80" d="M46.211,6.749h-6.839c-0.468,0-0.866,0.34-0.939,0.802l-2.766,17.537c-0.055,0.346,0.213,0.658,0.564,0.658h3.265c0.468,0,0.866-0.34,0.939-0.803l0.746-4.73c0.072-0.463,0.471-0.803,0.938-0.803h2.165c4.505,0,7.105-2.18,7.784-6.5c0.306-1.89,0.013-3.375-0.872-4.415C50.224,7.353,48.5,6.749,46.211,6.749z M47,13.154c-0.374,2.454-2.249,2.454-4.062,2.454h-1.032l0.724-4.583c0.043-0.277,0.283-0.481,0.563-0.481h0.473c1.235,0,2.4,0,3.002,0.704C47.027,11.668,47.137,12.292,47,13.154z" />
      <path fill="#253B80" d="M66.654,13.075h-3.275c-0.279,0-0.52,0.204-0.563,0.481l-0.145,0.916l-0.229-0.332c-0.709-1.029-2.29-1.373-3.868-1.373c-3.619,0-6.71,2.741-7.312,6.586c-0.313,1.918,0.132,3.752,1.22,5.031c0.998,1.176,2.426,1.666,4.125,1.666c2.916,0,4.533-1.875,4.533-1.875l-0.146,0.91c-0.055,0.348,0.213,0.66,0.562,0.66h2.95c0.469,0,0.865-0.34,0.939-0.803l1.77-11.209C67.271,13.388,67.004,13.075,66.654,13.075z M62.089,19.449c-0.316,1.871-1.801,3.127-3.695,3.127c-0.951,0-1.711-0.305-2.199-0.883c-0.484-0.574-0.668-1.391-0.514-2.301c0.295-1.855,1.805-3.152,3.67-3.152c0.93,0,1.686,0.309,2.184,0.892C62.034,17.721,62.232,18.543,62.089,19.449z" />
      <path fill="#253B80" d="M84.096,13.075h-3.291c-0.314,0-0.609,0.156-0.787,0.417l-4.539,6.686l-1.924-6.425c-0.121-0.402-0.492-0.678-0.912-0.678h-3.234c-0.393,0-0.666,0.384-0.541,0.754l3.625,10.638l-3.408,4.811c-0.268,0.379,0.002,0.9,0.465,0.9h3.287c0.312,0,0.604-0.152,0.781-0.408L84.564,13.97C84.826,13.592,84.557,13.075,84.096,13.075z" />
      <path fill="#179BD7" d="M94.992,6.749h-6.84c-0.467,0-0.865,0.34-0.938,0.802l-2.766,17.537c-0.055,0.346,0.213,0.658,0.562,0.658h3.51c0.326,0,0.605-0.238,0.656-0.562l0.785-4.971c0.072-0.463,0.471-0.803,0.938-0.803h2.164c4.506,0,7.105-2.18,7.785-6.5c0.307-1.89,0.012-3.375-0.873-4.415C99.004,7.353,97.281,6.749,94.992,6.749z M95.781,13.154c-0.373,2.454-2.248,2.454-4.062,2.454h-1.031l0.725-4.583c0.043-0.277,0.281-0.481,0.562-0.481h0.473c1.234,0,2.4,0,3.002,0.704C95.809,11.668,95.918,12.292,95.781,13.154z" />
      <path fill="#179BD7" d="M115.434,13.075h-3.273c-0.281,0-0.52,0.204-0.562,0.481l-0.145,0.916l-0.23-0.332c-0.709-1.029-2.289-1.373-3.867-1.373c-3.619,0-6.709,2.741-7.311,6.586c-0.312,1.918,0.131,3.752,1.219,5.031c1,1.176,2.426,1.666,4.125,1.666c2.916,0,4.533-1.875,4.533-1.875l-0.146,0.91c-0.055,0.348,0.213,0.66,0.564,0.66h2.949c0.467,0,0.865-0.34,0.938-0.803l1.771-11.209C116.053,13.388,115.785,13.075,115.434,13.075z M110.869,19.449c-0.314,1.871-1.801,3.127-3.695,3.127c-0.949,0-1.711-0.305-2.199-0.883c-0.484-0.574-0.666-1.391-0.514-2.301c0.297-1.855,1.805-3.152,3.67-3.152c0.93,0,1.686,0.309,2.184,0.892C110.816,17.721,111.014,18.543,110.869,19.449z" />
      <path fill="#179BD7" d="M119.295,7.23l-2.807,17.858c-0.055,0.346,0.213,0.658,0.562,0.658h2.822c0.469,0,0.867-0.34,0.939-0.803l2.768-17.536c0.055-0.346-0.213-0.659-0.562-0.659h-3.16C119.578,6.749,119.338,6.953,119.295,7.23z" />
      <path fill="#253B80" d="M7.266,29.154l0.523-3.322l-1.165-0.027H1.061L4.927,1.292C4.939,1.218,4.978,1.149,5.035,1.1c0.057-0.049,0.13-0.076,0.206-0.076h9.38c3.114,0,5.263,0.648,6.385,1.927c0.526,0.6,0.861,1.227,1.023,1.917c0.17,0.724,0.173,1.589,0.007,2.644l-0.012,0.077v0.676l0.526,0.298c0.443,0.235,0.795,0.504,1.065,0.812c0.45,0.513,0.741,1.165,0.864,1.938c0.127,0.795,0.085,1.741-0.123,2.812c-0.24,1.232-0.628,2.305-1.152,3.183c-0.482,0.809-1.096,1.48-1.825,2c-0.696,0.494-1.523,0.869-2.458,1.109c-0.906,0.236-1.939,0.355-3.072,0.355h-0.73c-0.522,0-1.029,0.188-1.427,0.525c-0.399,0.344-0.663,0.814-0.744,1.328l-0.055,0.299l-0.924,5.855l-0.042,0.215c-0.011,0.068-0.03,0.102-0.058,0.125c-0.025,0.021-0.061,0.035-0.096,0.035H7.266z" />
      <path fill="#179BD7" d="M23.048,7.667L23.048,7.667L23.048,7.667c-0.028,0.179-0.06,0.362-0.096,0.55c-1.237,6.351-5.469,8.545-10.874,8.545H9.326c-0.661,0-1.218,0.48-1.321,1.132l0,0l0,0L6.596,26.83l-0.399,2.533c-0.067,0.428,0.263,0.814,0.695,0.814h4.881c0.578,0,1.069-0.42,1.16-0.99l0.048-0.248l0.919-5.832l0.059-0.32c0.09-0.572,0.582-0.992,1.16-0.992h0.73c4.729,0,8.431-1.92,9.513-7.476c0.452-2.321,0.218-4.259-0.978-5.622C24.022,8.286,23.573,7.945,23.048,7.667z" />
      <path fill="#222D65" d="M21.754,7.151c-0.189-0.055-0.384-0.105-0.584-0.15c-0.201-0.044-0.407-0.083-0.619-0.117c-0.742-0.12-1.555-0.177-2.426-0.177h-7.352c-0.181,0-0.353,0.041-0.507,0.115C9.927,6.985,9.675,7.306,9.614,7.699L8.05,17.605l-0.045,0.289c0.103-0.652,0.66-1.132,1.321-1.132h2.752c5.405,0,9.637-2.195,10.874-8.545c0.037-0.188,0.068-0.371,0.096-0.55c-0.313-0.166-0.652-0.308-1.017-0.429C21.941,7.208,21.848,7.179,21.754,7.151z" />
      <path fill="#253B80" d="M9.614,7.699c0.061-0.393,0.313-0.714,0.652-0.876c0.155-0.074,0.326-0.115,0.507-0.115h7.352c0.871,0,1.684,0.057,2.426,0.177c0.212,0.034,0.418,0.073,0.619,0.117c0.2,0.045,0.395,0.095,0.584,0.15c0.094,0.028,0.187,0.057,0.278,0.086c0.365,0.121,0.704,0.264,1.017,0.429c0.368-2.347-0.003-3.945-1.272-5.392C20.378,0.682,17.853,0,14.622,0h-9.38c-0.66,0-1.223,0.48-1.325,1.133L0.01,25.898c-0.077,0.49,0.301,0.932,0.795,0.932h5.791l1.454-9.225L9.614,7.699z" />
   </svg>
);

const DownloadSection = ({ showModal, setShowModal }) => {
   const { t } = useLanguage();
   const [hasDonated, setHasDonated] = useState(false);
   const [localShowModal, setLocalShowModal] = useState(false);
   const isModalOpen = showModal !== undefined ? showModal : localShowModal;
   const setIsModalOpen = setShowModal || setLocalShowModal;

   const [donationAmount, setDonationAmount] = useState(5);
   const [view, setView] = useState('selection');
   const [modalView, setModalView] = useState('donation');

   const distros = [
      {
         name: "Vanilla OS",
         installCommand: ["abroot pkg add flatpak", "abroot pkg apply", "reboot"],
         description: t.download.distro.vanillaOs
      },
      { name: "Ubuntu / Debian", installCommand: "sudo apt install flatpak" },
      { name: "Fedora", installCommand: "sudo dnf install flatpak" },
      { name: "Arch Linux", installCommand: "sudo pacman -S flatpak" },
      { name: "OpenSUSE", installCommand: "sudo zypper install flatpak" },
      { name: "Solus", installCommand: "sudo eopkg install flatpak" },
      { name: "Alpine", installCommand: "sudo apk add flatpak" },
      { name: "Void", installCommand: "sudo xbps-install -S flatpak" },
      { name: "Gentoo", installCommand: "sudo emerge sys-apps/flatpak" },
   ];

   const [selectedDistro, setSelectedDistro] = useState(distros[0]);

   const [copiedCommand, setCopiedCommand] = useState(null);

   const flathubCommand = "flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo";
   const installCommand = "flatpak install flathub com.usebottles.bottles";

   useEffect(() => {
      const checkCookie = () => {
         const cookies = document.cookie.split(';');
         const donated = cookies.some(item => item.trim().startsWith('hasDonated=true'));
         setHasDonated(donated);
         if (donated) {
            setView('guide');
         }
      };
      checkCookie();
   }, []);

   const setCookie = () => {
      const date = new Date();
      date.setTime(date.getTime() + 24 * 60 * 60 * 1000 * 365); // 1 year
      document.cookie = "hasDonated=true; expires=" + date.toUTCString() + "; path=/";
      setHasDonated(true);
   };

   const handleDownloadClick = () => {
      if (hasDonated) {
         setView('guide');
         document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
      } else {
         setModalView('donation');
         setIsModalOpen(true);
      }
   };

   const proceedWithFreeDownload = () => {
      setCookie();
      setIsModalOpen(false);
      setModalView('donation');
      setView('guide');
      setTimeout(() => {
         document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
   };

   const handleDonationSubmit = (amount) => {
      if (amount < 1) {
         setModalView('confirm');
      } else {
         const paypalUrl = `https://www.paypal.com/donate?business=brombin94@gmail.com&amount=${amount}&currency_code=USD`;
         window.open(paypalUrl, '_blank');
         setCookie();
         setIsModalOpen(false);
         setView('guide');
         setTimeout(() => {
            document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
         }, 100);
      }
   };

   const handleCustomDonationSubmit = (e) => {
      e.preventDefault();
      const amount = parseFloat(donationAmount.toString());
      if (!isNaN(amount)) {
         handleDonationSubmit(amount);
      } else {
         handleDonationSubmit(0);
      }
   };

   const copyToClipboard = (text, type) => {
      navigator.clipboard.writeText(text);
      setCopiedCommand(type);
      setTimeout(() => setCopiedCommand(null), 2000);
   };

   const currentAmount = parseFloat(donationAmount.toString());
   const isFree = isNaN(currentAmount) || currentAmount < 1;


   return (
      <section id="download" className="py-32 bg-white dark:bg-black border-t border-zinc-200 dark:border-white/5 min-h-screen transition-colors duration-300">
         <style>{`
        @keyframes floatUp {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0); }
          20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(calc(-50% + var(--tx)), -150%) scale(0.5); }
        }
        .group:hover .heart-anim {
          animation: floatUp 1.5s ease-out infinite;
        }
      `}</style>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
               <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
                  {t.download.title}
               </h2>
               <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
                  {t.download.description1}
               </p>
               <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
                  {t.download.description2}
               </p>
            </div>

            {view === 'selection' && (
               <div className="max-w-5xl mx-auto">
                  <div className="grid md:grid-cols-3 gap-8 mb-20">
                     <div
                        onClick={handleDownloadClick}
                        className="group md:col-span-2 relative bg-zinc-50 dark:bg-zinc-900/30 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-blue-100 dark:border-blue-900/30 hover:border-blue-300 dark:hover:border-blue-500/50 rounded-2xl p-8 cursor-pointer transition-all duration-300 overflow-hidden shadow-sm dark:shadow-none"
                     >
                        <div className="absolute top-0 right-0 p-4">
                           <div className="bg-blue-50 dark:bg-blue-600/10 text-blue-600 dark:text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-200 dark:border-blue-600/20">
                              {t.download.recommended}
                           </div>
                        </div>
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-blue-600 dark:text-blue-400">
                           <DownloadIcon className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">{t.download.flatpak.title}</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-6">
                           {t.download.flatpak.desc}
                        </p>
                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-500 dark:group-hover:text-blue-300">
                           {t.download.startInstall} <ChevronRight className="w-5 h-5 ml-2" />
                        </div>
                     </div>

                     <div className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                        <div className="w-16 h-16 bg-zinc-200 dark:bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 text-zinc-500">
                           <AlertCircle className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{t.download.comingSoon.title}</h3>
                        <p className="text-zinc-500 text-sm">
                           {t.download.comingSoon.desc}
                        </p>
                     </div>
                  </div>

                  <div className="border-t border-zinc-200 dark:border-white/5 pt-12">
                     <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-8 text-center">{t.download.otherVersions.title}</h3>
                     <div className="grid md:grid-cols-3 gap-6">
                        {[
                           { title: t.download.otherVersions.v1.title, icon: <Monitor className="w-6 h-6" />, desc: t.download.otherVersions.v1.desc, href: "https://github.com/bottlesdevs/Bottles/releases/tag/continuous-v1" },
                           { title: t.download.otherVersions.source.title, icon: <Terminal className="w-6 h-6" />, desc: t.download.otherVersions.source.desc, href: "https://github.com/bottlesdevs/Bottles" },
                           { title: t.download.otherVersions.manual.title, icon: <Hammer className="w-6 h-6" />, desc: t.download.otherVersions.manual.desc, href: "/docs/getting-started/installation" }
                        ].map((item, idx) => (
                           item.href.startsWith('http') ? (
                              <a key={idx} href={item.href} target="_blank" rel="noreferrer" className="block bg-zinc-50 dark:bg-zinc-900/20 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 p-6 rounded-xl transition-all shadow-sm dark:shadow-none">
                                 <div className="text-zinc-500 dark:text-zinc-400 mb-4">{item.icon}</div>
                                 <h4 className="font-bold text-zinc-900 dark:text-white mb-2">{item.title}</h4>
                                 <p className="text-zinc-600 dark:text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                              </a>
                           ) : (
                              <Link key={idx} to={item.href} className="block bg-zinc-50 dark:bg-zinc-900/20 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 p-6 rounded-xl transition-all shadow-sm dark:shadow-none">
                                 <div className="text-zinc-500 dark:text-zinc-400 mb-4">{item.icon}</div>
                                 <h4 className="font-bold text-zinc-900 dark:text-white mb-2">{item.title}</h4>
                                 <p className="text-zinc-600 dark:text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                              </Link>
                           )
                        ))}
                     </div>
                  </div>
               </div>
            )}

            {view === 'guide' && (
               <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="text-center mb-12">
                     <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 mb-4">
                        <Heart className="w-6 h-6 fill-current" />
                     </div>
                     <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{t.download.thankYou.title}</h3>
                     <p className="text-zinc-600 dark:text-zinc-400 mt-2">{t.download.thankYou.desc}</p>
                     <button
                        onClick={() => setView('selection')}
                        className="mt-4 text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-white underline"
                     >
                        {t.download.thankYou.back}
                     </button>
                  </div>

                  <div className="space-y-8">
                     <div className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-2xl">
                        <div className="bg-zinc-100 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-white/5 px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 rounded-t-2xl">
                           <div>
                              <span className="text-blue-600 dark:text-blue-500 font-mono text-xs font-bold uppercase tracking-wider mb-1 block">{t.download.steps.step1}</span>
                              <h4 className="text-lg font-bold text-zinc-900 dark:text-white">{t.download.steps.installFlatpak}</h4>
                           </div>
                           <div className="flex items-center gap-2">
                              <label className="text-xs text-zinc-500 uppercase font-bold mr-2">{t.download.steps.selectDistro}</label>
                              <Select
                                 value={selectedDistro.name}
                                 onChange={(val) => setSelectedDistro(distros.find(d => d.name === val) || distros[0])}
                                 options={distros.map(d => ({ value: d.name, label: d.name }))}
                                 className="min-w-[200px]"
                              />
                           </div>
                        </div>
                        <div className="p-6">
                           {selectedDistro.description ? (
                              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">{selectedDistro.description}</p>
                           ) : (
                              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                                 {t.download.distro.descriptionWithDistro.split('{distro}')[0]}
                                 <span className="text-zinc-900 dark:text-white font-medium">{selectedDistro.name}</span>
                                 {t.download.distro.descriptionWithDistro.split('{distro}')[1]}
                              </p>
                           )}
                           {Array.isArray(selectedDistro.installCommand) ? (
                              <div className="space-y-3">
                                 {selectedDistro.installCommand.map((cmd, i) => (
                                    <div key={i} className="bg-white dark:bg-black rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 flex items-center justify-between group">
                                       <code className="font-mono text-sm text-blue-600 dark:text-blue-300 select-all">{cmd}</code>
                                       <button onClick={() => copyToClipboard(cmd, `distro-${i}`)} className="text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-white transition-colors">
                                          {copiedCommand === `distro-${i}` ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                       </button>
                                    </div>
                                 ))}
                              </div>
                           ) : (
                              <div className="bg-white dark:bg-black rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 flex items-center justify-between group">
                                 <code className="font-mono text-sm text-blue-600 dark:text-blue-300 select-all">{selectedDistro.installCommand}</code>
                                 <button onClick={() => copyToClipboard(selectedDistro.installCommand, 'distro')} className="text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-white transition-colors">
                                    {copiedCommand === 'distro' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                 </button>
                              </div>
                           )}
                        </div>
                     </div>

                     <div className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
                        <div className="bg-zinc-100 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-white/5 px-6 py-4">
                           <span className="text-blue-600 dark:text-blue-500 font-mono text-xs font-bold uppercase tracking-wider mb-1 block">{t.download.steps.step2}</span>
                           <h4 className="text-lg font-bold text-zinc-900 dark:text-white">{t.download.steps.addFlathub}</h4>
                        </div>
                        <div className="p-6">
                           <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">{t.download.steps.addFlathubDesc}</p>
                           <div className="bg-white dark:bg-black rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 flex items-center justify-between group overflow-x-auto">
                              <code className="font-mono text-sm text-yellow-600 dark:text-yellow-300 whitespace-nowrap mr-4">{flathubCommand}</code>
                              <button onClick={() => copyToClipboard(flathubCommand, 'flathub')} className="text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-white transition-colors flex-shrink-0">
                                 {copiedCommand === 'flathub' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                              </button>
                           </div>
                        </div>
                     </div>

                     <div className="bg-blue-50 dark:bg-white/5 border border-blue-200 dark:border-blue-500/30 rounded-2xl overflow-hidden relative">
                        <div className="bg-zinc-100 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-white/5 px-6 py-4">
                           <span className="text-blue-600 dark:text-blue-400 font-mono text-xs font-bold uppercase tracking-wider mb-1 block">{t.download.steps.step3}</span>
                           <h4 className="text-lg font-bold text-zinc-900 dark:text-white">{t.download.steps.installBottles}</h4>
                        </div>
                        <div className="p-6">
                           <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">{t.download.steps.installBottlesDesc}</p>
                           <div className="bg-white dark:bg-black rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 flex items-center justify-between group">
                              <code className="font-mono text-sm text-green-600 dark:text-green-400">{installCommand}</code>
                              <button onClick={() => copyToClipboard(installCommand, 'install')} className="text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-white transition-colors">
                                 {copiedCommand === 'install' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            )}
         </div>

         {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/50 dark:bg-black/90 backdrop-blur-sm animate-in fade-in duration-200">
               <div className="bg-white dark:bg-[#09090b] border border-zinc-200 dark:border-zinc-800 rounded-2xl max-w-md w-full shadow-2xl relative overflow-hidden">
                  <button
                     onClick={() => { setIsModalOpen(false); setModalView('donation'); }}
                     className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors z-10"
                  >
                     <X className="w-5 h-5" />
                  </button>

                  {modalView === 'donation' && (
                     <div className="p-8 text-center">
                        <div className="relative w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                           <div className="absolute inset-0 bg-pink-500/20 rounded-full animate-[ping_2.5s_ease-out_infinite]"></div>
                           <div className="absolute inset-6 bg-pink-500/20 rounded-full animate-[ping_1.5s_ease-out_infinite]"></div>
                           <div className="relative w-14 h-14 bg-pink-100 dark:bg-pink-500/10 text-pink-600 dark:text-pink-500 rounded-full flex items-center justify-center border border-pink-200 dark:border-pink-500/20 shadow-[0_0_20px_rgba(236,72,153,0.3)] backdrop-blur-sm">
                              <Heart className="w-7 h-7 fill-current" />
                           </div>
                        </div>

                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{t.download.modal.support}</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-8">
                           {t.download.modal.desc}
                        </p>

                        <div className="grid grid-cols-4 gap-3 mb-4">
                           {[2, 5, 10, 50].map(amount => {
                              if (amount === 50) {
                                 return (
                                    <button
                                       key={amount}
                                       onClick={() => setDonationAmount(amount)}
                                       className={`relative group py-3 rounded-xl font-bold transition-all overflow-hidden border-0
                                    ${donationAmount === amount ? 'scale-105 ring-2 ring-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.4)]' : ''}
                                  `}
                                    >
                                       <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_270deg,#ec4899_360deg)] animate-[spin_3s_linear_infinite] opacity-100" />
                                       <div className={`absolute inset-[2px] rounded-[10px] transition-colors z-0 ${donationAmount === amount ? 'bg-zinc-900' : 'bg-white dark:bg-black'
                                          }`} />
                                       <span className={`relative z-10 ${donationAmount === amount ? 'text-white' : 'text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white'}`}>
                                          ${amount}
                                       </span>
                                       <div className="absolute inset-0 pointer-events-none z-20 overflow-visible">
                                          {[...Array(6)].map((_, i) => {
                                             const tx = `${(Math.random() * 60) - 30}px`;
                                             const delay = `${Math.random() * 1}s`;
                                             return (
                                                <Heart
                                                   key={i}
                                                   className="absolute left-1/2 top-1/2 w-3 h-3 text-pink-500 fill-pink-500 opacity-0 heart-anim"
                                                   style={{ '--tx': tx, animationDelay: delay }}
                                                />
                                             );
                                          })}
                                       </div>
                                    </button>
                                 );
                              }
                              return (
                                 <button
                                    key={amount}
                                    onClick={() => setDonationAmount(amount)}
                                    className={`py-3 border rounded-xl font-bold transition-colors ${donationAmount === amount
                                       ? 'bg-zinc-900 dark:bg-white text-white dark:text-black border-zinc-900 dark:border-white'
                                       : 'bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white border-zinc-200 dark:border-zinc-800'
                                       }`}
                                 >
                                    ${amount}
                                 </button>
                              )
                           })}
                        </div>

                        <form onSubmit={handleCustomDonationSubmit} className="relative mb-6">
                           <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">$</div>
                           <input
                              type="number"
                              placeholder={t.download.modal.custom}
                              value={donationAmount}
                              onChange={(e) => setDonationAmount(e.target.value)}
                              className="w-full bg-white dark:bg-black border border-zinc-300 dark:border-zinc-800 rounded-xl py-3 pl-8 pr-4 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                           />
                        </form>

                        <button
                           onClick={() => handleDonationSubmit(isFree ? 0 : currentAmount)}
                           className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors ${isFree
                              ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                              : 'bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-700 dark:hover:bg-zinc-200'
                              }`}
                        >
                           {isFree ? t.download.modal.free : t.download.modal.donate}
                           <DownloadIcon className="w-4 h-4" />
                        </button>

                        <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                           <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400 dark:text-zinc-500">
                              <span>{t.download.modal.secure}</span>
                              <PayPalIcon className="h-4" />
                           </div>
                           <p className="text-[10px] text-zinc-400 dark:text-zinc-600 text-center mt-2">
                              {t.download.modal.noPayment}
                           </p>
                        </div>
                     </div>
                  )}

                  {modalView === 'confirm' && (
                     <div className="p-8 text-center">
                        <div className="w-16 h-16 mx-auto mb-6 bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full flex items-center justify-center">
                           <AlertCircle className="w-8 h-8" />
                        </div>

                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">{t.download.modal.confirm.title}</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 leading-relaxed">
                           {t.download.modal.confirm.desc}
                        </p>

                        <div className="space-y-3 mb-8 text-left">
                           <Link
                              to="/eagle"
                              onClick={() => { setIsModalOpen(false); setModalView('donation'); window.scrollTo(0, 0); }}
                              className="flex items-center gap-3 p-3 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 hover:border-amber-400 dark:hover:border-amber-600 transition-colors group"
                           >
                              <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/20 rounded-lg flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                                 <EagleIcon className="w-5 h-5" />
                              </div>
                              <div className="flex-1">
                                 <div className="font-bold text-zinc-900 dark:text-white text-sm">Eagle</div>
                                 <div className="text-xs text-zinc-500 dark:text-zinc-400">Intelligent binary analysis engine</div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-zinc-400" />
                           </Link>

                           <Link
                              to="/winebridge"
                              onClick={() => { setIsModalOpen(false); setModalView('donation'); window.scrollTo(0, 0); }}
                              className="flex items-center gap-3 p-3 rounded-xl bg-pink-50 dark:bg-pink-900/10 border border-pink-200 dark:border-pink-800 hover:border-pink-400 dark:hover:border-pink-600 transition-colors group"
                           >
                              <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/20 rounded-lg flex items-center justify-center text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-transform">
                                 <Terminal className="w-5 h-5" />
                              </div>
                              <div className="flex-1">
                                 <div className="font-bold text-zinc-900 dark:text-white text-sm">WineBridge</div>
                                 <div className="text-xs text-zinc-500 dark:text-zinc-400">.NET bridge for Wine prefixes</div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-zinc-400" />
                           </Link>

                           <Link
                              to="/next"
                              onClick={() => { setIsModalOpen(false); setModalView('donation'); window.scrollTo(0, 0); }}
                              className="flex items-center gap-3 p-3 rounded-xl bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-colors group"
                           >
                              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                                 <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                              </div>
                              <div className="flex-1">
                                 <div className="font-bold text-zinc-900 dark:text-white text-sm">Bottles Next</div>
                                 <div className="text-xs text-zinc-500 dark:text-zinc-400">Complete rewrite in Rust</div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-zinc-400" />
                           </Link>
                        </div>

                        <div className="flex gap-3">
                           <button
                              onClick={() => setModalView('donation')}
                              className="flex-1 py-3 rounded-xl font-bold bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
                           >
                              {t.download.modal.confirm.goBack}
                           </button>
                           <button
                              onClick={proceedWithFreeDownload}
                              className="flex-1 py-3 rounded-xl font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                           >
                              {t.download.modal.confirm.continueFree}
                           </button>
                        </div>
                     </div>
                  )}
               </div>
            </div>
         )}
      </section>
   );
};

export default DownloadSection;