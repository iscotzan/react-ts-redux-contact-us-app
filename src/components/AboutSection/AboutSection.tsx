import * as React from "react";
import { Media, Col } from "reactstrap";
import StrengthList from "./../StrengthsList/StrengthsList";
import ScrollAnimation from "react-animate-on-scroll";
// export class AboutSection extends React.Component<IFormProps, IFormState> {

const animationIn = "fadeInUp";
// const animationInSubtle = "fadeIn";
const animationOut = "fadeOut";
const goldenRatio = 1.61803398875;
const animationDuration = goldenRatio / 2;
interface IProps {
  guestName?: string;
}
const AboutSection = (props: IProps) => {
  return (
    <Col className={"offset-2 col-8"} id="divFoto">
      <Col xs={{ size: 1 }} md={{ size: 4, offset: 4 }}>
        <Media
          size={"small"}
          middle
          className="img-thumbnail rounded-circle"
          src="https://avatars1.githubusercontent.com/u/16321719?s=460&v=4"
          alt="Profile Photo"
          id="foto-perfil"
        />
      </Col>
      <Col xs={12} md={{ size: 10, offset: 1 }} className="text-about">
        <ScrollAnimation
          duration={animationDuration}
          animateIn={animationIn}
          animateOut={animationOut}
        >
          <p>
            Hello
            {props.guestName ? (
              <span className="pink">{" " + props.guestName}</span>
            ) : (
              ""
            )}
            , my name is <span className="green"> Ori Iscovici</span>, and I am
            a<span className="yellow"> FullStack Web Developer</span>, with over
            3 years of development experience working with
            <span className="yellow"> Beatman </span>
            and as a<span className="yellow"> freelance developer</span>. Most
            recent with Beatman responsible for
            <code>
              <span className="green"> Admin Systems</span>,
              <span className="green"> Automation</span>,
              <span className="green"> Cloud & MicroServices</span>,
              <span className="green"> Dekstop and Mobile websites</span>.
            </code>
            <br />
            I've been working with technologies and tools such as
            <span className="purple"> Javascript,</span>
            <span className="purple"> NodeJS,</span>
            <span className="purple"> React,</span>
            <span className="purple"> Angular,</span>
            <span className="purple"> AWS,</span>
            <span className="purple"> PHP.</span>
          </p>
        </ScrollAnimation>

        <ScrollAnimation
          duration={animationDuration}
          animateIn={animationIn}
          animateOut={animationOut}
        >
          <p>
            I am <span className="blue"> passionate</span> about{" "}
            <code>C0d3</code> and <span className="blue">experienced</span> in
            developing a variety of{" "}
            <span className="green">successful web projects</span>, using a wide{" "}
            <span className="yellow">
              <code>[</code>
              array of technologies
              <code>]</code>
            </span>
            . I'm also well versed in creating
            <span className="orange">
              {" "}
              automated marketing systems
            </span> and{" "}
            <span className="orange"> customized admin applications</span>.
          </p>
        </ScrollAnimation>
        <br />
        <ScrollAnimation
          duration={animationDuration}
          animateIn={animationIn}
          animateOut={animationOut}
        >
          <StrengthList />
        </ScrollAnimation>
      </Col>
    </Col>
  );
};

export default AboutSection;
