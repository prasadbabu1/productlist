import React from 'react';
import "./App.css";
import ProductList from './components/ProductList';

const App = () => {
  const productData = require('./components/productData.json');

  return (
    <div className="App">
      <h1 className='App1'>Product List</h1>
      <ProductList productData={productData}/>
    </div>
  );
};

export default App;
