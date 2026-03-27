import { useState } from 'react';
import FileUpload from './FileUpload';

const EMPTY_FORM = {
    origin: '',
    destination: '',
    date: '',
    time: '',
    airline: '',
    flightNumber: '',
    bookingLink: '',
};

export default function FlightForm({ onAdd }) {
    const [form, setForm] = useState(EMPTY_FORM);
    const [file, setFile] = useState(null);

    function handleChange(e) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!form.origin || !form.destination || !form.date) return;

        onAdd({
            ...form,
            file: file
                ? { name: file.name, url: URL.createObjectURL(file), type: file.type }
                : null,
        });

        setForm(EMPTY_FORM);
        setFile(null);
    }

    return (
        <form className="accommodation-form" onSubmit={handleSubmit}>
            <h2 className="section-title">✈️ Cadastrar Voo</h2>

            <div className="form-grid">
                <div className="form-group">
                    <label htmlFor="origin">Origem</label>
                    <input
                        id="origin"
                        name="origin"
                        type="text"
                        placeholder="Ex: Lisboa"
                        value={form.origin}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="destination">Destino</label>
                    <input
                        id="destination"
                        name="destination"
                        type="text"
                        placeholder="Ex: Paris"
                        value={form.destination}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="date">Data do voo</label>
                    <input
                        id="date"
                        name="date"
                        type="date"
                        value={form.date}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="time">Horário de partida</label>
                    <input
                        id="time"
                        name="time"
                        type="time"
                        value={form.time}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="airline">Companhia aérea</label>
                    <input
                        id="airline"
                        name="airline"
                        type="text"
                        placeholder="Ex: TAP Air Portugal"
                        value={form.airline}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="flightNumber">Número do voo</label>
                    <input
                        id="flightNumber"
                        name="flightNumber"
                        type="text"
                        placeholder="Ex: TP1234"
                        value={form.flightNumber}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group form-group--full">
                    <label htmlFor="bookingLink">Link da reserva</label>
                    <input
                        id="bookingLink"
                        name="bookingLink"
                        type="url"
                        placeholder="https://..."
                        value={form.bookingLink}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group form-group--full">
                    <label>Anexo (PDF ou imagem)</label>
                    <FileUpload onFileSelect={setFile} />
                </div>
            </div>

            <button type="submit" className="btn-primary">
                🛫 Adicionar Voo
            </button>
        </form>
    );
}
