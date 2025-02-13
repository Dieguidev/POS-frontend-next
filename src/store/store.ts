import { Product, ShoppingCart } from '@/schemas/schemas';

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface Store {
  total: number;
  contents: ShoppingCart;
  addToCart: (product: Product) => void;
  updateQuantity: (id: Product['id'], quantity: number) => void;
  deleteFromCart: (id: Product['id']) => void;
  calculateTolal: () => void;
}

export const useStore = create<Store>()(
  devtools((set, get) => ({
    total: 0,
    contents: [],
    addToCart: (product) => {
      const { id: productId, categoryId, ...data } = product;
      let contents: ShoppingCart = [];
      const duplicated = get().contents.findIndex(
        (item) => item.productId === productId
      );

      if (duplicated >= 0) {
        if (
          get().contents[duplicated].quantity >=
          get().contents[duplicated].inventory
        )
          return;

        contents = get().contents.map((item) =>
          item.productId === productId
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        contents = [
          ...get().contents,
          {
            ...data,
            productId,
            quantity: 1,
          },
        ];
      }

      set(() => ({
        contents,
      }));

      get().calculateTolal();
    },

    updateQuantity: (id, quantity) => {
      const contents = get().contents.map((item) =>
        item.productId === id
          ? {
              ...item,
              quantity,
            }
          : item
      );
      set(() => ({
        contents,
      }));
      get().calculateTolal();
    },

    deleteFromCart: (id) => {
      const contents = get().contents.filter((item) => item.productId !== id);
      set(() => ({
        contents,
      }));
      get().calculateTolal();
    },

    calculateTolal: () => {
      const total = get().contents.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      set(() => ({
        total,
      }));
    },
  }))
);
