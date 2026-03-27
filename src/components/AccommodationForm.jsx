import { useState } from 'react';
import FileUpload from './FileUpload';

const EMPTY_FORM = {
    name: '',
    city: '',
    checkIn: '',
    checkOut: '',
    airbnbLink: '',
};

export default function AccommodationForm({ onAdd }) {
    const [form, setForm] = useState(EMPTY_FORM);
    const [file, setFile] = useState(null);

    function handleChange(e) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!form.name || !form.city || !form.checkIn || !form.checkOut) return;

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
            <h2 className="section-title">🏨 Cadastrar Hospedagem</h2>

            <div className="form-grid">
                <div className="form-group">
                    <label htmlFor="name">Nome da hospedagem</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Ex: Apartamento Paris Centro"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="city">Cidade</label>
                    <input
                        id="city"
                        name="city"
                        type="text"
                        placeholder="Ex: Paris"
                        value={form.city}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="checkIn">Check-in</label>
                    <input
                        id="checkIn"
                        name="checkIn"
                        type="date"
                        value={form.checkIn}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="checkOut">Check-out</label>
                    <input
                        id="checkOut"
                        name="checkOut"
                        type="date"
                        value={form.checkOut}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group form-group--full">
                    <label htmlFor="airbnbLink">Link do Airbnb</label>
                    <input
                        id="airbnbLink"
                        name="airbnbLink"
                        type="url"
                        placeholder="https://airbnb.com/rooms/..."
                        value={form.airbnbLink}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group form-group--full">
                    <label>Anexo (PDF ou imagem)</label>
                    <FileUpload onFileSelect={setFile} />
                </div>
            </div>

            <button type="submit" className="btn-primary">
                ✈️ Adicionar Hospedagem
            </button>
        </form>
    );
}
