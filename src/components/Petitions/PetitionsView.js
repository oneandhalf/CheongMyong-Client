import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {Nav, NavItem} from "reactstrap";
import classNames from "classnames";
import "../assets/css/PetitionsView.css";
import MainImg from "../MainImg";

const PetitionsView = props => {
  const [pMenu] = useState([
    {
      id: 1,
      title: "분야별 청원",
      href: "/field"
    }, {
      id: 2,
      title: "추천순 청원",
      href: "/recommend"
    }, {
      id: 3,
      title: "답변된 청원",
      href: "/reply"
    }
  ]);

  let {pMenuID} = props;
  let bList = [false, false, false];
  bList.splice(pMenuID, 1, true);

  let _pMenu = [];
  for (let i = 0; i < pMenu.length; i++) {
    _pMenu.push(
      <NavItem
        key={pMenu[i].id}
        className={classNames("petitions-menubar in-left", {on: bList[i]})}>
        <NavLink
          to={pMenu[i].href}
          className="nav-link"
          activeStyle={{
          color: "#003366"
        }}>
          {pMenu[i].title}
        </NavLink>
      </NavItem>
    );
  }

  return (
    <div className="PetitionsView">
      <MainImg/>
      <Nav>{_pMenu}</Nav>
    </div>
  );
}

export default PetitionsView;
