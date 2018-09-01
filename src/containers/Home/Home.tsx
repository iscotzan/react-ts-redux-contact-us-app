import * as React from "react";
import { connect } from "react-redux";
import "./HomeStyle.css";
import ContactUsForm from "./../ContactUsForm";
import Portfolio from "./../../components/Portfolio/Portfolio";
import PortfolioHeader from "./../../components/Portfolio/PortfolioHeader/PortfolioHeader";
import AboutSection from "./../../components/AboutSection/AboutSection";
import ContactSocial from "./../../components/ContactSocial/ContactSocial";
export interface Props {
  children?: React.ReactNode;
  socialUrls: any;
  header: string;
  description: any;
  guestName?: string;
}

export interface State {}
import { Container, Row, Col } from "reactstrap";

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    // const props = propsObj;
    // const that = this;

    // const { header, socialUrls } = propsObj;
    // const { twitter, github, linkedIn, freeCodeCamp } = socialUrls;

    return (
      <div className="Portfolio-Page">
        <div className="header" id="header">
          <PortfolioHeader
            headerData={{
              name: "Ori Iscovici",
              subtitle: "FullStack Web Developer"
            }}
          />
        </div>

        <div className="about" id="about">
          <Container>
            <Row>
              <Col sm={"12"}>
                <h1>
                  <span className="pink">About</span>
                </h1>
              </Col>
            </Row>
            <Row>
              <AboutSection guestName={this.props.guestName} />
            </Row>
            <Portfolio />
            <div className="contact" id="contact">
              <Container>
                <h1 className="text-center text-light">
                  Contact
                </h1>
                <ContactSocial /> <br />
                <ContactUsForm />
              </Container>{" "}
            </div>{" "}
          </Container>
        </div>
      </div>
    );
  }
}
export function mapStateToProps(state: any) {
    const { contactUs } = state;
    //   console.log("stateToProps: ", contactUs);
    //   console.log("ze state: ", state);
    return {
      guestName: contactUs.values.name,
    };
  }
export default connect(
  mapStateToProps,
  null
)(Home);
Home;
