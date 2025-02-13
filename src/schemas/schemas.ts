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

export type Product = z.infer<typeof ProductSchema>

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
