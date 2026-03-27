import { useRef, useState } from 'react';

export default function FileUpload({ onFileSelect }) {
    const inputRef = useRef(null);
    const [fileName, setFileName] = useState('');
    const [dragging, setDragging] = useState(false);

    function handleFile(file) {
        if (!file) return;
        setFileName(file.name);
        onFileSelect(file);
    }

    function handleChange(e) {
        handleFile(e.target.files[0]);
    }

    function handleDrop(e) {
        e.preventDefault();
        setDragging(false);
        handleFile(e.dataTransfer.files[0]);
    }

    return (
        <div
            className={`file-upload-zone${dragging ? ' dragging' : ''}`}
            onClick={() => inputRef.current.click()}
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
        >
            <input
                ref={inputRef}
                type="file"
                accept="image/*,application/pdf"
                style={{ display: 'none' }}
                onChange={handleChange}
            />
            <span className="file-upload-icon">📎</span>
            <span className="file-upload-label">
                {fileName
                    ? fileName
                    : 'Arraste um arquivo ou clique para selecionar (PDF ou imagem)'}
            </span>
        </div>
    );
}
