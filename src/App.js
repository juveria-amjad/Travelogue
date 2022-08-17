import "./App.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Country from "./Components/Country";
import Navbar from "./Components/Navbar";

function App() {
  const [country, setCountry] = useState(["Cambodia"]);

  const [value, setValue] = useState("");

  return (
    <div className="home">
      <Navbar />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCountry([value]);
        }}
        className="flex m-5 justify-center text-gray-700 accent-orange-300"
      >
        <input
          className="p-3 border-2 border-gray-300 w-30 h-30 rounded-lg tracking-wide focus:outline-none focus:accent-orange-300"
          type="text"
          placeholder="Search"
          value={value}
          onChange={(e) => {
            e.preventDefault();
            setValue(e.target.value);
          }}
        />
        <button type="submit" className=" w-9 ml-6">
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </button>
      </form>
      <Country key={country} name={country} />
    </div>
  );
}

export default App;
