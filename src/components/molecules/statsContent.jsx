import { Stats } from "../atoms/stats"
export function StatsContent() {

    const statsData = [
        { count: 13, label: 'Page Sections' },
        { count: 2, label: 'Reusable Components' },
        { count: 1, label: 'CSS File' },
        { count: 0, label: 'Dependencies' },
    ];

    return (
        <>
            <div className="stats__grid">
                {statsData.map((stat, index) => (
                    <Stats key={index} count={stat.count} label={stat.label} />
                ))}
            </div>
        </>
    );
}