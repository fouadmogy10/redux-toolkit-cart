import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
function NavBar() {
    const cart = useSelector((state) => state.cart);
  return (
    <Navbar bg="dark" variant="dark fw-bolder" expand="lg">
      <Container>
        <Navbar.Brand href="#home">cart RTQ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/cart">cart -{cart.length}</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;