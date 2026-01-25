import { IconBox } from './IconBox';

export const FeatureCard = ({
    icon,
    title,
    description,
    color = 'zinc',
    className = '',
}) => {
    return (
        <div className={`bg-white dark:bg-black p-8 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors group ${className}`}>
            <IconBox
                icon={icon}
                color={color}
                size="md"
                className="mb-6 group-hover:scale-110 transition-transform"
            />
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">{title}</h3>
            <p className="text-zinc-600 dark:text-zinc-500 leading-relaxed text-sm">{description}</p>
        </div>
    );
};

export default FeatureCard;
