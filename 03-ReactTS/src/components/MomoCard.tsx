interface MomoCardProp{
    name:string;
    price: number;
    isSpecial?:boolean;
}

export function MomoCard(
    { name, price, isSpecial = false }:MomoCardProp) {
  return (
    <article>
      <h2>{name}
        {isSpecial && <span>❤</span>}
      </h2>
      <p>{price}</p>

    </article>
  );
}
