import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from 'reactstrap';

import { Link } from "react-router-dom";
import SignInModal from './sign-in-modal';
import SignUpModal from './sign-up-modal';
import { auth } from '../../../firebase/firebase.util';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar color="dark" dark expand="md">
        <Container>
          <Link className="navbar-brand" to="/">Rev Store</Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Products
                </DropdownToggle>
                <DropdownMenu right>
                  {
                    props.productCategories.map(({id, title}) => (
                        <DropdownItem key={id}> { title.toUpperCase() } </DropdownItem>
                      )
                    )
                  }
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link className="nav-link" to="/about">About Us</Link>
              </NavItem>
            </Nav>
              { props.currentUser?
                <Nav navbar>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      {props.currentUser.displayName}
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <div onClick={() => auth.signOut()}>Sign Out</div>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              :
                <Nav navbar>
                  <NavItem>
                    <SignUpModal buttonLabel="Sign Up"/>
                  </NavItem>
                  <NavItem>
                    <SignInModal buttonLabel="Sign In" />
                  </NavItem>
                </Nav>
              }
          </Collapse>
        </Container>
      </Navbar>
  );
}

export default Header;