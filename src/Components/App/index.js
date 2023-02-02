import { Card, Space } from "antd";
import "./style.css";
import { useState } from "react";
// import { Header } from "antd/es/layout/layout";
import Header from "../Header";

const products = [
  {
    name: "Samsung galaxy S3",
    price: 12000,
    quantity: 1,
  },
  {
    name: "Tshirt",
    price: 299,
    quantity: 1,
  },
  {
    name: "Bottle",
    price: 150,
    quantity: 1,
  },
  {
    name: "Book",
    price: 300,
    quantity: 1,
  },
  {
    name: "Flower Pot",
    price: 120,
    quantity: 1,
  },
  {
    name: "Brush",
    price: 50,
    quantity: 1,
  },
];
function App() {
  const [product, setProducts] = useState(products);

  const handleQuantityAdd = (i) => {
    const data = [...product];
    data.splice(i, 1, { ...data[i], quantity: data[i].quantity + 1 });
    setProducts(data);
  };

  const handleQuantityRemove = (i) => {
    const data = [...product];
    if (data[i].quantity == 1) {
      data.splice(i, 1);
    }
    data.splice(i, 1, { ...data[i], quantity: data[i].quantity - 1 });
    setProducts(data);
  };

  const subtotal = product.reduce(
    (acc, { price = 0, quantity = 0 }) => (acc += price * quantity),
    0
  );

  const quantity = product.reduce(
    (acc, { quantity = 0 }) => (acc += quantity),
    0
  );

  return (
    <>
      <Header quantity={quantity} />
      <div className="product-container">
        {product.map((item, i) => {
          return (
            <div className="flex">
              <div className="item-list">
                <h2>{item.name}</h2>
                <h3>{item.price}</h3>
              </div>

              <div className="quantity">
                <button onClick={() => handleQuantityRemove(i)}>-</button>
                <h3>{item.quantity}</h3>
                <button onClick={() => handleQuantityAdd(i)}>+</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="subtotal-section">
        <h1>Subtotal : {subtotal}</h1>
        <h2>Total Quantity: {quantity}</h2>
      </div>
    </>
  );
}
export default App;
