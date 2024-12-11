export type Cart = { id: string; name: string; quantity: number };

export type Order = {
  id?: number;
  created_at?: string;
  user_name: string;
  cart: Cart[];
  coupon_code?: string;
};