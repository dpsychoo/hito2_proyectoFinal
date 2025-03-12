import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt, faSignInAlt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import logo from "../assets/img/logo_marketfy.png";
import "./Navbar.css";
const Navigation = () => {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img 
            src={logo} 
            alt="Logo" 
            width="120" 
            height="58" 
            className="d-inline-block align-top me-2"
          />
          ACCESORIOS TECH
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/ofertas">Ofertas</Nav.Link>
            <Nav.Link as={Link} to="/carrito">
              <FontAwesomeIcon icon={faShoppingCart} /> Carrito ({cart.reduce((acc, item) => acc + item.quantity, 0)})
            </Nav.Link>
          </Nav>

          <Nav>
            {user ? (
              <>
                {user.role === "admin" && (
                  <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                )}
                <Nav.Link as={Link} to="/perfil">
                  <FontAwesomeIcon icon={faUser} /> <strong>{user.name}</strong>
                </Nav.Link>
                <Nav.Link onClick={logout} style={{ cursor: "pointer" }}>
                  <FontAwesomeIcon icon={faSignOutAlt} /> Salir
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/registrarse">
                  <FontAwesomeIcon icon={faUser} /> Registrarse
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  <FontAwesomeIcon icon={faSignInAlt} /> Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
