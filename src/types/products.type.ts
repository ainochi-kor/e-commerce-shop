export interface Product {
  id?: string;
  brand: string;
  category: string;
  createdAt: Date;
  desc: string;
  imageURL: string;
  name: string;
  price: number;
}

export interface ShippingAddress {
  city: string;
  line: string;
  name: string;
  postalCode: string;
}

export interface CartItem {
  id: string;
  brand: string;
  category: string;
  desc: string;
  imageURL: string;
  name: string;
  price: number;
  cartQuantity: number;
}

export interface Order {
  id: string;
  orderAmount: number;
  orderDate: string;
  orderStatus: string;
  orderTime: string;
  userEmail: string;
  userID: string;
  cartItems: CartItem[];
  shippingAddress: ShippingAddress;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
}
