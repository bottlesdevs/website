const colorClasses = {
    blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800',
    purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800',
    pink: 'bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-800',
    amber: 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800',
    green: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800',
    zinc: 'bg-zinc-100 dark:bg-white/10 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-white/20',
};

export const Badge = ({
    color = 'zinc',
    icon,
    children,
    className = '',
}) => {
    return (
        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${colorClasses[color]} ${className}`}>
            {icon}
            <span>{children}</span>
        </span>
    );
};

export default Badge;
