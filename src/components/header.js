import React, { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavItem from "@material-tailwind/react/NavItem";
import NavLink from "@material-tailwind/react/NavLink";
import Icon from "@material-tailwind/react/Icon";

// const Header = ({ siteTitle }) => (
//   <header>
//
//
//   </header>
// )
//
// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }
//
// Header.defaultProps = {
//   siteTitle: ``,
// }
//
// export default Header

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Navbar color="lightBlue">
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarBrand>
            <div className="text-4xl">Welcome to tossy site!</div></NavbarBrand>
          <NavbarToggler
            color="white"
            onClick={() => setOpenMenu(!openMenu)}
            ripple="light"
          />
        </NavbarWrapper>

        <NavbarCollapse open={openMenu}>
          <Nav>
            <NavItem active="light" ripple="light">
              <Icon name="language" size="xl" />
              Discover
            </NavItem>
            <NavLink href="#navbar" ripple="light">
              <Icon name="account_circle" size="xl" />
              Profile
            </NavLink>
            <NavItem ripple="light">
              <Icon name="settings" size="xl" />
              Settings
            </NavItem>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}