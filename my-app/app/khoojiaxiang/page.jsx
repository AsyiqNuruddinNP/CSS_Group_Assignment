"use client";
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const [windData, setWindData] = useState([]);
  const [metadata, setMetadata] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState(null);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseDirection = await fetch('https://api.data.gov.sg/v1/environment/wind-direction');
        if (!responseDirection.ok) {
          throw new Error('Failed to fetch wind direction data');
        }
        const dataDirection = await responseDirection.json();

        const responseSpeed = await fetch('https://api.data.gov.sg/v1/environment/wind-speed');
        if (!responseSpeed.ok) {
          throw new Error('Failed to fetch wind speed data');
        }
        const dataSpeed = await responseSpeed.json();

        const responseForecast = await fetch('https://api.data.gov.sg/v1/environment/2-hour-weather-forecast');
        if (!responseForecast.ok) {
          throw new Error('Failed to fetch 2-hour weather forecast data');
        }
        const dataForecast = await responseForecast.json();

        if (dataDirection.items && dataDirection.items.length > 0) {
          const combinedData = dataDirection.items[0].readings.map((readingDirection) => {
            const matchingSpeed = dataSpeed.items[0].readings.find(
              (readingSpeed) => readingSpeed.station_id === readingDirection.station_id
            );

            return {
              station_id: readingDirection.station_id,
              direction: readingDirection.value,
              speed: matchingSpeed ? matchingSpeed.value : null,
            };
          });

          setWindData(combinedData);
          setMetadata(dataDirection.metadata);
          setForecastData(dataForecast.items);
          setMapReady(true);
        } else {
          throw new Error('No data available in the API response');
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const getNext4Days = () => {
    const next4Days = [];

    if (forecastData && forecastData.length > 0) {
      const firstDayTimestamp = new Date(forecastData[0].timestamp);

      for (let i = 0; i < 4; i++) {
        const date = new Date(firstDayTimestamp);
        date.setDate(firstDayTimestamp.getDate() + i);
        next4Days.push(date.toDateString());
      }
    }

    return next4Days;
  };

  const next4Days = getNext4Days();

  const createCustomArrowIcon = (direction, windSpeed) => {
    const animationDuration = 5/windSpeed;
    return L.divIcon({
      html: `
        <div class="arrow-1" style="transform: rotate(${direction}deg);"></div>
        <div class="arrow-1" style="transform: rotate(${direction}deg);"></div>
        <div class="arrow-1" style="transform: rotate(${direction}deg);"></div>
        <div class="arrow-1" style="transform: rotate(${direction}deg);"></div>
        <style>
          .arrow-1 {
            width: 200px;
            height: 30px;
            display: flex;
          }
          .arrow-1:before {
            content: "";
            background: currentColor;
            width: 10px;
            clip-path: polygon(0 10px, calc(100% - 15px) 10px, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, calc(100% - 10px) calc(100% - 10px), 0 calc(100% - 10px));
            animation: a1 ${animationDuration}s infinite linear;
            padding: 15px;
            margin: 60px;
            
          }
          @keyframes a1 {
            90%,100%{flex-grow: 1}
          }
        </style>
      `,
      className: 'custom-arrow-icon',
    });
  };

  const getWindDirectionText = (angle) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(angle / 45) % 8;
    return `${directions[index]}`;
  };

  return (
    <div>
      {mapReady && (
        <MapContainer
          center={[1.3521, 103.8198]}
          zoom={13}
          style={{ height: '800px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {windData.map((reading, index) => {
            const stationId = reading.station_id;
            const direction = reading.direction;
            const speed = reading.speed;

            const stationLocation = metadata?.stations.find((station) => station.id === stationId)?.location;

            if (stationLocation && direction !== undefined) {
              const position = [stationLocation.latitude, stationLocation.longitude];

              return (
                (<Marker key={index} position={position} icon={createCustomArrowIcon(direction, speed)}>
                  <Popup>
                    <div>
                      <strong>Weather Information</strong>
                      <br />
                      {error ? (
                        `Error: ${error}`
                      ) : (
                        <>
                          Wind Direction: {direction}° ({getWindDirectionText(direction)})
                          <br />
                          Wind Speed: {speed !== null ? `${speed} m/s` : 'N/A'}
                          <br />
                        </>
                      )}
                    </div>
                  </Popup>
                </Marker>)
                (<marker ></marker>)
              );
            } else {
              return null;
            }
          })}
        </MapContainer>
      )}

      <div style={{ marginTop: '20px' }}>
        <h2>Next 4 Days Forecast</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Forecast</th>
            </tr>
          </thead>
          <tbody>
            {forecastData.slice(0, 4).map((forecast, index) => (
              <tr key={index}>
                <td>{next4Days[index]}</td>
                <td>{forecast.forecasts.area}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MapComponent;
