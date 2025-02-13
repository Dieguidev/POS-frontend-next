import { Product, ShoppingCart } from '@/schemas/schemas';

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface Store {
  total: number;
  contents: ShoppingCart;
  addToCart: (product: Product) => void;
}

export const useStore = create<Store>()(devtools(() => ({
  total: 0,
  contents: [],
  addToCart: () => {
    console.log('aqui');
  },
})));
