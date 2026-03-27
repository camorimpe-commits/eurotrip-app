import { useLocalStorage } from './useLocalStorage';

export function useAccommodations() {
    const [accommodations, setAccommodations] = useLocalStorage('eurotrip_accommodations', []);

    function addAccommodation(data) {
        setAccommodations((prev) => [
            ...prev,
            { ...data, id: crypto.randomUUID() },
        ]);
    }

    function removeAccommodation(id) {
        setAccommodations((prev) => prev.filter((a) => a.id !== id));
    }

    return { accommodations, addAccommodation, removeAccommodation };
}
