import type { Location } from "../data/locations";

interface LocationDetailProps {
  location: Location;
  onClose: () => void;
}

export default function LocationDetail({
  location,
  onClose,
}: LocationDetailProps) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`;

  return (
    <div className="detail-panel">
      <button className="detail-panel__close" onClick={onClose}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div className="detail-panel__hero">
        <img src={location.imageUrl} alt={location.title} />
        <div className="detail-panel__hero-overlay">
          <span className="detail-panel__category">{location.category}</span>
        </div>
      </div>

      <div className="detail-panel__content">
        <h2 className="detail-panel__title">{location.title}</h2>

        <div className="detail-panel__meta">
          <div className="detail-panel__meta-item">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div>
              <strong>{location.city}</strong>
              <span>{location.address}</span>
            </div>
          </div>
          <div className="detail-panel__meta-item">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
            </svg>
            <div>
              <strong>Amžius</strong>
              <span>{location.ageRange}</span>
            </div>
          </div>
          <div className="detail-panel__meta-item">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <div>
              <strong>Koordinatės</strong>
              <span>
                {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
              </span>
            </div>
          </div>
        </div>

        <p className="detail-panel__description">{location.description}</p>

        <div className="detail-panel__tags">
          {location.highlights.map((h) => (
            <span key={h} className="detail-panel__tag">
              {h}
            </span>
          ))}
        </div>

        <div className="detail-panel__actions">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="detail-panel__btn detail-panel__btn--primary"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
            Atidaryti žemėlapyje
          </a>
          <a
            href={location.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="detail-panel__btn detail-panel__btn--secondary"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Šaltinis
          </a>
        </div>
      </div>
    </div>
  );
}
