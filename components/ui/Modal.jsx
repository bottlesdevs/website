import { X } from 'lucide-react';

export const Modal = ({
    open,
    onClose,
    children,
    className = '',
}) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className={`bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-2xl max-w-md w-full shadow-2xl relative overflow-hidden p-8 ${className}`}>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
