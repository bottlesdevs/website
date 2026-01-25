const variantClasses = {
    default: 'bg-zinc-50 dark:bg-black',
    alt: 'bg-white dark:bg-zinc-900/30',
    dark: 'bg-zinc-900 text-white',
};

const borderClasses = {
    none: '',
    top: 'border-t border-zinc-200 dark:border-white/5',
    bottom: 'border-b border-zinc-200 dark:border-white/5',
    both: 'border-y border-zinc-200 dark:border-white/5',
};

export const Section = ({
    variant = 'default',
    border = 'none',
    children,
    className = '',
    id,
}) => {
    return (
        <section
            id={id}
            className={`py-24 transition-colors duration-300 ${variantClasses[variant]} ${borderClasses[border]} ${className}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
};

export default Section;
