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
import "./assets/css/Header.css"

const Header = props => {
  const [isOpen,
    setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  let menuItem = props.menu;
  let _menuItem = [];
  for (let i = 0; i < menuItem.length; i++) {
    _menuItem.push(
      <NavItem key={menuItem[i].id}>
        <NavLink
          onClick={(e) => {
          e.preventDefault();
          props.onChangeMode(menuItem[i].desc);
        }}>{menuItem[i].title}</NavLink>
      </NavItem>
    );
  }

  return (
    <div>
      <Navbar color="light" light expand="md" className="fixed-top">
        <Container>
          <NavbarBrand
            href="/"
            onClick={e => {
            e.preventDefault();
            props.onChangeMode("petitions");
          }}>
            Logo
          </NavbarBrand>
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
