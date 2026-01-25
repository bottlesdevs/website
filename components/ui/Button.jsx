import { Link } from 'react-router-dom';

const variantClasses = {
    primary: 'bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-xl',
    secondary: 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700',
    outline: 'border border-zinc-200 dark:border-white/20 text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-white/10',
    ghost: 'text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-white/10',
};

const sizeClasses = {
    sm: 'h-10 px-4 text-sm',
    md: 'h-12 px-6 text-base',
    lg: 'h-14 px-8 text-lg',
};

export const Button = ({
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'right',
    href,
    external,
    fullWidth,
    children,
    className = '',
    ...props
}) => {
    const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all hover:scale-105 active:scale-95';
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

    const content = (
        <>
            {icon && iconPosition === 'left' && icon}
            {children}
            {icon && iconPosition === 'right' && icon}
        </>
    );

    if (href) {
        if (external) {
            return (
                <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
                    {content}
                </a>
            );
        }
        return (
            <Link to={href} className={classes} onClick={() => window.scrollTo(0, 0)}>
                {content}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {content}
        </button>
    );
};

export default Button;
