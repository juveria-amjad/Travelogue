import React, { useState, useEffect } from "react";
import axios from "axios";

const Explore = (props) => {
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    retrievePlaces();
  }, []);

  async function retrievePlaces() {
    try {
      let response = await axios.get("http://localhost:5000/api/v1/places");
      setPlaces(response.data.places);
      console.log(response.data.places);
      setError(null);
    } catch (err) {
      setError(err.message);
      setPlaces(null);
    } finally {
      setIsLoaded(true);
    }
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.log(error);
  }
  return (
    <div className="grid grid-cols-3 m-10 gap-10">
      {places.map((place) => {
        const { _id, name, desc, tags, image } = place;
        return (
          <div key={_id}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src={image}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">` {desc}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {tags.map((tag) => {
                  return (
                    <span
                      key={tag}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {"#" + tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Explore;
