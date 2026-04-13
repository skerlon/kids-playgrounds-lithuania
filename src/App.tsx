import { useState, useMemo, useRef, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import "./App.css";
import { locations } from "./data/locations";
import type { Location } from "./data/locations";
import MapView from "./components/MapView";
import LocationCard from "./components/LocationCard";
import LocationDetail from "./components/LocationDetail";
import Header from "./components/Header";

function App() {
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDetail, setShowDetail] = useState(false);
  const [showList, setShowList] = useState(true);
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const filteredLocations = useMemo(() => {
    if (!searchQuery.trim()) return locations;
    const q = searchQuery.toLowerCase();
    return locations.filter(
      (loc) =>
        loc.title.toLowerCase().includes(q) ||
        loc.city.toLowerCase().includes(q) ||
        loc.address.toLowerCase().includes(q) ||
        loc.description.toLowerCase().includes(q) ||
        loc.highlights.some((h) => h.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const handleLocationSelect = (location: Location) => {
    setActiveLocation(location);
    setShowDetail(true);

    const card = cardRefs.current.get(location.id);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    setActiveLocation(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseDetail();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="app">
      <Header
        locationCount={filteredLocations.length}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <div className="app__body">
        <button
          className={`app__toggle-list ${showList ? "app__toggle-list--active" : ""}`}
          onClick={() => setShowList(!showList)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" />
            <line x1="3" y1="12" x2="3.01" y2="12" />
            <line x1="3" y1="18" x2="3.01" y2="18" />
          </svg>
          {showList ? "Slėpti sąrašą" : "Rodyti sąrašą"}
        </button>

        <aside className={`sidebar ${showList ? "sidebar--open" : ""}`}>
          <div className="sidebar__list">
            {filteredLocations.length === 0 ? (
              <div className="sidebar__empty">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <p>Nieko nerasta pagal "{searchQuery}"</p>
              </div>
            ) : (
              filteredLocations.map((loc) => (
                <div
                  key={loc.id}
                  ref={(el) => {
                    if (el) cardRefs.current.set(loc.id, el);
                  }}
                >
                  <LocationCard
                    location={loc}
                    isActive={activeLocation?.id === loc.id}
                    onClick={() => handleLocationSelect(loc)}
                  />
                </div>
              ))
            )}
          </div>
        </aside>

        <main className="main">
          <MapView
            locations={filteredLocations}
            activeLocation={activeLocation}
            onLocationSelect={handleLocationSelect}
          />

          {showDetail && activeLocation && (
            <div className="detail-overlay">
              <LocationDetail
                location={activeLocation}
                onClose={handleCloseDetail}
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
