import CartItem from "./CartItem";
import type { CartItem as CartItemType } from "@/src/types";

interface CartListProps {
  items?: CartItemType[];
  onIncrease?: (dishId: string) => void;
  onDecrease?: (dishId: string) => void;
  onRemove?: (dishId: string) => void;
}

function CartList({
  items = [],
  onIncrease,
  onDecrease,
  onRemove,
}: CartListProps) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center text-muted-foreground">
        <p className="text-xs font-medium">Cart is empty</p>
        <p className="text-[11px] text-muted-foreground/80">
          Select dishes from the menu to add here.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 pr-1">
      {items.map((cartItem) => (
        <CartItem
          key={cartItem.dish.id}
          item={cartItem}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default CartList;
