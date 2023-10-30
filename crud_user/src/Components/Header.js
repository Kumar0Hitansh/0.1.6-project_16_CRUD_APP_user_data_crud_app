import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="bg-body-tertiary p-0" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home"><h3>User Info CRUD</h3></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          
          <NavLink to={'/'} style={{textDecoration:'none' , fontWeight:'bolder' }} className='mx-4'>Home</NavLink>
          <NavLink to={'/about'} style={{textDecoration:'none' , fontWeight:'bolder'}} className='mx-4'>About This CRUD</NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header