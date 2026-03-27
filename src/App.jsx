import './App.css';
import { useState } from 'react';
import MapView from './components/mapView';
import AccommodationForm from './components/AccommodationForm';
import AccommodationList from './components/AccommodationList';
import FlightForm from './components/FlightForm';
import FlightList from './components/FlightList';
import { useAccommodations } from './hooks/useAccommodations';
import { useFlights } from './hooks/useFlights';

const TABS = [
  { id: 'accommodations', label: '🏨 Hospedagens' },
  { id: 'flights', label: '✈️ Voos' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('accommodations');
  const [saved, setSaved] = useState(false);

  const { accommodations, addAccommodation, removeAccommodation } = useAccommodations();
  const { flights, addFlight, removeFlight } = useFlights();

  function handleSave() {
    // Data is already auto-saved via useLocalStorage on every change.
    // This button gives the user explicit visual confirmation.
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div>
      {/* Header */}
      <div className="app-header">
        <h1 className="app-title">🌍 Eurotrip Planner</h1>
        <button
          className={`btn-save${saved ? ' btn-save--ok' : ''}`}
          onClick={handleSave}
        >
          {saved ? '✅ Salvo!' : '💾 Salvar'}
        </button>
      </div>

      {/* Map */}
      <div className="map-wrapper">
        <MapView />
      </div>

      {/* Tabs */}
      <div className="tabs-bar">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn${activeTab === tab.id ? ' tab-btn--active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="accommodations-section">
        {activeTab === 'accommodations' && (
          <>
            <AccommodationForm onAdd={addAccommodation} />
            <AccommodationList
              accommodations={accommodations}
              onRemove={removeAccommodation}
            />
          </>
        )}
        {activeTab === 'flights' && (
          <>
            <FlightForm onAdd={addFlight} />
            <FlightList flights={flights} onRemove={removeFlight} />
          </>
        )}
      </div>
    </div>
  );
}