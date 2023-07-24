import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const NavbarContainer = styled.nav`
  background-color: #222;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky; /* Dodajemy "sticky" aby ustawić jako nagłówek przylegający */
  top: 0; /* Ustawiamy na górze ekranu */
  z-index: 999; /* Dodajemy wartość z-index, aby był na wierzchu innych elementów */
`;

export const NavLogo = styled.a`

  align-items: center;
  margin-right: 20px;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media (max-width: 768px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
    background-color: #333;
    position: absolute;
    top: 50px;
    left: 0;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const NavItem = styled.li`
  margin-right: 20px;
  position: relative;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ${({ isServicesNavItem }) =>
    isServicesNavItem &&
    `
    @media (min-width: 769px) {
      position: relative;
      cursor: pointer;

      &:hover {
        ${SubMenu} {
          display: block;
        }
      }
    }
  `}
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ef476f;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const MobileMenuIcon = styled(FaBars)`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    font-size: 24px;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'block' : 'none')};
    background-color: #333;
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const MobileMenuLink = styled.a`
  display: block;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ef476f;
  }
`;

export const SubMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #444;
  padding: 10px;
  display: none;
  z-index: 1;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    position: static;
    background-color: transparent;
    padding: 0;
    display: ${({ isSubMenuOpen }) => (isSubMenuOpen ? 'block' : 'none')};
  }
`;

export const SubMenuItem = styled.li`
  margin-bottom: 5px;
  list-style: none;
`;

export const SubMenuLink = styled.a`
  text-decoration: none;
  color: #fff;
  display: block;
  font-size: 16px;
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;