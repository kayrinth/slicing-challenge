import { Stats } from "../atoms/stats"
export function StatsContent() {

    const statsData = [
        { count: 3, label: 'Page Sections' },
        { count: 12, label: 'Reusable Components' },
        { count: 1, label: 'CSS File' },
        { count: 0, label: 'Dependencies' },
    ];

    return (
        <>
            <div className="stats__grid">
                {statsData.map((item, index) => (
                    <Stats key={index} count={item.count} label={item.label} />
                ))}
            </div>
        </>
    );
}