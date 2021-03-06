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
                        <div className="nav-link-block">
                            <img src='./icons/code.svg' alt='' />
                            <a target="_blank" className="nav-link" href="https://github.com/humanlab/HaRT">Download Models and Code</a>
                        </div>
                        {/*<div className='nav-link-block'>
                            <img src='./icons/cube.svg' alt='' />
                            <Link className="nav-link" to="/models">Model</Link>
                        </div>*/}
                        <div className="nav-link-block">
                            <img src='./icons/database.svg' alt='' />
                            <Link className="nav-link" to="/dataset">Datasets</Link>
                        </div>
                        <div className="nav-link-block">
                            <img src='./icons/manual-book.svg' alt='' />
                            <Link className="nav-link" to="/how-to-use">How to use?</Link>
                        </div>
                        <div className="nav-link-block">
                            <img src='./icons/document.svg' alt='' />
                            <a target="_blank" className="nav-link" href="https://aclanthology.org/2022.findings-acl.52/">Read Paper</a>
                        </div>
                        <div className="nav-link-block">
                            <img src='./icons/email.svg' alt='' />
                            <Link className="nav-link" to="/contact-us">Contact us</Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
}

export default Header;