import React, {useState} from "react";
import {Link} from "react-router-dom";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from "reactstrap";
import "./assets/css/Header.css"

const Header = props => {
  const [isOpen,
    setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const onClickLink = () => setIsOpen(false);

  const [menuItem] = useState([
    {
      id: 1,
      title: "청명이란",
      href: "/"
    }, {
      id: 2,
      title: "청원하기",
      href: "/field"
    }, {
      id: 3,
      title: "나의 청원",
      href: "/user"
    }, {
      id: 4,
      title: "자주하는 질문",
      href: "/questions"
    }
  ]);

  let _menuItem = [];
  for (let i = 0; i < menuItem.length; i++) {
    _menuItem.push(
      <NavItem key={menuItem[i].id}>
        <Link to={menuItem[i].href} className="nav-link" onClick={onClickLink}>
          {menuItem[i].title}
        </Link>
      </NavItem>
    );
  }

  return (
    <div className="Header">
      <Navbar color="light" light expand="md" className="fixed-top shadow">
        <Container>
          <Link to="/" onClick={onClickLink}>
            Logo
          </Link>
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
