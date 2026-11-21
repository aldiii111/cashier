export type UserRole = "cashier" | "admin";
export type Stock = "Sold Out" | "Available";
export type OrderType = "Dine in" | "Take away";
export type OrderStatus = "Completed" | "Refunded";
export type PaymentMethod = "Cash" | "Qris";

// backend data
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

// snapshot order
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

export interface OrderHistory {
    orders: Order[];
    pagination: Pagination;
}

// client state
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

// api kontrak
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

// payload
export interface CreateOrderPayload {
    customerName: string
    orderType: OrderType
    tableNumber?: string
    payment: PaymentMethod
    items: {
        dishId: string
        quantity: number
        notes?: string
    }[]
}

// role
export interface LoginPayload {
  email: string;
  password: string;
}

export interface SignupPayload {
  name: string;
  email: string;
  password: string;
}