import FlightCard from './FlightCard';

export default function FlightList({ flights, onRemove }) {
    if (flights.length === 0) {
        return (
            <div className="accommodation-list--empty">
                <span>🛫</span>
                <p>Nenhum voo cadastrado ainda.</p>
                <p>Preencha o formulário acima para começar!</p>
            </div>
        );
    }

    return (
        <section className="accommodation-list">
            <h2 className="section-title">✈️ Voos Cadastrados ({flights.length})</h2>
            <div className="card-grid">
                {flights.map((f) => (
                    <FlightCard key={f.id} flight={f} onRemove={onRemove} />
                ))}
            </div>
        </section>
    );
}
