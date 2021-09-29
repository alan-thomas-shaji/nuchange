import React from 'react';
import ReactDom from 'react-dom';

import './style.css';


function MyApp(){                                                
  return (
    <section>
      <TopBar />
      <ProductList />
    </section>
  );
}

function TopBar() {
  return <div className = "top-bar">
    <h1>
      Couldn't make a proper nav bar in time so...
    </h1>
  </div>
} 

//<Product name = "Product Name" vendor = "Vendor name here" price = {69.420} availability = {2}/>

function ProductList() {
  var jsonText =
    '[{ "name":"Potato", "id":1, "price":30, "available":1, "vendor":"Himachal Pvt Ltd", "category":"Vegetables" }, { "name":"Banana", "id":2, "price":50, "available":1,"category": "Fruits","vendor": "Organic farms"}, { "name":"Drumsticks", "id":3, "price":20, "available":0, "category":"Vegetables", "vendor":"Mallikarjuna farms"}, { "name":"Orange", "id":4, "price":25, "available":1, "vendor":"Nagpur farms", "category":"Fruits"}]';
  var products = JSON.parse(jsonText);
  const item = products.map((product) => (
    <Product
      name={product.name.toString()}
      vendor={product.vendor}
      availability={product.available >= 1 ? product.available : "Not in Stock"}
      price={product.price}
    />
  ));

  return <div className="productList">{item}</div>;
}



const Product = (props) => {
  return <section className = "product">
    <Image />
    <ProductName  name = {props.name}/>
    <VendorName vendor = {props.vendor}/>
    <Availability availability = {props.availability}/>
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

const Availability = (props) => {
  return <h4>
    Stock: {props.availability}
  </h4>
}

const Price = (props) => {
  return <div className = "price">
    <h4>
    $ {props.price}
  </h4>
  </div>
}

ReactDom.render(<MyApp />,document.getElementById('root'));