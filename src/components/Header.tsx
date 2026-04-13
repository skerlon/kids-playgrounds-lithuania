interface HeaderProps {
  locationCount: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Header({
  locationCount,
  searchQuery,
  onSearchChange,
}: HeaderProps) {
  return (
    <header className="header">
      <div className="header__brand">
        <svg
          className="header__logo"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <div>
          <h1 className="header__title">Vaikų aikštelės Lietuvoje</h1>
          <p className="header__subtitle">
            {locationCount} geriausios žaidimų aikštelės
          </p>
        </div>
      </div>
      <div className="header__search">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Ieškoti pagal miestą ar pavadinimą..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="header__input"
        />
        {searchQuery && (
          <button
            className="header__clear"
            onClick={() => onSearchChange("")}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>
    </header>
  );
}
