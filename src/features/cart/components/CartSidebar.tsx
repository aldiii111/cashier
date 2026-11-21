import { Card, CardContent } from "@/src/components/ui/card";
import { ScrollArea } from "@/src/components/ui/scroll-area";
import CartItem from "./CartItem";
import CartList from "./CartList";
import CustomerInfo from "./CustomerInfo";
import PriceBreakdown from "./PriceBreakdown";
import ProcessButton from "./ProcessButton";
import { Separator } from "@/src/components/ui/separator";
import type { CartItem as CartItemType } from "../types";

const DUMMY_CART_ITEMS: CartItemType[] = [
  {
    dish: {
      id: "dish-1",
      name: "Zesty Salmon Bowl",
      price: 14.5,
      category: "Main Dish",
      stock: "Available",
      image: "/1.webp",
    },
    quantity: 1,
    notes: "No Tomato · Extra Mayo",
  },
];

function CartSidebar() {
  return (
    <aside className="flex w-full md:w-72 lg:w-80 xl:w-96 shrink-0 flex-col justify-between overflow-hidden rounded-xl bg-popover p-3 sm:p-3.5 gap-2.5 sm:gap-3 shadow-xs">
      <div className="flex flex-col gap-2 sm:gap-2.5">
        <h2 className="text-base font-semibold">Order Detail</h2>
        <Card size="sm">
          <CardContent>
            <CustomerInfo />
          </CardContent>
        </Card>
      </div>

      <Separator />

      <ScrollArea className="flex-1 min-h-0">
        <CartList isEmpty={DUMMY_CART_ITEMS.length === 0}>
          {DUMMY_CART_ITEMS.map((item) => (
            <CartItem key={item.dish.id} item={item} />
          ))}
        </CartList>
      </ScrollArea>

      <Card size="sm" className="p-3 gap-3">
        <PriceBreakdown />
        <ProcessButton />
      </Card>
    </aside>
  );
}

export default CartSidebar;
