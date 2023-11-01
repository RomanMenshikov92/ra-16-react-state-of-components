export default function ShopItemChild(props) {
  const { card } = props;

  return (
    <div className="item">
      <img className="item-img" src={card.img} alt={card.name}></img>
      <h3 className="item-name">{card.name}</h3>
      <span className="item-color">{card.color}</span>
      <div className="item-price">${card.price}</div>
      <button className="item-btn">Add to cart</button>
    </div>
  );
}
