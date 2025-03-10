import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-start">
            <h5>ACCESORIOS TECH</h5>
            <p>Tu tienda de confianza en tecnología.</p>
          </Col>
          <Col md={4} className="text-center">
          </Col>
          <Col md={4} className="text-center text-md-end">
            <h5>Contacto</h5>
            <p>Email: soporte@marketfly.com</p>
            <p>Tel: +56 903 556 1190</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p className="mb-0">&copy; {new Date().getFullYear()} marketfly. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
