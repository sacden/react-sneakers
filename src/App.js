import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);

  // const [items, setItems] = useState([
  //   { title: "Sneakers for men Nike Blazer Mid Suede", price: 1399, imageUrl: "./img//products/1.jpg" },
  //   { title: "Sneakers for men Nike Air Max 270", price: 1560, imageUrl: "./img//products/2.jpg" },
  //   { title: "Sneakers for men Blazer Mid Suede", price: 849, imageUrl: "./img//products/3.jpg" },
  //   { title: "Sneakers for men Puma X Aka Boku Future Rider", price: 899, imageUrl: "./img//products/4.jpg" },
  //   { title: "Sneakers for men Under Armour Curry 8", price: 1209, imageUrl: "./img//products/5.jpg" },
  //   { title: "Sneakers for men Nike Kyrie 7", price: 699, imageUrl: "./img//products/6.jpg" },
  //   { title: "Sneakers for men Jordan air Jordan 11", price: 1499, imageUrl: "./img//products/7.jpg" },
  //   { title: "Sneakers for men Nike Lebron XVIII", price: 899, imageUrl: "./img//products/8.jpg" },
  // ]);

  // useEffect(() => {
  //   fetch("https://625d9d6f95cd5855d6237188.mockapi.io/items")
  //     .then((response) => response.json())
  //     .then((items) => setItems(items));
  // }, []);

  useEffect(() => {
    axios.get("https://625d9d6f95cd5855d6237188.mockapi.io/items").then((res) => setItems(res.data));
  }, []);

  const onAddToCart = async (obj) => {
    try {
      if (items.find((item) => Number(item.id) === Number(obj.id) && obj.isFavorited === false)) {
        // setItems((prev) => prev.map((item) => (Number(item.id) === Number(obj.id) ? { ...item, isFavorited: true } : item)));
        axios
          .put(`https://625d9d6f95cd5855d6237188.mockapi.io/items/${Number(obj.id)}`, { ...obj, isFavorited: true })
          .then((res) => setItems((prev) => prev.map((item) => (Number(item.id) === Number(obj.id) ? res.data : item))));
      }
      if (items.find((item) => Number(item.id) === Number(obj.id) && obj.isFavorited === true)) {
        // setItems((prev) => prev.map((item) => (Number(item.id) === Number(obj.id) ? { ...item, isFavorited: false } : item)));
        axios
          .put(`https://625d9d6f95cd5855d6237188.mockapi.io/items/${Number(obj.id)}`, { ...obj, isFavorited: false })
          .then((res) => setItems((prev) => prev.map((item) => (Number(item.id) === Number(obj.id) ? res.data : item))));
      }
    } catch (error) {
      alert(error);
    }
  };

  const onRemoveItem = (obj) => {
    axios.put(`https://625d9d6f95cd5855d6237188.mockapi.io/items/${obj.id}`, { ...obj, isFavorited: false });
    setItems((prev) => prev.filter((item) => item.id !== obj.id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (items.find((itemsObj) => itemsObj.uid === obj.uid && obj.isLiked === false)) {
        //setItems((prev) => prev.map((item) => (Number(item.id) === Number(obj.id) ? { ...item, isLiked: true } : item)));
        axios
          .put(`https://625d9d6f95cd5855d6237188.mockapi.io/items/${obj.id}`, { ...obj, isLiked: true })
          .then((res) => setItems((prev) => prev.map((item) => (Number(item.id) === Number(obj.id) ? res.data : item))));
      }
      if (items.find((itemsObj) => itemsObj.uid === obj.uid && obj.isLiked === true)) {
        //setItems((prev) => prev.map((item) => (Number(item.id) === Number(obj.id) ? { ...item, isLiked: false } : item)));
        axios
          .put(`https://625d9d6f95cd5855d6237188.mockapi.io/items/${obj.id}`, { ...obj, isLiked: false })
          .then((res) => setItems((prev) => prev.map((item) => (Number(item.id) === Number(obj.id) ? res.data : item))));
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
      {cartOpened && <Drawer items={items} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}

      <Header onClickCart={() => setCartOpened(true)} cartItems={items} />
      <div className="content p-40">
        <Routes>
          <Route
            path="/"
            index
            element={
              <Home items={items} searchValue={searchValue} setSearchValue={setSearchValue} onChangeSearchInput={onChangeSearchInput} onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart} />
            }
          ></Route>
          <Route path="favorites" index element={<Favorites items={items} onAddToFavorite={onAddToFavorite} />}></Route>
        </Routes>
      </div>
    </div>
  );
}
export default App;
