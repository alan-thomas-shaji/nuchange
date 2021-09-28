import React from 'react';
import ReactDom from 'react-dom';

import './style.css';


function MyApp(){                                                //component
  return (
    <div className = "productList">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}

const name = 'Product name here';
const vendor = 'Vendor name here';
const price = '$69.420';


const Product = () => {
  return <section className = "product">
    <Image />
    <ProductName />
    <VendorName />
    <Price />
  </section>
}

const Image = () => {
  return <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/best-product-3102470-2583790.png" alt="" />
}

const ProductName = () => {
  return <h3>
    {name}
  </h3>
}

const VendorName = () => {
  return <h5>
    {vendor}
  </h5>
}

const Price = () => {
  return <div className = "price">
    <h4>
    {price}
  </h4>
  </div>
}

ReactDom.render(<MyApp />,document.getElementById('root'));