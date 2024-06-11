import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";

import LeafletGeocoder from "./LeafletGeocoder";
import LeafletRoutingMachine from "./LeafletRoutingMachine";

// Custom hook to update map center
const UpdateMapCenter = ({ position }) => {
  const map = useMap();
  map.setView(position);
  return null;
};

function Map() {
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  const [routeInfo, setRouteInfo] = useState("");
  const [position, setPosition] = useState([16.047079, 108.20623]); // initial map center
  const mapRef = useRef();

  const handleRouteFound = (summary) => {
    const distance = (summary.totalDistance / 1000).toFixed(2) + " km";
    const time = (summary.totalTime / 60).toFixed(2) + " minutes";
    setRouteInfo(`Distance: ${distance}, Time: ${time}`);
  };

  const geocodeAddress = (address, callback) => {
    const geocoder = L.Control.Geocoder.nominatim();
    geocoder.geocode(address, (results) => {
      if (results.length > 0) {
        const { center } = results[0];
        setPosition([center.lat, center.lng]); // Update map center
        callback(center);
      } else {
        alert("Address not found");
      }
    });
  };

  const handleSearchClick = () => {
    if (startPoint && endPoint) {
      // Get the map instance from the ref
      const map = mapRef.current;

      // Initialize the routing machine to find the route and update the info
      const routingControl = L.Routing.control({
        waypoints: [L.latLng(startPoint), L.latLng(endPoint)],
        lineOptions: {
          styles: [
            {
              color: "red",
              weight: 4,
              opacity: 0.7,
            },
          ],
        },
        routeWhileDragging: false,
        geocoder: L.Control.Geocoder.nominatim(),
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        showAlternatives: true,
      })
        .on("routesfound", function (e) {
          const route = e.routes[0];
          handleRouteFound(route.summary);
        })
        .addTo(map);
    } else {
      alert("Please enter both start and end addresses.");
    }
  };

  return (
    <div className="App">
      <input
        id="start-input"
        placeholder="đi"
        onBlur={(e) => {
          const address = e.target.value;
          geocodeAddress(address, setStartPoint);
        }}
      />
      <input
        id="end-input"
        placeholder="về"
        onBlur={(e) => {
          const address = e.target.value;
          geocodeAddress(address, setEndPoint);
        }}
      />
      <button onClick={handleSearchClick}>Tìm kiếm</button>

      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {startPoint && (
          <>
            <Marker position={startPoint}>
              <Popup>Start Point</Popup>
            </Marker>
            <UpdateMapCenter position={startPoint} />
          </>
        )}
        {endPoint && (
          <>
            <Marker position={endPoint}>
              <Popup>End Point</Popup>
            </Marker>
            <UpdateMapCenter position={endPoint} />
          </>
        )}
        <LeafletGeocoder
          setStartPoint={setStartPoint}
          setEndPoint={setEndPoint}
        />
        <LeafletRoutingMachine
          startPoint={startPoint}
          endPoint={endPoint}
          onRouteFound={handleRouteFound}
        />
      </MapContainer>
    </div>
  );
}

let DefaultIcon = L.icon({
  iconUrl: "/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

export default Map;