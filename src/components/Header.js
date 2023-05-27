import React from 'react';
import { useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export const Header=()=> {
  const[activeLink,setActiveLink]=useState('home');
  const[scrolled,setScrolled]=useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled? "scrolled":""}>
    <Container>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === "home" ? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#education" className={activeLink === "education" ? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('education')}>Education</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === "skills" ? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#contact" className={activeLink === "contact" ? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('contact')}>Connect With Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
