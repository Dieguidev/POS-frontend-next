import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string(),
  price: z.coerce.number(),
  inventory: z.number(),
  // createdAt: z.string(),
  // updatedAt: z.string(),
  categoryId: z.number(),
});

export const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  // createdAt: z.string(),
  // updatedAt: z.string(),
});

export const CategoryWithProductsResponseSchema = CategorySchema.extend({
  products: z.array(ProductSchema),
});

export const CategoriesSchema = z.array(CategorySchema);

//*ShoppingCart
const ShoppingCartContentsSchema = ProductSchema.pick({
  name: true,
  image: true,
  price: true,
  inventory: true,
  categoryId: true,
}).extend({
  productId: z.number(),
  quantity: z.number(),
});

export const ShoppingCartSchema = z.array(ShoppingCartContentsSchema);

export const CouponResponseSchema = z.object({
  name: z.string().default(''),
  message: z.string(),
  percentage: z.coerce.number().min(0).max(100).default(0),
});


const OrderContentSchema = z.object({
  productId: z.number(),
  quantity: z.number(),
  price: z.number()
})
export const OrderSchema = z.object({
  // total: z.number(),
  coupon: z.string(),
  contents: z.array(OrderContentSchema).min(1, {message: 'El Carrito no puede ir vacio'})
})

/** Success / Error Response */
export const SuccessResponseSchema = z.object({
  message: z.string()
})
export const ErrorResponseSchema = z.object({
  message: z.array(z.string()),
  error: z.string(),
  statusCode: z.number()
})

// const order: {
//   coupon: string;
//   contents: {
//       name: string;
//       image: string;
//       price: number;
//       inventory: number;
//       categoryId: number;
//       productId: number;
//       quantity: number;
//   }[];
// }
// export const TransactionSchema = z.object({
//   coupon: z.string(),
//   contents: z.array(z.object({
//     name: z.string(),
//     image: z.string(),
//     price: z.number(),
//     inventory: z.number(),
//     categoryId: z.number(),
//     productId: z.number(),
//     quantity: z.number()
//   }))
// })


export type Product = z.infer<typeof ProductSchema>;
export type ShoppingCart = z.infer<typeof ShoppingCartSchema>;
export type CartItem = z.infer<typeof ShoppingCartContentsSchema>;
export type Coupon = z.infer<typeof CouponResponseSchema>;
// export type Order = z.infer<typeof TransactionSchema>;
