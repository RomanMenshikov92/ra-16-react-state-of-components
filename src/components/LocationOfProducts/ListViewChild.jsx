import ShopItemChild from "./ShopItemChild";

export default function ListViewChild(props) {
  const { cards } = props;

  return (
    <div className="view-list">
      {cards.map((card, index) => (
        <ShopItemChild key={index} card={card} />
      ))}
    </div>
  );
}
