import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

import './index.css';

const Header = () => {
    return <header className="header" >
        <Navbar bg="light" expand="lg">
            <Container>
                <span className="icon-space" >&#x2764;</span>
                <Navbar.Brand href="/">
                    HaRT
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/models">Models</Link>
                        <Link className="nav-link" to="/dataset">Dataset</Link>
                        <Link className="nav-link" to="/how-to-use">How to use?</Link>
                        <Link className="nav-link" to="/contact-us">Contact Us</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
}

export default Header;