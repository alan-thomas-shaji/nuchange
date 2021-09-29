import React from 'react';
import ReactDom from 'react-dom';

import './style.css';

var jsonText =
    '[{ "name":"Potato", "id":1, "price":30, "available":1, "vendor":"Himachal Pvt Ltd", "category":"Vegetables" }, { "name":"Banana", "id":2, "price":50, "available":1,"category": "Fruits","vendor": "Organic farms"}, { "name":"Drumsticks", "id":3, "price":20, "available":0, "category":"Vegetables", "vendor":"Mallikarjuna farms"}, { "name":"Orange", "id":4, "price":25, "available":1, "vendor":"Nagpur farms", "category":"Fruits"}]';
var products = JSON.parse(jsonText);


function MyApp(){                                                //component
  return (
    <div className = "productList">
      <Product name = "Product Name" vendor = "Vendor name here" price = {69.420}/>
      <Product name = "Product Name" vendor = "Vendor name here" price = {69.420}/>
      <Product name = "Product Name" vendor = "Vendor name here" price = {69.420}/>
      <Product name = "Product Name" vendor = "Vendor name here" price = {69.420}/>
      <Product name = "Product Name" vendor = "Vendor name here" price = {69.420}/>
      <Product name = "Product Name" vendor = "Vendor name here" price = {69.420}/>
      <Product name = "Product Name" vendor = "Vendor name here" price = {69.420}/>
      <Product name = "Product Name" vendor = "Vendor name here" price = {69.420}/>
      <Product name = "Product Name" vendor = "Vendor name here" price = {69.420}/>
    </div>
  );
}



const Product = (props) => {
  return <section className = "product">
    <Image />
    <ProductName  name = {props.name}/>
    <VendorName vendor = {props.vendor}/>
    <Price price = {props.price}/>
  </section>
}

const Image = () => {
  return <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/best-product-3102470-2583790.png" alt="" />
}

const ProductName = (props) => {
  return <h3>
    {props.name}
  </h3>
}

const VendorName = (props) => {
  return <h5>
    {props.vendor}
  </h5>
}

const Price = (props) => {
  return <div className = "price">
    <h4>
    $ {props.price}
  </h4>
  </div>
}

ReactDom.render(<MyApp />,document.getElementById('root'));