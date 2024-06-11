import React, { useEffect } from "react";
import L, { marker } from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";

const LeafletRoutingMachine = ({ startPoint, endPoint, onRouteFound }) => {
  const map = useMap();
  let DefaultIcon = L.icon({
    iconUrl: "/marche.gif",
    iconSize: [90, 90],
  });

  useEffect(() => {
    if (startPoint && endPoint) {
      const marker1 = L.marker(startPoint, { icon: DefaultIcon }).addTo(map);

      const control = L.Routing.control({
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
      }).addTo(map);

      control.on("routesfound", function (e) {
        const route = e.routes[0];
        const { coordinates } = route;

        let index = 0;
        if (marker1) {
          map.removeLayer(marker1);
        }
        const updateMarkerPosition = () => {
          if (index < coordinates.length) {
            const { lat, lng } = coordinates[index];
            marker1.setLatLng([lat, lng]);
            index++;
            setTimeout(updateMarkerPosition, 100);
          } else {
            marker1.setLatLng(endPoint);
          }
        };

        updateMarkerPosition();
      });

      return () => {
        map.removeControl(control);
      };
    }
  }, [startPoint, endPoint, map, DefaultIcon]);

  return null;
};

export default LeafletRoutingMachine;
