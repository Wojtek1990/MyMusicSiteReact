import React, { useState } from 'react';
import {
  NavbarContainer,
  NavLogo,
  NavList,
  NavItem,
  NavLink,
  MobileMenuIcon,
  MobileMenu,
  MobileMenuLink,
  SubMenu,
  SubMenuItem,
  SubMenuLink,
} from './NavbarStyles';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const handleServicesToggle = () => {
    setIsServicesOpen((prevIsServicesOpen) => !prevIsServicesOpen);
  };

  return (
    <NavbarContainer>
      <MobileMenuIcon onClick={handleMenuToggle} />
      <NavList isMenuOpen={isMenuOpen}>
        <NavItem>
          <NavLink href="/">Strona główna</NavLink>
        </NavItem>
        <NavItem isServicesNavItem>
          <NavLink href="#" onClick={handleServicesToggle}>
            Usługi
          </NavLink>
          <SubMenu isSubMenuOpen={isServicesOpen}>
            <SubMenuItem>
              <SubMenuLink href="lessons">Lekcje muzyki</SubMenuLink>
            </SubMenuItem>
            <SubMenuItem>
              <SubMenuLink href="music">Oprawa muzyczna eventów</SubMenuLink>
            </SubMenuItem>
            <SubMenuItem>
              <SubMenuLink href="youngs">Umuzykalnienie dzieci w wieku przedszkolnym</SubMenuLink>
            </SubMenuItem>
          </SubMenu>
        </NavItem>
        <NavItem>
          <NavLink href="about">O nas</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="gallery">Galeria</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="contact">Kontakt</NavLink>
        </NavItem>
      </NavList>
      <MobileMenu isMenuOpen={isMenuOpen}>
        <MobileMenuLink href="/">Strona główna</MobileMenuLink>
        <MobileMenuLink href="#"  onClick={handleServicesToggle}>
          Usługi
        </MobileMenuLink>
        <SubMenu isSubMenuOpen={isServicesOpen}>
          <SubMenuItem>
            <SubMenuLink href="lessons">Lekcje muzyki</SubMenuLink>
          </SubMenuItem>
          <SubMenuItem>
            <SubMenuLink href="music">Oprawa muzyczna eventów</SubMenuLink>
          </SubMenuItem>
          <SubMenuItem>
            <SubMenuLink href="youngs">Umuzykalnienie dzieci w wieku przedszkolnym</SubMenuLink>
          </SubMenuItem>
        </SubMenu>
        <MobileMenuLink href="about">O nas</MobileMenuLink>
        <MobileMenuLink href="gallery">Galeria</MobileMenuLink>

        <MobileMenuLink href="contact">Kontakt</MobileMenuLink>
      </MobileMenu>
      {/* <NavLogo>Nauka gry na instrumentach w Kotlinie Kłodzkiej</NavLogo> */}
    </NavbarContainer>
  );
};

export default Navbar;