import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Obtener la URL de la API desde la variable de entorno
    const apiUrl = process.env.REACT_APP_API_URL;

    // Lógica para obtener productos desde el backend usando axios
    axios.get(`${apiUrl}/products/list`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h2>Products in stock</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Base Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.brand}</td>
              <td>${product.basePrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;


