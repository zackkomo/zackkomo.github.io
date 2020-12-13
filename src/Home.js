import React from "react";
import "./App.css";
import Particles from "react-particles-js";
import particlesConfig from "./particlesConfig.js";
import hbg from "./assets/homebackground.jpg";
function Home() {
  return (
    <div className="homepage">
      <div
        style={{
          overflow: "hidden",
          maxHeight: "100%",
          maxWidth: "100%",
          zIndex: "0",
        }}
      >
        <img
          src={hbg}
          alt="Snow"
          style={{
            position: "absolute",
            width: "100vw",
            height: "95vh",
            resizeMode: "cover",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          overflow: "hidden",
          maxHeight: "100%",
          maxWidth: "100%",
          zIndex: "1",
        }}
      >
        <Particles height="94vh" width="100vw" params={particlesConfig} />
      </div>
      <div
        style={{
          position: "absolute",
          textAlign: "center",
          width: "100%",
          top: "40vh",
          zIndex: "2",
        }}
      >
        <h1>Welcome tom my website! Have a look around.</h1>
      </div>
    </div>
  );
}
export default Home;
