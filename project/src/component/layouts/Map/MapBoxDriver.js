import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import { CartContext } from "../../ConText/CartContext";
import PayMentMethod from "../../layouts/components/payMentMethod";
import { createInvoice } from "../../service/InvoiceService";
import { IoIosCloseCircle } from "react-icons/io";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import LeafletGeocoder from "./LeafletGeocoder";
import LeafletRoutingMachine from "./LeafletRoutingMachine";
import Swal from "sweetalert2";

const UpdateMapCenter = ({ position }) => {
  const map = useMap();
  map.setView(position);
  return null;
};

function MapBoxDriver() {
  return <div>MapBoxDriver</div>;
}

export default MapBoxDriver;
