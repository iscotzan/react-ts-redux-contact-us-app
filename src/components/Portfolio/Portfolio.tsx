import * as React from "react";
import { Container, CardDeck } from "reactstrap";
import PortfolioCard from "./PortfolioCard/PortfolioCard";
// import ScrollAnimation from "react-animate-on-scroll";

const projects = [
  {
    link: "https://guac-a-mole.herokuapp.com/",
    imageSrc: "./assets/images/guacamole.png",
    imageAlt: "Guacamole game image",
    Title: "Guac-A-Mole",
    TextContent: `Vegeterian React Version of the Whac-A-Mole game
    Created for a technical test & educational purposes
    (2018).`
  },
  {
    link: "https://github.com/iscotzan/react-ts-redux-contact-us-app",
    imageSrc: "./assets/images/contactUs.png",
    imageAlt: "Contact-Us App image",
    Title: "Contact-Us/Portfolio",
    TextContent: `Contact-Us/Portfolio App written in react via
    create-react-app, utilizing Redux, React-Router, TypeScript,
    Jest, ReactStrap and more (2018).`
  },
  {
    link: "http://bridal-studio-project.iscovici.com/home",
    imageSrc: "./assets/images/bridalStudio.png",
    imageAlt: "Bridal Studio Portfolio Site Image",
    Title: "Bridal Studio Project",
    TextContent: `Angular Portfolio website for Ironi-Room bridal studio
    (2015-2016).`
  },
  {
    link: "https://iscotzan.github.io/express-socket.io-chat-app/",
    imageSrc: "./assets/images/chatapp.jpeg",
    imageAlt: "Express Socket.io Chat App Image",
    Title: "Express-socket.io-chat-app",
    TextContent: `Real time, neatly designed, multiple users chat. Implementing
    Socket.io, Node.js (express) backend with a mySQL db, Authentication & Email verification.
    Created during "John-Bryce"
    FullStack/PHP developer course (2015-2016).`
  },
  {
    link: "http://inspirinotes.iscovici.com/home",
    imageSrc: "./assets/images/inspirinotes.png",
    imageAlt: "Inspirinotes Image",
    Title: "Inspirinotes",
    TextContent: `Inspirinotes is an Angular ToDo list project, complete with a
    PHP backend with mySQL db, Authentication & Email verification. Created during "John-Bryce"
    FullStack/PHP developer course (2015-2016).`
  }
];

// export class Porfolio extends React.Component<IFormProps, IFormState> {
const Porfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <Container>
        <h1 className="text-center">Open Source Portfolio</h1>
        {/* <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutRight"> */}
          <CardDeck>
            <PortfolioCard projectData={projects[0]} />
            <PortfolioCard projectData={projects[1]} />
          </CardDeck>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft"> */}
          <CardDeck>
            <PortfolioCard projectData={projects[2]} />
            <PortfolioCard projectData={projects[3]} />
            <PortfolioCard projectData={projects[4]} />
          </CardDeck>
        {/* </ScrollAnimation> */}
      </Container>
    </div>
  );
};

export default Porfolio;
