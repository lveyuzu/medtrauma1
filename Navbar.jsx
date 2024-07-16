// components/Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { Link as ScrollLink } from 'react-scroll';

const AppBarStyled = styled(AppBar)({
  backgroundColor: 'teal',  
  boxShadow: 'none',  
  position: 'sticky', 
  top: 0, 
 
});

const ToolbarStyled = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Logo = styled(Typography)({
  fontSize: '20px',
  fontWeight: 'bold',
});

const NavLinks = styled('ul')({
  display: 'flex',
  listStyleType: 'none',
  padding: 0,
  margin: 0,
});

const NavLink = styled(ScrollLink)({
  // margin: '0 10px',
  textDecoration: 'none',
  color: '#000',  
  fontSize: '16px',
  cursor: 'pointer',
  '&:hover': {
    color: '#555',  
  },
});

const Navbar = () => {
  return (
    <AppBarStyled>
      <ToolbarStyled>
        <Logo variant="h6">
          medtrauma hospital
        </Logo>
        <NavLinks>
          <li>
            <NavLink to="home" smooth={true} duration={300}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="services" smooth={true} duration={300}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="about" smooth={true} duration={300}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="contact" smooth={true} duration={300}>
              Contact
            </NavLink>
          </li>
        </NavLinks>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Navbar;
