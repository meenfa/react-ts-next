import type { Momo } from "../types";
import { MomoCard } from "./MomoCard";


interface MomoListProps {
  items: Momo[];
}
export function MomoList({ items }: MomoListProps) {
  return (
    <div>

    {items.map((momo)=>( //-momo is just a label to make the code readable.we ccan keep it anything
        <MomoCard
            key={momo.id}
            name={momo.name}
            price={momo.price}
            isSpecial={momo.price >30}
         />
    ))}
    </div>
  );
}
