import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"

const NavBar = (): JSX.Element => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Sweet Party</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/tienda">Tienda</Nav.Link>
                        <NavDropdown title="Acerca de" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/nosotros">Nosotros</NavDropdown.Item>
                            <NavDropdown.Item href="/mision-vision">Misión y Visión</NavDropdown.Item>
                            <NavDropdown.Item href="/nuestros-valores">Nuestro valores</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar