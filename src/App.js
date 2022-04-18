import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // const [items, setItems] = useState([
  //   { title: "Sneakers for men Nike Blazer Mid Suede", price: 1399, imageUrl: "/img/products/1.jpg" },
  //   { title: "Sneakers for men Nike Air Max 270", price: 1560, imageUrl: "/img/products/2.jpg" },
  //   { title: "Sneakers for men Blazer Mid Suede", price: 849, imageUrl: "/img/products/3.jpg" },
  //   { title: "Sneakers for men Puma X Aka Boku Future Rider", price: 899, imageUrl: "/img/products/4.jpg" },
  //   { title: "Sneakers for men Under Armour Curry 8", price: 1209, imageUrl: "/img/products/5.jpg" },
  //   { title: "Sneakers for men Nike Kyrie 7", price: 699, imageUrl: "/img/products/6.jpg" },
  //   { title: "Sneakers for men Jordan air Jordan 11", price: 1499, imageUrl: "/img/products/7.jpg" },
  //   { title: "Sneakers for men Nike Lebron XVIII", price: 899, imageUrl: "/img/products/8.jpg" },
  // ]);

  useEffect(() => {
    fetch("https://625d9d6f95cd5855d6237188.mockapi.io/items")
      .then((response) => response.json())
      .then((items) => setItems(items));
  }, []);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="wrapper clear">
      {isOpened && <Drawer setIsOpened={setIsOpened} cartItems={cartItems} />}

      <Header setIsOpened={setIsOpened} cartItems={cartItems} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All products</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">{items && items.map((product) => <Card product={product} addToCart={addToCart} key={product.id} />)}</div>
      </div>
    </div>
  );
}
export default App;
