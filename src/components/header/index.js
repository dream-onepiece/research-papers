import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

import './index.css';

const Header = () => {
    return <header className="header" >
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/models">Models</Link>
                        <Link className="nav-link" to="/dataset">Dataset</Link>
                        <Link className="nav-link" to="/how-to-use">How to use?</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
}

export default Header;