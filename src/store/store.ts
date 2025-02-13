import { Product } from '@/schemas/schemas';
import { create } from 'zustand';

interface Store {
  total: number;

  addToCart: (product: Product) => void;
}

export const useStore = create<Store>(() => ({
  total: 0,
  addToCart: ()=>{
    console.log('aqui');

  }
}));
