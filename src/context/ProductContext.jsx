import React, { createContext, useState, useEffect } from "react";
import productos from "../data/productos.json";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    try {
      if (productos.length > 0) {
        setProducts(productos);
        const uniqueCategories = [...new Set(productos.map((product) => product.category))];
        setCategories(uniqueCategories);
      } else {
        console.warn("No se encontraron productos en productos.json");
      }
    } catch (error) {
      console.error("Error al cargar los productos:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, categories }}>
      {children}
    </ProductContext.Provider>
  );
};
