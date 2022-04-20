import Card from "../components/Card";

function Products({ onChangeSearchInput, items, search, addToCart }) {
  return (
    <div>
      <div className="d-flex align-center justify-between mb-40">
        <h1>All products</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input placeholder="Search..." onChange={onChangeSearchInput} />
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {items && items.filter((el) => el.title.toLowerCase().includes(search.toLowerCase())).map((product) => <Card product={product} addToCart={addToCart} key={product.id} />)}
      </div>
    </div>
  );
}
export default Products;
