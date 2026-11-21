export type UserRole = "cashier" | "admin";
export type Stock = "Sold Out" | "Available";
export type OrderType = "Dine in" | "Take away";
export type OrderStatus = "Completed" | "Refunded";
export type PaymentMethod = "Cash" | "Qris";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface Dish {
  id: string;
  name: string;
  price: number;
  category: string;
  stock: Stock;
  image?: string;
}

export interface OrderItem {
  id: string;
  dishId: string;
  dishName: string;
  unitPrice: number;
  quantity: number;
  notes?: string;
}

export interface Order {
  id: string;
  invoiceNum: string;
  customerName: string;
  orderType: OrderType;
  tableNumber?: string;
  status: OrderStatus;
  payment: PaymentMethod;
  items: OrderItem[];
  subtotal?: number;
  discount?: number;
  tax?: number;
  total: number;
  cashierId: string;
  createdAt: string;
}

export interface ApiResponse<T> {
  message?: string;
  data: T;
}

export interface Pagination {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
}
