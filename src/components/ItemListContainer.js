import Card from "./Card";

function ItemListContainer({greeting}) {
  return (
    <div className="ItemListContainer_container">
      <h1>{greeting}</h1>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default ItemListContainer;
