import { z } from "zod";

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string(),
  price: z.coerce.number(),
  inventory: z.number(),
  // createdAt: z.string(),
  // updatedAt: z.string(),
  categoryId: z.number()
})


export const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  // createdAt: z.string(),
  // updatedAt: z.string(),
})

export const CategoryWithProductsResponseSchema = CategorySchema.extend({
  products: z.array(ProductSchema)
});

export const CategoriesSchema = z.array(CategorySchema)

//*ShoppingCart
const ShoppingCartContentsSchema = ProductSchema.pick({
  name: true,
  image: true,
  price: true,
  inventory: true,
}).extend({
  productId: z.number(),
  quantity: z.number(),
})

export const ShoppingCartSchema = z.array(ShoppingCartContentsSchema)

export type Product = z.infer<typeof ProductSchema>
export type ShoppingCart = z.infer<typeof ShoppingCartSchema>
