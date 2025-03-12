import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Admin = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", image: "" });

 
  if (!user || user.email !== "admin@marketfy.com") {
    return <Navigate to="/" />;
  }

 
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  // Agregar un producto
  const addProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      alert("Todos los campos son obligatorios");
      return;
    }
    setProducts([...products, { ...newProduct, id: Date.now() }]);
    setNewProduct({ name: "", price: "", image: "" }); 
  };

  // Eliminar un producto
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1>Panel de Administración</h1>
      <p>Bienvenido, {user.name}. Aquí puedes gestionar los productos y pedidos.</p>

    
      <form onSubmit={addProduct} className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre del producto"
          value={newProduct.name}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={newProduct.price}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="image"
          placeholder="URL de la imagen"
          value={newProduct.image}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-success">Añadir Producto</button>
      </form>

     
      <h2>Lista de Productos</h2>
      <ul className="list-group">
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{product.name}</strong> - ${product.price}
              </div>
              <button className="btn btn-danger" onClick={() => deleteProduct(product.id)}>Eliminar</button>
            </li>
          ))
        ) : (
          <p>No hay productos aún.</p>
        )}
      </ul>
    </div>
  );
};

export default Admin;
