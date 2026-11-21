import React from "react";

interface CartListProps {
  children: React.ReactNode;
  isEmpty: Boolean;
}

function CartList({
  children,
  isEmpty = false,
}: CartListProps) {
  if (isEmpty) {
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
      {children}
    </div>
  );
}

export default CartList;
