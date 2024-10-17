import React, { useEffect, useState } from 'react';
import { db } from '../firebase';  // Firebase
import ProductCard from './ProductCard';

function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);
  console.log("början");

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = await db.collection('products').get();
      setProducts(productsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchProducts();
    console.log("test");
    
  }, []);

  console.log("test2")
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))
      

      
      }
    </div>

    
  );
  
}

export default ProductList;