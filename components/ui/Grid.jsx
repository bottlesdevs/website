const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
};

const colMdClasses = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
};

const colLgClasses = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
};

const gapClasses = {
    none: 'gap-0',
    px: 'gap-px',
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
};

export const Grid = ({
    cols = 1,
    colsMd,
    colsLg,
    gap = 'md',
    children,
    className = '',
}) => {
    const responsiveCols = `${colClasses[cols]} ${colsMd ? colMdClasses[colsMd] : ''} ${colsLg ? colLgClasses[colsLg] : ''}`;

    return (
        <div className={`grid ${responsiveCols} ${gapClasses[gap]} ${className}`}>
            {children}
        </div>
    );
};

export default Grid;
