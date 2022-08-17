import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="flex bg-transparent p-5">
          <NavLink className="basis-2/3 text-black font-serif font-bold text-lg" to="/">
            Travelogue
          </NavLink>
        <div className="basis-1/3 text-gray-500 ">
            <NavLink to="/">
              Home
              <span className="sr-only">(current)</span>
            </NavLink>
        </div>
        <div className="basis-1/3 text-gray-500 ">
            <NavLink to="/explore" >
              Explore
        </NavLink>
        </div>
      </nav>
    </div>
    );
}

export default Navigation;