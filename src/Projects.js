import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import Cpre281 from "./assets/cpre281Project.jpg";
// import { Document, Page } from "react-pdf";
import PdfView from "./Pdfview.js";
import EE330Pres from "./assets/EE330ProjectPresentation.pdf";
import EE330Rep from "./assets/EE330ProjectReport.pdf";
import Discord from "./assets/discord.png";
import tictactoe from "./assets/tictactoe.png";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Projects() {
  var items = [
    {
      name: "EE330: Integrated Electronics - Final Project",
      link: <a href={EE330Rep}>Link</a>,
      key: 0,
      description:
        "During my junior year, through taking EE330, I learned a lot about the manufacturing process for integrated circuits. Along with that, I gained insight in designing different circuits, mainly focusing on amplifiers. For the final project in the course, another student and I completed one of the final projects. Our prompt was to create a device like the Maxim DS 1666, where there are 4 modes of operation. Through a 2-bit input the user will be able to switch between the different modes. In mode 00 it operates like a noninverting finite gain amplifier, in mode 01 like a programmable inverting finite gain amplifier, in mode 10 like a 4-bit DAC and finally in mode 11 like as a potentiometer and operational amplifier. We quickly simplified the process by identifying the common aspects and made a Transmission Gate (bi-directional voltage controlled switch), a 4-to-1 Multiplexer, an Operational Amplifier, a Resistor Array and a 4-to-16 Decoder. Following are the presentation slides and final report that explain the project in more detail. - ",
      img: EE330Pres,
    },
    {
      name: "CPRE 281: DIGITAL LOGIC - FINAL PROJECT",
      description:
        'For my Cpre281 Final Project my sophomore year, we were given a choice of a few projects. I decided to go with "Booths Multiplication". The basic idea of the algorithm is a way of multiplying two numbers in two\'s compliment. A summary of the algorithm is: you start with one of the numbers as a running number and add the multiplier or the multiplicand based on the last two digits of the running number. Each iteration of the process will shift the number to the left and repeat the process for as many times as there are binary digits. For my project specifically, I used the Altera DE2-155 board in such a way that a user would input two 8-bit numbers using 16 switches on the Altera board, and then the multiplication of the two would show up on the HEX display of the board. This project helped me get very familiar with using Digital Logic to get the results I want, as well as designing basic level FSMs (Finite State Machines). For the project I used various collections of systems that I had made throughout the semester, like a Fast Adder, the 7-Segment display output, as well as a Register File to hold the numbers.',
      img: Cpre281,
      key: 1,
    },
    {
      name: "PERSONAL PROJECT: DISCORD BOT",
      link: <a href={"https://github.com/zackkomo/zBot"}>Link</a>,
      description:
        "As an Electrical Engineering student, I do not get much opportunity to do software-based projects. Completing Computer Science classes for my minor gives me some exposure but not much. Since I use discord, I decided to make a bot to help in some situations. To work on my project I used Node JS, the Discord API, GitHub to host my code and a local machine acting like a server. Through this project I learned a lot about scripting languages, asynchronous functions, and JavaScript syntax. Additionally, I gained valuable experience using an API, as well as setting up CI/CD through GitHub's actions to actively update the live bot if changes are made to the repository. Some of the functions I made include: Reminders, Polls, Channel Creation and an RNG. The code for the bot can be found here. - ",
      img: Discord,
    },
    {
      name: "PERSONAL PROJECT: Learning React",
      link: <Link to={"/projects/game"}>Link</Link>,
      img: tictactoe,

      description:
        "A personal project I decided to pursue was creating this website by using React. Using my experience from the DISCORD BOT project with javascript, it became a lot easier to understand the syntaxt and throught process behind how to structure my React apps. Specifically, I saw this with the concept of promises that can be used for various effects. To practice and learn more about it, I took the idea from the React official guide to create a tic-tac-toe game that can be found here: ",
    },
  ];
  return (
    <section className="container">
      <Carousel className="carousel" autoPlay={false} fullHeightHover={false}>
        {items.map((item, i) => (
          <Item key={`page_${i + 1}`} item={item} />
        ))}
      </Carousel>
    </section>
  );
}
function Item(props) {
  return (
    <section className="container-content">
      <h1>{props.item.name}</h1>
      <br></br>
      <br></br>
      <div className="project">
        <ImgRen name={props.item.img}></ImgRen>
      </div>
      <p>
        {props.item.description}
        {props.item.link}
      </p>
    </section>
  );
}

function ImgRen(props) {
  if (props.name === undefined) {
    return <br />;
  }
  if (String(props.name).includes(".pdf")) {
    return (
      <div className="pdf-container">
        <PdfView pdf={props.name} />
      </div>
    );
  }
  return <img className="picture-container" src={props.name} alt="Oops" />;
}

export default Projects;
