import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import type { Location } from "../data/locations";
import { useEffect } from "react";

const LITHUANIA_CENTER: [number, number] = [55.1736, 23.8948];
const DEFAULT_ZOOM = 7;

const markerIcon = new L.Icon({
  iconUrl:
    "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl:
    "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const activeMarkerIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function FlyToLocation({
  location,
}: {
  location: Location | null;
}) {
  const map = useMap();
  useEffect(() => {
    if (location) {
      map.flyTo([location.lat, location.lng], 13, { duration: 1.2 });
    }
  }, [location, map]);
  return null;
}

interface MapViewProps {
  locations: Location[];
  activeLocation: Location | null;
  onLocationSelect: (location: Location) => void;
}

export default function MapView({
  locations,
  activeLocation,
  onLocationSelect,
}: MapViewProps) {
  return (
    <MapContainer
      center={LITHUANIA_CENTER}
      zoom={DEFAULT_ZOOM}
      className="map-container"
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FlyToLocation location={activeLocation} />
      {locations.map((loc) => (
        <Marker
          key={loc.id}
          position={[loc.lat, loc.lng]}
          icon={
            activeLocation?.id === loc.id ? activeMarkerIcon : markerIcon
          }
          eventHandlers={{
            click: () => onLocationSelect(loc),
          }}
        >
          <Popup>
            <div className="popup-content">
              <h3>{loc.title}</h3>
              <p className="popup-city">{loc.city}</p>
              <p className="popup-address">{loc.address}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
