import { Separator } from "@/src/components/ui/separator";

interface PriceBreakdownProps {
  subtotal?: number;
  total?: number;
}

function PriceBreakdown({ subtotal = 0, total }: PriceBreakdownProps) {
  const finalTotal = typeof total === "number" ? total : subtotal;

  return (
    <div className="flex flex-col gap-2 text-xs">
      <div className="flex items-center justify-between text-muted-foreground">
        <span>Subtotal</span>
        <span className="font-medium text-foreground">
          ${subtotal.toFixed(2)}
        </span>
      </div>

      <Separator />

      <div className="flex items-center justify-between text-sm font-semibold">
        <span className="text-foreground">Total</span>
        <span className="text-base font-bold text-primary">
          ${finalTotal.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default PriceBreakdown;
