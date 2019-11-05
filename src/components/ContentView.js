import React from "react";
import {Container} from "reactstrap";
import "./assets/css/ContentView.css"
import MainImg from "./MainImg";
import Introduce from "./Introduce";
import PetitionsView from "./PetitionsView";

const ContentView = props => {
  let contentMode = props.mode;
  let _content = [];

  switch (contentMode) {
    case "MyPage":

      break;
    case "FAQ":

      break;
    case "introduce":
      _content.push(<MainImg key={"1"} />, <Introduce key={"2"} />);
      break;
    default:
      _content.push(<MainImg key={"1"}/>, <PetitionsView key={"2"}/>);
      break;
  }

  return (
    <Container fluid={true} className="cont-fluid">
      {_content}
    </Container>
  );
}

export default ContentView;
