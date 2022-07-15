import Card from "../components/Card";

function Home({ onChangeSearchInput, items, searchValue, onAddToCart, onAddToFavorite }) {
  return (
    <div>
      <div className="d-flex align-center justify-between mb-40">
        <h1>All products</h1>
        <div className="search-block d-flex">
          <img src="./react-sneakers/img/search.svg" alt="Search" />
          <input placeholder="Search..." onChange={onChangeSearchInput} />
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {items.length > 0 &&
          items
            .filter((el) => el.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => <Card key={index} onFavorite={(obj) => onAddToFavorite(obj)} onPlus={(obj) => onAddToCart(obj)} {...item} />)}
      </div>
    </div>
  );
}
export default Home;
