export interface User {
  _id: string;
  username: string;
  email: string;
  img?: string;
  country: string;
  phone?: string;
  desc?: string;
  isSeller: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Gig {
  _id: string;
  userId: string;
  title: string;
  desc: string;
  totalStars: number;
  starNumber: number;
  cat: string;
  price: number;
  cover?: string;
  images?: string[];
  shortTitle: string;
  shortDesc: string;
  deliveryTime: number;
  revisionNumber: number;
  features?: string[];
  sales: number;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  _id: string;
  gigId: string;
  img?: string;
  title: string;
  price: number;
  sellerId: string;
  buyerId: string;
  isCompleted: boolean;
  payment_intent: string;
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  _id: string;
  gigId: string;
  userId: string;
  star: 1 | 2 | 3 | 4 | 5;
  desc: string;
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  _id: string;
  conversationId: string;
  userId: string;
  desc: string;
  createdAt: string;
  updatedAt: string;
}

export interface Conversation {
  _id: string;
  id: string;
  sellerId: string;
  buyerId: string;
  readBySeller: boolean;
  readByBuyer: boolean;
  lastMessage?: string;
  createdAt: string;
  updatedAt: string;
}