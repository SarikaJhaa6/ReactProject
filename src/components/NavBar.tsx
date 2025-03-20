import { Link, NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useState } from "react"; // Import useState
import logo from "../images/Logocommunion.png"; // Update the path to your logo image
import "../styles/Navbar.css"; // Import external CSS

const NavBar = () => {
  const [expanded, setExpanded] = useState(false); // State to manage navbar expansion

  const handleToggle = () => {
    setExpanded(!expanded); // Toggle the expanded state
  };

  const handleLinkClick = () => {
    setExpanded(false); // Collapse the navbar when a link is clicked
  };

  return (
    <Navbar expand="lg" sticky="top" className="custom-navbar" expanded={expanded}>
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="navbar-logo">
          <img src={logo} alt="CommunionHub Logo" className="logo-img" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            {/* Nav Links */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
              end
              onClick={handleLinkClick} // Collapse on link click
            >
              Home
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
              onClick={handleLinkClick} // Collapse on link click
            >
              Events
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
              onClick={handleLinkClick} // Collapse on link click
            >
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;