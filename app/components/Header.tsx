"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import '../globals.css'
import marvel from "../../public/marvel.png";
import Image from "next/image";
import Link from 'next/link';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';



function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" >
        <NavbarBrand href="/home">
          <Image src={marvel} alt="" width={150} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link className="nav-link-hover mr-5" href="/home">
                Home
                </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link-hover" href="/personajes">Personajes</Link>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="NavNot">
                <NotificationsIcon />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="NavNot">
                <SettingsIcon />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}    

export default Header;
