import type { Location } from "../data/locations";

interface LocationCardProps {
  location: Location;
  isActive: boolean;
  onClick: () => void;
}

export default function LocationCard({
  location,
  isActive,
  onClick,
}: LocationCardProps) {
  return (
    <article
      className={`location-card ${isActive ? "location-card--active" : ""}`}
      onClick={onClick}
    >
      <div className="location-card__image">
        <img src={location.imageUrl} alt={location.title} loading="lazy" />
        <span className="location-card__category">{location.category}</span>
      </div>
      <div className="location-card__body">
        <h3 className="location-card__title">{location.title}</h3>
        <p className="location-card__city">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {location.city} &middot; {location.address}
        </p>
        <p className="location-card__desc">{location.description}</p>
        <div className="location-card__highlights">
          {location.highlights.map((h) => (
            <span key={h} className="location-card__tag">
              {h}
            </span>
          ))}
        </div>
        <div className="location-card__footer">
          <span className="location-card__age">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
            </svg>
            {location.ageRange}
          </span>
          <a
            href={location.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="location-card__link"
            onClick={(e) => e.stopPropagation()}
          >
            Daugiau info
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
