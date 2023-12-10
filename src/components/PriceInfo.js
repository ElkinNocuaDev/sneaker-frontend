import React, { useEffect, useState } from 'react';
import axios from 'axios';


const PriceInfo = ({ user_id, nombre_producto }) => {
  const [priceInfo, setPriceInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/price/${user_id}/${encodeURIComponent(nombre_producto)}`);
        console.log('Response from API:', response.data);
        setPriceInfo(response.data);
      } catch (error) {
        console.error('Error fetching price info:', error);
      }
    };
    

    fetchData();
  }, [user_id, nombre_producto]);

  // Verificar el contenido de priceInfo en la consola
  // console.log('PriceInfo:', priceInfo);

  return (
    <div>
       <h2>Price Information</h2>
       <p>Product: {nombre_producto}</p>
       <p>User ID: {user_id}</p>
       {priceInfo.specialPrices && priceInfo.specialPrices[user_id] !== undefined ? (
         <p>
           Special Price: {priceInfo.specialPrices[user_id][nombre_producto]}
         </p>
       ) : (
         <p>
           Base Price: {priceInfo.price !== undefined ? priceInfo.price : 'N/A'}
         </p>
       )}
    </div>
   );
  
  
};

export default PriceInfo;

