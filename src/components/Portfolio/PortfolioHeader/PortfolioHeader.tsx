import * as React from "react";
import { Container, Row, Col } from "reactstrap";

export interface PortfolioHeaderDataProps {
  name: string;
  subtitle: string;
}

export interface PortfolioHeaderProps {
  headerData: PortfolioHeaderDataProps;
}

const PorfolioHeader = (props: PortfolioHeaderProps) => {
  const { name, subtitle } = props.headerData;
  return (
    <Container>
      <Row>
        <Col xs={"12"}>
          <h1>
            <i className="fas fa-code" />
          </h1>
          <h1>{name}</h1>
          <h3>{subtitle}</h3>
        </Col>
      </Row>
    </Container>
  );
};
export default PorfolioHeader;
