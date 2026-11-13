import { Card, CardContent } from "@/src/components/ui/card";
import { ScrollArea } from "@/src/components/ui/scroll-area";
import CartList from "./CartList";
import CustomerInfo from "./CustomerInfo";
import PriceBreakdown from "./CartSummary/PriceBreakdown";
import ProcessButton from "./CartSummary/ProcessButton";
import { Separator } from "../ui/separator";

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
        <CartList />
      </ScrollArea>

      <Card size="sm" className="p-3 gap-3">
        <PriceBreakdown />
        <ProcessButton />
      </Card>
    </aside>
  );
}

export default CartSidebar;
