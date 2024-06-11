import React, { useRef, useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { CartContext } from "../../ConText/CartContext";
const BoxMap = ({ pickup, setPickup, end, setEnd }) => {
  const mapRef = useRef(null);
  const { setTheme } = useContext(CartContext);
  const { theme } = useContext(CartContext);

  // Function to handle geocoding
  const geocodeAddress = (address, callback) => {
    const geocoder = L.Control.Geocoder.nominatim();
    geocoder.geocode(address, (results) => {
      if (results.length > 0) {
        const { center } = results[0];
        callback(center);
        if (mapRef.current) {
          mapRef.current.setView([center.lat, center.lng], 13);
        }
      } else {
        alert("Address not found");
      }
    });
  };

  return (
    <div>
      <input
        id="start-input"
        value={theme.pickup}
        placeholder="Start location"
        onChange={(e) => theme.setPickup(e.target.value)}
        onBlur={(e) => geocodeAddress(e.target.value, (loc) => setPickup(loc))}
      />
      <input
        id="end-input"
        value={theme.end}
        placeholder="End location"
        onChange={(e) => setEnd(e.target.value)}
        onBlur={(e) => geocodeAddress(e.target.value, (loc) => setEnd(loc))}
      />
      <MapContainer
        center={[16.047079, 108.20623]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%" }}
        whenCreated={(map) => (mapRef.current = map)}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {theme.pickup && (
          <Marker position={theme.pickup}>
            <Popup>Start Point</Popup>
          </Marker>
        )}
        {theme.end && (
          <Marker position={theme.end}>
            <Popup>End Point</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default BoxMap;
