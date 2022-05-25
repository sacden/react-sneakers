import Card from "../components/Card";
function Favorites({ items, onAddToFavorite }) {
  //console.log(items);
  return (
    <div>
      <div className="d-flex align-center  mb-40">
        <h1>My favorites</h1>
      </div>
      <div className="d-flex flex-wrap">{items && items.filter((el) => el.isLiked === true).map((item, index) => <Card key={index} favorited={true} onFavorite={onAddToFavorite} {...item} />)}</div>
    </div>
  );
}
export default Favorites;
