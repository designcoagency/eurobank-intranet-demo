export function BentoGrid({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(160px,auto)] ${className}`}
        >
            {children}
        </div>
    );
}

export function BentoItem({
    children,
    className = "",
    span = "col-span-1",
    rowSpan = "row-span-1",
}: {
    children: React.ReactNode;
    className?: string;
    span?: string;
    rowSpan?: string;
}) {
    return (
        <div
            className={`relative overflow-hidden rounded-[2.5rem] glass-panel p-8 hover:bg-white/40 transition-all duration-300 ${span} ${rowSpan} ${className}`}
        >
            {children}
        </div>
    );
}
