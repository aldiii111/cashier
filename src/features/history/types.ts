import type { Order, Pagination } from "@/src/types";

export interface OrderHistory {
  orders: Order[];
  pagination: Pagination;
}
