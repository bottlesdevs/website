const variantClasses = {
    default: 'bg-white dark:bg-black',
    bordered: 'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800',
    gradient: 'bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900/50 dark:to-zinc-900',
};

const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
};

export const Card = ({
    variant = 'bordered',
    hover = false,
    padding = 'lg',
    children,
    className = '',
}) => {
    const hoverClass = hover ? 'hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors' : '';

    return (
        <div className={`rounded-2xl ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClass} ${className}`}>
            {children}
        </div>
    );
};

export default Card;
