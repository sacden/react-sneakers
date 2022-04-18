import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://625d9d6f95cd5855d6237188.mockapi.io/items")
      .then((response) => response.json())
      .then((items) => setItems(items));
  }, []);
  console.log(items);

  return (
    <div className="wrapper clear">
      {isOpened && <Drawer setIsOpened={setIsOpened} />}

      <Header setIsOpened={setIsOpened} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All products</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">{items && items.map((product) => <Card product={product} />)}</div>
      </div>
    </div>
  );
}
export default App;
