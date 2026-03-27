import AccommodationCard from './AccommodationCard';

export default function AccommodationList({ accommodations, onRemove }) {
    if (accommodations.length === 0) {
        return (
            <div className="accommodation-list--empty">
                <span>🏡</span>
                <p>Nenhuma hospedagem cadastrada ainda.</p>
                <p>Preencha o formulário acima para começar!</p>
            </div>
        );
    }

    return (
        <section className="accommodation-list">
            <h2 className="section-title">🗺️ Hospedagens Cadastradas ({accommodations.length})</h2>
            <div className="card-grid">
                {accommodations.map((acc) => (
                    <AccommodationCard key={acc.id} accommodation={acc} onRemove={onRemove} />
                ))}
            </div>
        </section>
    );
}
