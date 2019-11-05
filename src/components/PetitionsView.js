import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./assets/css/PetitionsView.css";

const PetitionsView = props => {
  const [petitionsMenu] = useState([
    {
      id: 1,
      title: "분야별 청원",
      desc: "Field"
    },
    {
      id: 2,
      title: "추천순 청원",
      desc: "Recommend"
    },
    {
      id: 3,
      title: "답변된 청원",
      desc: "Reply"
    }
  ]);

  let _petitionsMenu = [];

  for (let i = 0; i < petitionsMenu.length; i++) {
    _petitionsMenu.push(
      <NavItem key={petitionsMenu[i].id} className="petitions-menubar">
        <NavLink>{petitionsMenu[i].title}</NavLink>
      </NavItem>
    );
  }
  return (
    <div className="PetitionsView">
      <Nav>
        {_petitionsMenu}
      </Nav>
    </div>
  );
}

export default PetitionsView;
