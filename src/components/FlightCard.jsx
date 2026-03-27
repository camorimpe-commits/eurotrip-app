function formatDate(dateStr) {
    if (!dateStr) return '';
    const [y, m, d] = dateStr.split('-');
    return `${d}/${m}/${y}`;
}

export default function FlightCard({ flight, onRemove }) {
    const { id, origin, destination, date, time, airline, flightNumber, bookingLink, file } = flight;

    return (
        <div className="accommodation-card flight-card">
            <div className="card-header">
                <div>
                    <h3 className="card-title">
                        {origin} → {destination}
                    </h3>
                    <span className="card-city">
                        {airline && `${airline}`}
                        {flightNumber && ` · ${flightNumber}`}
                    </span>
                </div>
                <button
                    className="btn-remove"
                    onClick={() => onRemove(id)}
                    title="Remover voo"
                >
                    ✕
                </button>
            </div>

            <div className="card-body">
                <span className="card-dates">
                    🗓️ {formatDate(date)}{time && ` às ${time}`}
                </span>

                {bookingLink && (
                    <a
                        href={bookingLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link"
                    >
                        🔗 Ver reserva
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
