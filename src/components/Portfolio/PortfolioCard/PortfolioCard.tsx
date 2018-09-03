import * as React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

export interface ProjectDataProps {
  link: string;
  imageSrc: string;
  imageAlt: string;
  Title: string;
  TextContent: string;
}

export interface PortfolioCardProps {
  projectData: ProjectDataProps;
}
const imageLoaded = () => {
  console.log('img loaded!');
}
const PorfolioCard = (props: PortfolioCardProps) => {
  const { link, imageSrc, imageAlt, Title, TextContent } = props.projectData;
  return (
    <Card className={"lightBackground hover-shadow glassy-border"}>
      <a href={link} target="_blank">
        <CardImg
          className="card-img-top img-fluid"
          src={imageSrc}
          alt={imageAlt}
          onLoad={()=> {imageLoaded()}}
        />
        <CardBody>
          <CardTitle>{Title}</CardTitle>
          <CardText className={"text-info"}>{TextContent}</CardText>
        </CardBody>
      </a>
    </Card>
  );
};
export default PorfolioCard;
