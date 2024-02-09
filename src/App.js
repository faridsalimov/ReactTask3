import React, { useState } from 'react';
import AddProduct from './AddProduct';
import './App.css';
import ProductList from './ProductList';
import { products as initialProducts } from './data';

function App() {
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="App">
      <div className='container-wrapper'>
        <AddProduct products={products} onAddProduct={addProduct}></AddProduct>
        <ProductList products={products}></ProductList>
      </div>
    </div>
  );
}

export default App;
