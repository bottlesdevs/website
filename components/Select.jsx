import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

const Select = ({ value, onChange, options, icon: Icon, className = "" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (optionValue) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    const selectedOption = options.find(opt => opt.value === value) || options[0];

    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors border border-transparent w-full
                    text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800
                    ${isOpen ? 'bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white' : ''}`}
            >
                <div className="flex items-center gap-2 truncate">
                    {Icon && <Icon className="w-4 h-4 shrink-0" />}
                    <span className="truncate">{selectedOption?.label || value}</span>
                </div>
                <ChevronDown className={`w-3 h-3 transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-full min-w-[160px] max-h-60 overflow-y-auto bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-zinc-200 dark:border-zinc-800 z-50 py-1">
                    {options.map((opt) => (
                        <button
                            key={opt.value}
                            onClick={() => handleSelect(opt.value)}
                            className="w-full flex items-center justify-between px-4 py-2 text-sm text-left transition-colors
                                text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white"
                        >
                            <span className="truncate mr-2">{opt.label}</span>
                            {value === opt.value && <Check className="w-3 h-3 text-blue-500 shrink-0" />}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Select;
