import React, { useState } from 'react';
import {Collapse, Navbar, NavbarToggler,  NavbarBrand,  Nav,  NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom'


const menuItems=[
  {path:'/',name:'Home'},
  {path:'products',name:'Products'},
  {path:'about',name:'About'},
  {path:'contact',name:'Contact page'},
]

export const NavBar=()=> {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar  style={{background: 'linear-gradient(to bottom, #3498db, #2ecc71)'}} fixed="top" className='shadow'>
        <NavbarBrand >JF-Project</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            {menuItems.map(obj=>
                <NavItem key={obj.name}>
                  <NavLink  className="nav-link" to={obj.path} onClick={toggle}>{obj.name}</NavLink>
                </NavItem>
                  )}
          </Nav>        
        </Collapse>
      </Navbar>
  );
}

