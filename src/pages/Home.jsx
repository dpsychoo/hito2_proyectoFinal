import React, { useContext, useState } from "react";
import { Container, Row, Col, Button, Carousel, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const navigate = useNavigate();
  const { products } = useContext(ProductContext);
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    { name: "Más Productos", path: "Todos" },
    { name: "Audífonos", path: "Audífonos" },
    { name: "Consolas", path: "Consolas" },
    { name: "Smartwatches", path: "Smartwatches" },
    { name: "Tablets", path: "Tablets" }
  ];

  return (
    <Container fluid className="app-container">
      { }
      <Row className="home-content">
        <Col md={6} className="carousel-section d-flex justify-content-center align-items-center">
          <Carousel
            className="carousel-container"
            activeIndex={activeIndex}
            onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
          >
            {products.slice(0, 3).map((product, index) => (
              <Carousel.Item key={index}>
                <div className="carousel-image-container">
                  <img 
                    className="carousel-image" 
                    src={product.image} 
                    alt={product.title}
                    onError={(e) => e.target.src = "/img/img_noDisp.png"}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>

        { }
        <Col md={6} className="info-section d-flex justify-content-center align-items-center">
          {products.length > 0 && products[activeIndex] ? (
            <div className="product-info-container">
              <h1 className="product-title">{products[activeIndex].title}</h1>
              <p className="product-description">{products[activeIndex].description}</p>
              <h2 className="product-price">${products[activeIndex].price.toLocaleString()}</h2>
              <Button variant="primary" className="product-button" onClick={() => navigate('/ofertas')}>
                Ver Más
              </Button>
            </div>
          ) : (
            <p>Cargando productos...</p>
          )}
        </Col>
      </Row>

      {/* S. CAT */}
      <Container fluid className="category-section mt-4">
        <Row>
          <Col>
            <Nav className="category-nav d-flex justify-content-center">
              {categories.map((category, index) => (
                <Nav.Item key={index}>
                  <Nav.Link className="category-item" onClick={() => navigate(`/ofertas?categoria=${category.path}`)}>
                    {category.name}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
        </Row>
      </Container>

      {}
      <Container fluid className="hot-sale-section mt-5">
        <Row>
          <Col>
            <h2 className="hot-sale-title text-center">PRODUCTOS HOT SALE</h2>
            <Row className="justify-content-center">
              {products.slice(0, 3).map((product) => (
                <Col key={product.id} md={4} className="mb-4">
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      {}
      <footer className="footer mt-auto">
        <Container>
          <Row>
            <Col className="text-center py-3">
              <p>Mi MarketPlace</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </Container>
  );
};

export default Home;
