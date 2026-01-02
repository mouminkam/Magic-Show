"use client";

import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { MapPin } from "lucide-react";

// Dynamic import for leaflet to avoid SSR issues
let L;
if (typeof window !== "undefined") {
  L = require("leaflet");
  
  // Fix for default marker icons in Next.js
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  });
}

/**
 * MapController Component
 * Controls map view based on selected marker
 */
function MapController({ center, zoom, selectedMarkerId, markers }) {
  const map = useMap();

  useEffect(() => {
    if (selectedMarkerId && markers.length > 0) {
      const selectedMarker = markers.find((m) => m.id === selectedMarkerId);
      if (selectedMarker) {
        map.setView([selectedMarker.lat, selectedMarker.lng], zoom, {
          animate: true,
          duration: 0.5,
        });
      }
    } else if (center) {
      map.setView([center.lat, center.lng], zoom, {
        animate: true,
        duration: 0.5,
      });
    }
  }, [map, center, zoom, selectedMarkerId, markers]);

  return null;
}

/**
 * Custom Marker Icon
 */
function createCustomIcon(isSelected = false) {
  if (!L) return null;
  
  return L.divIcon({
    className: "custom-marker",
    html: `
      <div style="
        background-color: ${isSelected ? "#dc2626" : "#3b82f6"};
        width: 32px;
        height: 32px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          transform: rotate(45deg);
          color: white;
          font-size: 16px;
          font-weight: bold;
        ">📍</div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
}

/**
 * Map Component
 * Reusable map component using Leaflet
 * 
 * @param {Object} props - Component props
 * @param {Array} props.markers - Array of marker objects { id, lat, lng, title, address }
 * @param {Object} props.center - Center coordinates { lat, lng } (default: calculated from markers)
 * @param {number} props.zoom - Zoom level (default: calculated based on markers)
 * @param {string} props.height - Map height (default: "100%")
 * @param {string} props.className - Additional CSS classes
 * @param {Function} props.onMarkerClick - Callback when marker is clicked: (markerId) => void
 * @param {string|number} props.selectedMarkerId - ID of selected marker (for highlighting)
 */
export default function Map({
  markers = [],
  center = null,
  zoom = null,
  height = "100%",
  className = "",
  onMarkerClick = null,
  selectedMarkerId = null,
}) {
  // Calculate center from markers if not provided
  const calculatedCenter = useMemo(() => {
    if (center) return center;
    if (markers.length === 0) return { lat: 33.5104, lng: 36.1893 }; // Default: Damascus

    const avgLat =
      markers.reduce((sum, m) => sum + m.lat, 0) / markers.length;
    const avgLng =
      markers.reduce((sum, m) => sum + m.lng, 0) / markers.length;
    return { lat: avgLat, lng: avgLng };
  }, [center, markers]);

  // Calculate zoom based on markers spread
  const calculatedZoom = useMemo(() => {
    if (zoom !== null) return zoom;
    if (markers.length === 0) return 13;
    if (markers.length === 1) return 15;
    return 12;
  }, [zoom, markers.length]);

  if (markers.length === 0) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 ${className}`}
        style={{ height }}
      >
        <p className="text-gray-500">No markers to display</p>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <MapContainer
        center={[calculatedCenter.lat, calculatedCenter.lng]}
        zoom={calculatedZoom}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%", zIndex: 0 }}
        className="rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Map Controller */}
        <MapController
          center={calculatedCenter}
          zoom={calculatedZoom}
          selectedMarkerId={selectedMarkerId}
          markers={markers}
        />

        {/* Markers */}
        {markers.map((marker) => {
          const isSelected = selectedMarkerId === marker.id;
          const customIcon = createCustomIcon(isSelected);

          return (
            <Marker
              key={marker.id}
              position={[marker.lat, marker.lng]}
              icon={customIcon}
              eventHandlers={{
                click: () => {
                  if (onMarkerClick) {
                    onMarkerClick(marker.id);
                  }
                },
              }}
            >
              <Popup>
                <div className="p-2">
                  <h3 className="font-bold text-sm mb-1">{marker.title}</h3>
                  {marker.address && (
                    <p className="text-xs text-gray-600">{marker.address}</p>
                  )}
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

