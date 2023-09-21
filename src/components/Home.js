import React from "react";
import { name, city } from "../data/data.js";

const homeStyle = {
  color: 'firebrick'
};

function Home() {
  return (
  <div id="home">
  <h1 style={homeStyle}>
    {name} is a Web Developer from {city}
  </h1>
</div>
  )
};

export default Home;
