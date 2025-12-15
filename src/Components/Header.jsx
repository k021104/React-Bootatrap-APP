import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

function BasicExample() {
    return (
        <Navbar expand="lg" className="navbar-transparent">
            <Container className='py-3' style={{ borderBottom: "2px solid #fff" }}>
                <Navbar.Brand href="#home">
                    <h1 style={{ fontWeight: '400' }}>iSTUDIO</h1>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" style={{ fontSize: '18px' }}>
                        <Nav.Link className='nav-link' href="#home" active>Home</Nav.Link>
                        <Nav.Link className='nav-link' href="#about">About</Nav.Link>
                        <Nav.Link className='nav-link' href="#services">Services</Nav.Link>
                        <Nav.Link className='nav-link' href="#projects">Projects</Nav.Link>
                        <Nav.Link className='nav-link' href="#contact">Contact</Nav.Link>
                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default BasicExample;

// https://themewagon.github.io/iStudio/