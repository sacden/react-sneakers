import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

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
    axios.get("https://625d9d6f95cd5855d6237188.mockapi.io/favorites").then((res) => setFavorites(res.data));
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://625d9d6f95cd5855d6237188.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://625d9d6f95cd5855d6237188.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://625d9d6f95cd5855d6237188.mockapi.io/favorites/${obj.id}`);
        setFavorites(favorites.filter((el) => el.id !== obj.id));
        setIsLiked(!isLiked);
      } else {
        const { data } = await axios.post("https://625d9d6f95cd5855d6237188.mockapi.io/favorites", obj);

        setFavorites((prev) => [...prev, data]);
        setIsLiked(!isLiked);
      }
    } catch (error) {
      alert("The product could not add to cart");
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}

      <Header onClickCart={() => setCartOpened(true)} cartItems={cartItems} />
      <div className="content p-40">
        <Routes>
          <Route
            path="/"
            index
            element={
              <Home items={items} searchValue={searchValue} setSearchValue={setSearchValue} onChangeSearchInput={onChangeSearchInput} onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart} />
            }
          ></Route>
          <Route path="favorites" index element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite} />}></Route>
        </Routes>
      </div>
    </div>
  );
}
export default App;
