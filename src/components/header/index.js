import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
    return <header className="header" >
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">NLP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">About</Nav.Link>
                        <Nav.Link href="#link">Description</Nav.Link>
                        <Nav.Link href="#model">Model</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
}

export default Header;