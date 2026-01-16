export function Stats ({count, label}) {
    return (
        <div className="stat">
            <div className="stat__num">{count}</div>
            <div className="stat__label">{label}</div>
        </div>
    )
}