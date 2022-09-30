import React from "react";
import { Link } from "react-router-dom";

const LinkRoutes = () => {

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'hotpink',
  };

  return (
    <>
      <div>

        <Link to="/" style={linkStyle}> Home</Link>

        <Link to="/joinTable"style={linkStyle}> Summary</Link>

        <Link to="/species"style={linkStyle}> Species</Link>

        <Link to="/sightings"style={linkStyle}> Sightings</Link>

        <Link to="/individuals"style={linkStyle}> Individuals</Link>

      </div>
    </>
  )
};
export default LinkRoutes;