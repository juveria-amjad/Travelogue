import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Fun from "./Fun";

const Trip = ({ iso, capital }) => {
  const [location, setLocation] = useState([]);
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      async function getData() {
        try {
          let response = await axios.get(
            "https://api.opentripmap.com/0.1/en/places/geoname?name=".concat(
              capital
            ) +
              "&country=".concat(iso) +
              "&apikey=<apikey>"
          );
          setLocation([response.data.lon, response.data.lat]);
          setError(null);
        } catch (err) {
          setError(err.message);
          setLocation(null);
        } finally {
          setIsLoaded(true);
        }
      }
    }
    getData();
    return () => {
      isMounted = false;
    };
  }, []);
  async function getData() {
    try {
      let response = await axios.get(
        "https://api.opentripmap.com/0.1/en/places/geoname?name=".concat(
          capital
        ) +
          "&country=".concat(iso) +
          "&apikey=<apikey>"
      );
      setLocation([response.data.lon, response.data.lat]);
      setError(null);
    } catch (err) {
      setError(err.message);
      setLocation(null);
    } finally {
      setIsLoaded(true);
    }
  }

  if (!isLoaded) {
    getData();
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="m-10">
        <h2 className="text-2xl text-orange-500 underline decoration-slate-200 font-serif font-bold ">
          Places to Visit
        </h2>
      </div>
      <Fun key={location} position={location} />
    </div>
  );
};

export default Trip;
