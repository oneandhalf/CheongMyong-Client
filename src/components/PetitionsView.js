import React, {useState} from "react";
import {Nav, NavItem, NavLink} from "reactstrap";
import classNames from "classnames";
import "./assets/css/PetitionsView.css";
import FieldView from "./FieldView"
import RecommendView from "./RecommendView";
import ReplyView from "./ReplyView";

const PetitionsView = props => {
  const [pMode,
    setPMode] = useState("Field");

  const [pMenu] = useState([
    {
      id: 1,
      title: "분야별 청원",
      desc: "Field"
    }, {
      id: 2,
      title: "추천순 청원",
      desc: "Recommend"
    }, {
      id: 3,
      title: "답변된 청원",
      desc: "Reply"
    }
  ]);

  const [pMenuOn,
    setPMenuOn] = useState([true, false, false]);

  let bList = [false, false, false];

  let _pMenu = [];
  for (let i = 0; i < pMenu.length; i++) {
    _pMenu.push(
      <NavItem
        key={pMenu[i].id}
        className={classNames("petitions-menubar", {on: pMenuOn[i]})}>
        <NavLink
          onClick={e => {
          e.preventDefault();
          bList.splice(i, 1, true);
          setPMode(pMenu[i].desc);
          setPMenuOn(bList);
        }}>
          {pMenu[i].title}
        </NavLink>
      </NavItem>
    );
  }

  let _pView = [];
  switch (pMode) {
    case "Recommend":
      _pView.push(<RecommendView/>);
      break;
    case "Reply":
      _pView.push(<ReplyView/>);
      break;
    default:
      _pView.push(<FieldView/>);
      break;
  }

  return (
    <div className="PetitionsView">
      <Nav>
        {_pMenu}
      </Nav>
      {_pView}
    </div>
  );
}

export default PetitionsView;
