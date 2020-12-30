import React from "react";
import "./App.css";
import Particles from "react-particles-js";
import particlesConfig from "./particlesConfig.js";
import hbg from "./assets/homebackground.jpg";
const backgroundImg = "./assets/homebackground.jpg";
function Home() {
  return (
    <div className="homepage">
      <div className="particles">
        <Particles height="94vh" width="100vw" params={particlesConfig} />
      </div>
      <div className="homepageContent">
        <div className="mybanner">
          <h1>Zacharias Komodromos</h1>
          <h3>Welcome to my website! Have a look around.</h3>
        </div>
      </div>
    </div>
  );
}
export default Home;
