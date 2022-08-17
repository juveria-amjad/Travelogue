import React, { useState, useEffect } from "react";
import axios from "axios";
import Trip from "./Trip";

const Country = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    async function getData() {
      console.log(props.name);

      try {
        let response = await axios.get(
          "https://restcountries.com/v3.1/name/".concat(props.name)
        );
        setItems(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setItems(null);
      } finally {
        setIsLoaded(true);
      }
    }
    getData();
  }, []);

  async function getData() {
    console.log(props.name);
    try {
      const response = await axios.get(
        "https://restcountries.com/v3.1/name/".concat(props.name)
      );
      setItems(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setItems(null);
    } finally {
      setIsLoaded(true);
    }
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
    getData();
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <div className="country">
        {items.map((item) => {
          const { common, official } = item.name;
          const {
            cca2,
            capital,
            population,
            startOfWeek,
            region,
            subregion,
            timezones,
          } = item;
          return (
            <div className="grid grid-cols-2 gap-4 m-5 mt-10" key={common}>
              <div className="bg-zinc-300 py-8 px-10 mx-auto drop-shadow-lg backdrop-blur-sm rounded-tl-3xl">
                <p className="text-white font-serif font-semibold">
                  <span className=" font-mono font-thin">Common Name: </span>
                  <span>{common}</span>
                </p>
                <p className="text-white font-serif font-semibold">
                  <span className=" font-mono font-thin">Official Name: </span>
                  <span>{official} </span>
                </p>
                <p className="text-white font-serif font-semibold">
                  <span className=" font-mono font-thin">CCA2: </span>
                  <span>{cca2} </span>
                </p>
                <p className="text-white font-serif font-semibold">
                  <span className=" font-mono font-thin">Capital: </span>
                  <span>{capital} </span>
                </p>
              </div>

              <div className="bg-zinc-300 py-8 px-10 mx-auto drop-shadow-lg backdrop-blur-sm rounded-br-3xl">
                <p className="text-white font-serif font-semibold">
                  <span className=" font-mono font-thin">Population: </span>
                  <span> {population} </span>
                </p>
                <p className="text-white font-serif font-semibold">
                  <span className=" font-mono font-thin">
                    Start of the Week:
                  </span>
                  <span>{startOfWeek} </span>
                </p>
                <p className="text-white font-serif font-semibold">
                  <span className=" font-mono font-thin">Region: </span>
                  <span>{region} </span>
                </p>
                <p className="text-white font-serif font-semibold">
                  <span className=" font-mono font-thin">Subregion: </span>
                  <span>{subregion} </span>
                </p>
                <p className="text-white font-serif font-semibold">
                  <span className=" font-mono font-thin">Timezone: </span>
                  <span>{timezones} </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {items.map((item) => {
        return <Trip key={item.cca2} iso={item.cca2} capital={item.capital} />;
      })}
    </div>
  );
};

export default Country;
