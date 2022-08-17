import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Fun = ({ position }) => {
  const [visit, setVisit] = useState([]);
  const [problem, setProblem] = useState("");
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    let isMounted = true;
    async function getReal() {
      try {
        let string =
          "https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=".concat(
            position[0]
          ) +
          "&lat=".concat(position[1]) +
          "&limit=10&apikey=5ae2e3f221c38a28845f05b62bde47f6ee07cbf5706d69095a5742ce";

        console.log(string);
        let response = await axios.get(string);
        setVisit(response.data.features);
        setProblem(null);
      } catch (err) {
        setProblem(err.message);
        setVisit(null);
      } finally {
        setIsShow(true);
      }
    }
    if (isMounted) getReal();
    return () => {
      isMounted = false;
    };
  }, []);

  async function getReal() {
    try {
      let string =
        "https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=".concat(
          position[0]
        ) +
        "&lat=".concat(position[1]) +
        "&limit=10&apikey=5ae2e3f221c38a28845f05b62bde47f6ee07cbf5706d69095a5742ce";
      let response = await axios.get(string);
      setVisit(response.data.features);
      setProblem(null);
    } catch (err) {
      setProblem(err.message);
      setVisit(null);
    } finally {
      setIsShow(true);
    }
  }
  if (!isShow) {
    getReal();
    return <div>Loading...</div>;
  }
  if (problem) {
    return <div>{problem}</div>;
  }
  return (
    <div>
      <div className="Trip m-20 grid grid-cols-2 gap-3">
        {visit.map((there) => {
          const { xid, name, dist, kinds } = there.properties;
          if (name != "") {
            return (
              <div
                key={xid}
                className=" p-4 border-orange-600 border-2 bg-slate-50 rounded-xl drop-shadow-lg "
              >
                <p className="p-1 font-serif font-semibold text-lg text-zinc-900">
                  {name}
                </p>
                <p className="p-1 font-light text-sm text-indigo-9000">
                  {"Distance: " + dist}
                </p>
                <p className="p-1 overflow-hidden font-serif text-neutral-800 text-ellipsis">
                  {"Type: " + kinds}
                </p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export default Fun;
