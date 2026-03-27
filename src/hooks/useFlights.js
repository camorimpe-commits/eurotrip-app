import { useLocalStorage } from './useLocalStorage';

export function useFlights() {
    const [flights, setFlights] = useLocalStorage('eurotrip_flights', []);

    function addFlight(data) {
        setFlights((prev) => [
            ...prev,
            { ...data, id: crypto.randomUUID() },
        ]);
    }

    function removeFlight(id) {
        setFlights((prev) => prev.filter((f) => f.id !== id));
    }

    return { flights, addFlight, removeFlight };
}
