import React from "react";

function Navbar() {
  return (
    <div>
      <div className="relative w-full h-full">
        <img className="object-cover h-full w-full" src="scenery.jpg" />
        <div className="absolute inset-40 bottom-72">
          <div className=" text-center p-5 font-serif font-semibold text-zinc-200 text-5xl underline decoration-amber-700">
            Explore the World
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
