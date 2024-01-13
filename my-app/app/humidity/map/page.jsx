// Asyiq 

"use client";
import 'mapbox-gl/dist/mapbox-gl.css'
import * as React from 'react';
import {useState, useMemo} from 'react';
import {createRoot} from 'react-dom/client';
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';
//import ControlPanel from './control-panel';
import Pin from './pin';
const TOKEN = 'pk.eyJ1IjoiYXN5aXFudXJ1ZGRpbm5wIiwiYSI6ImNscmJ3Ym0zYTBzczQya2pxYXV1czZzZHUifQ.s5Y4QYi3tXGR-wP_QlpxjA'; // Set your mapbox token here
import Spinner from "react-bootstrap/Spinner";
import useSWR from "swr";

// use vanilla fetch as fetcher
// deserialize the fetched data as json
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App() {
  const IP_API_URL = "https://api.data.gov.sg/v1/environment/relative-humidity";
  //  const IP_API_URL = "https://freeipapi.com/api/json/";
    const { data, error, isLoading } = useSWR(IP_API_URL, fetcher);
    const [popupInfo, setPopupInfo] = useState(null);
    

    if (error) {
      return <h1>failed to load</h1>;
    }
    if (isLoading) {
      return (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      );
    }

  return (
    <Map
    // https://account.mapbox.com/access-tokens
      mapboxAccessToken="pk.eyJ1IjoiYXN5aXFudXJ1ZGRpbm5wIiwiYSI6ImNscmJ3Ym0zYTBzczQya2pxYXV1czZzZHUifQ.s5Y4QYi3tXGR-wP_QlpxjA"
      initialViewState={{
        longitude: 103.8198,
        latitude: 1.3521,
        zoom: 10
      }}
      style={{width: 900, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9">
      <Marker longitude={103} latitude={1.35} offset={[0, 0]}>
        <img src="https://img.freepik.com/premium-vector/pin-point-icon-with-red-map-location-pointer-symbol-isolated-white-background_120819-234.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1705104000&semt=sph" />
      </Marker>
    </Map>
  );
}