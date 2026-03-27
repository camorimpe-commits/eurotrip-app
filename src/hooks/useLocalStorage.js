import { useState, useEffect } from 'react';

/**
 * Like useState but backed by localStorage.
 * Files (Blob URLs) can't be serialized, so file attachments are dropped
 * on reload — the rest of the data persists.
 */
export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const stored = localStorage.getItem(key);
            return stored ? JSON.parse(stored) : initialValue;
        } catch {
            return initialValue;
        }
    });

    // Save to localStorage whenever value changes
    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch {
            // ignore quota errors
        }
    }, [key, value]);

    return [value, setValue];
}
