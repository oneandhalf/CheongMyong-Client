import React, {useState} from "react";
import {Container} from "reactstrap";
import "./assets/css/ContentView.css"
import MainImg from "./MainImg";

const ContentView = props => {
  const [content,
    setContent] = useState();
  let contentMode = props.mode;

  return (
    <Container fluid={true} className="cont-fluid">
      <MainImg/>
    </Container>
  );
}

export default ContentView;
