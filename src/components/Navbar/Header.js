import React, {useState} from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "./Header.css"

const Header = props => {
  const [isOpen,
    setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [menuItem] = useState([
    {
      id: 1,
      title: "청명이란",
      href: "/"
    }, {
      id: 2,
      title: "청원하기",
      href: "/"
    }, {
      id: 3,
      title: "나의 청원",
      href: "/"
    }, {
      id: 4,
      title: "자주하는 질문",
      href: "/"
    }
  ]);

  let _menuItem = [];
  for (let i = 0; i < menuItem.length; i++) {
    _menuItem.push(
      <NavItem key={menuItem[i].id}>
        <NavLink href={menuItem[i].href}>{menuItem[i].title}</NavLink>
      </NavItem>
    );
  }

  return (
    <div>
      <Navbar color="light" light expand="md" className="fixed-top">
        <Container>
          <NavbarBrand href="/">Logo</NavbarBrand>
          <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {_menuItem}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
