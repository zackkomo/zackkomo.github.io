import React from "react";
import "./App.css";
import me from "./assets/me.jpg";

function About() {
  return (
    <section className="container">
      <section className="container-content">
        <h1>About me</h1>

        <p>
          <img className="photo" src={me} alt="Zacharias Komodromos" />
          Hello! My name is Zack Komodromos. I am currently a student at Iowa
          State University. I will be graduating in Spring 2021 with a
          Bachelor's Degree in Electrical Engineering with a Minor in Computer
          Science. I plan on attending Graduate School in Fall of 2021 focusing
          on Electrical Engineering Communications and Signal Processing. My
          goal with that is to equip myself as best I can in order to be working
          on cutting edge research in the Communications field.
          <br />
          <br />
          The purpose of this website is to have a centralized place to showcase
          any projects or content I want to make available for anyone to see. My
          main interests are more geared toward Communications in Electrical
          Engineering, but I do like taking on other types of projects. One
          example is this website! With this website, I will also showcase some
          projects I have completed in my Undergraduate degree as well as some
          reflections on my goals and path.
        </p>
      </section>
    </section>
  );
}
export default About;
