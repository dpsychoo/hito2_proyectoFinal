import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProductCard = ({ product, onAddToCart, hideAddToCart = false }) => {
  const navigate = useNavigate();

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Img 
        variant="top" 
        src={product.image} 
        alt={product.title}
        style={{ height: "200px", objectFit: "contain" }} 
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <h4 className="text-primary">${product.price}</h4>
        <div className="d-flex justify-content-between">
          {!hideAddToCart && (
            <Button 
              variant="primary" 
              onClick={() => {
                onAddToCart(product);
                toast.success(`Añadido al carrito: ${product.title}`);
              }}
            >
              Añadir al Carrito
            </Button>
          )}
          <Button variant="secondary" onClick={() => navigate(`/producto/${product.id}`)}>
            Ver Detalle
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard ;
