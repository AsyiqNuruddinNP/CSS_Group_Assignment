"use client";
import Spinner from "react-bootstrap/Spinner";
import useSWR from "swr";

// use vanilla fetch as fetcher
// deserialize the fetched data as json
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App() {
  const IP_API_URL = "https://api.data.gov.sg/v1/environment/relative-humidity";
//  const IP_API_URL = "https://freeipapi.com/api/json/";
  const { data, error, isLoading } = useSWR(IP_API_URL, fetcher);

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

  // render data
  return <h1>Humidty health: {data.api_info.status} {data.cityName} {data.continent} {data.timeZone}</h1>;
}