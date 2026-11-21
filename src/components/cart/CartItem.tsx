"use client"

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import type { CartItem as CartItemType } from "@/src/types";

interface CartItemProps {
  item: CartItemType;
  onIncrease?: (dishId: string) => void;
  onDecrease?: (dishId: string) => void;
  onRemove?: (dishId: string) => void;
}

function CartItem({ item, onIncrease, onDecrease, onRemove }: CartItemProps) {
  const { dish, quantity, notes } = item;
  const totalPrice = dish.price * quantity;

  return (
    <div className="flex gap-2.5 rounded-xl border border-foreground/10 bg-card p-2.5 transition-colors hover:border-border/80">
      <div className="relative size-14 shrink-0 overflow-hidden rounded-lg bg-muted">
        {dish.image ? (
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            sizes="56px"
            className="object-cover"
            loading="eager"
          />
        ) : (
          <div className="flex size-full items-center justify-center text-[10px] text-muted-foreground">
            No image
          </div>
        )}
      </div>

      <div className="flex flex-1 min-w-0 flex-col justify-between gap-1.5">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <h4 className="truncate text-xs font-semibold text-foreground">
              {dish.name}
            </h4>
            {notes && (
              <p className="truncate text-[11px] text-muted-foreground">
                {notes}
              </p>
            )}
          </div>

          {onRemove && (
            <Button
              type="button"
              variant="ghost"
              size="icon-xs"
              onClick={() => onRemove(dish.id)}
              className="text-muted-foreground hover:text-destructive"
              aria-label="Remove item"
            >
              <Trash2 className="size-3.5" />
            </Button>
          )}
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <Button
              type="button"
              variant="ghost"
              size="icon-xs"
              onClick={() => onDecrease?.(dish.id)}
              disabled={quantity <= 1}
              className="size-5.5 rounded-[5px] bg-muted"
              aria-label="Decrease quantity"
            >
              <Minus className="size-3" />
            </Button>

            <span className="min-w-5 text-center text-xs font-medium text-foreground">
              {quantity}
            </span>

            <Button
              type="button"
              variant="ghost"
              size="icon-xs"
              onClick={() => onIncrease?.(dish.id)}
              className="size-5.5 rounded-[5px] bg-primary hover:bg-primary/80 hover:text-white text-white"
              aria-label="Increase quantity"
            >
              <Plus className="size-3" />
            </Button>
          </div>

          <span className="text-xs font-semibold text-foreground">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
