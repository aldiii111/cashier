import type { Dish, OrderType, PaymentMethod } from "@/src/types";

export interface CartItem {
  dish: Dish;
  quantity: number;
  notes?: string;
}

export interface CartState {
  customerName: string;
  orderType: OrderType;
  tableNumber?: string;
  items: CartItem[];
}

export interface CreateOrderPayload {
  customerName: string;
  orderType: OrderType;
  tableNumber?: string;
  payment: PaymentMethod;
  items: {
    dishId: string;
    quantity: number;
    notes?: string;
  }[];
}
