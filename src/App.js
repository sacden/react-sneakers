import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";
import Products from "./pages/Products";
import Favorites from "./pages/Favorites";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [search, setSearch] = useState("");

  const onChangeSearchInput = (e) => {
    setSearch(e.target.value);
  };

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

  // useEffect(() => {
  //   fetch("https://625d9d6f95cd5855d6237188.mockapi.io/items")
  //     .then((response) => response.json())
  //     .then((items) => setItems(items));
  // }, []);

  useEffect(() => {
    axios.get("https://625d9d6f95cd5855d6237188.mockapi.io/items").then((res) => setItems(res.data));
    axios.get("https://625d9d6f95cd5855d6237188.mockapi.io/cart").then((res) => setCartItems(res.data));
  }, []);

  const addToCart = (item) => {
    axios.post("https://625d9d6f95cd5855d6237188.mockapi.io/cart", item);
    setCartItems([...cartItems, item]);
  };

  const onRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    axios.delete(`https://625d9d6f95cd5855d6237188.mockapi.io/cart/${id}`);
  };

  return (
    <div className="wrapper clear">
      {isOpened && <Drawer setIsOpened={setIsOpened} cartItems={cartItems} onRemove={onRemove} />}
      <Header setIsOpened={setIsOpened} cartItems={cartItems} />
      <div className="content p-40">
        <Routes>
          <Route path="/" index element={<Products onChangeSearchInput={onChangeSearchInput} items={items} search={search} addToCart={addToCart} />}></Route>
          <Route path="favorites" index element={<Favorites />}></Route>
        </Routes>
      </div>
    </div>
  );
}
export default App;
