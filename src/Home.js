import React from "react";
import "./App.css";
import Particles from "react-particles-js";
import particlesConfig from "./particlesConfig.js";
function Home() {
  return (
    <div className="homepage">
      <div style={{ position: "absolute", overflow: "hidden" }}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>
      <div className="homepage-content">
        <h1> Welcome to my website! Have a look around.</h1>
      </div>
    </div>
  );
}
export default Home;
