import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Producto = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <Container className="mt-5 text-center"><h2>Producto no encontrado</h2></Container>;
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={product.image} style={{ height: "300px", objectFit: "contain" }} />
          </Card>
        </Col>
        <Col md={6}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3 className="text-primary">${product.price.toLocaleString()}</h3>
          <Button variant="primary">Añadir al Carrito</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Producto;
