import React from "react";
import { Link } from "react-router-dom";

const LinkRoutes = () => {
  return (
    <>
      <div>

        <Link to="/"> Home</Link>

        <Link to="/species"> Species</Link>

        <Link to="/sightings"> Sightings</Link>

        <Link to="/individuals"> Individuals</Link>

      </div>
    </>
  )
};
export default LinkRoutes;