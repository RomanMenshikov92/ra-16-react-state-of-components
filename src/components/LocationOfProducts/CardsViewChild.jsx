import ShopCardChild from "./ShopCardChild";

export default function CardsViewChild(props) {
  const { cards } = props;

  return (
    <div className="view-module">
      {cards.map((card, index) => (
        <ShopCardChild key={index} card={card} />
      ))}
    </div>
  );
}
