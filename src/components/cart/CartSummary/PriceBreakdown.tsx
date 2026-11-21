interface PriceBreakdownProps {
  total?: number;
}

function PriceBreakdown({ total = 0 }: PriceBreakdownProps) {
  return (
    <div className="flex items-center justify-between text-sm font-semibold">
      <span className="text-foreground">Total</span>
      <span className="text-base font-bold text-foreground">
        ${total.toFixed(2)}
      </span>
    </div>
  );
}

export default PriceBreakdown;
