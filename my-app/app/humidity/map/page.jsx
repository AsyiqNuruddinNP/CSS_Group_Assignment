// Asyiq 

"use client";
import * as React from 'react';
import Map from 'react-map-gl';

export default function App() {
  return (
    <Map
    // https://account.mapbox.com/access-tokens
      mapboxAccessToken="pk.eyJ1IjoiYXN5aXFudXJ1ZGRpbm5wIiwiYSI6ImNscmJ3Ym0zYTBzczQya2pxYXV1czZzZHUifQ.s5Y4QYi3tXGR-wP_QlpxjA"
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}