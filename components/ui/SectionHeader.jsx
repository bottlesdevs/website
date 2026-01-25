import { Badge } from './Badge';

export const SectionHeader = ({
    badge,
    title,
    description,
    centered = true,
    className = '',
}) => {
    const alignClass = centered ? 'text-center mx-auto' : '';

    return (
        <div className={`max-w-3xl mb-16 ${alignClass} ${className}`}>
            {badge && (
                <Badge color={badge.color} icon={badge.icon} className="mb-6">
                    {badge.text}
                </Badge>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
                {title}
            </h2>
            {description && (
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
