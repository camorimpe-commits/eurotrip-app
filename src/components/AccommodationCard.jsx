function formatDate(dateStr) {
    if (!dateStr) return '';
    const [y, m, d] = dateStr.split('-');
    return `${d}/${m}/${y}`;
}

export default function AccommodationCard({ accommodation, onRemove }) {
    const { id, name, city, checkIn, checkOut, airbnbLink, file } = accommodation;

    return (
        <div className="accommodation-card">
            <div className="card-header">
                <div>
                    <h3 className="card-title">{name}</h3>
                    <span className="card-city">📍 {city}</span>
                </div>
                <button
                    className="btn-remove"
                    onClick={() => onRemove(id)}
                    title="Remover hospedagem"
                >
                    ✕
                </button>
            </div>

            <div className="card-body">
                <span className="card-dates">
                    🗓️ {formatDate(checkIn)} → {formatDate(checkOut)}
                </span>

                {airbnbLink && (
                    <a
                        href={airbnbLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link"
                    >
                        🔗 Ver no Airbnb
                    </a>
                )}

                {file && (
                    <a
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-attachment"
                    >
                        📄 {file.name}
                    </a>
                )}
            </div>
        </div>
    );
}
