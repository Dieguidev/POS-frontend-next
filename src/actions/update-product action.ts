'use server';

import {
  ErrorResponseSchema,
  Product,
  ProductFormSchema,
} from '@/schemas/schemas';

type ActionStatetype = {
  errors: string[];
  success: string;
};

export async function updateProduct(
  productId: Product['id'],
  prevState: ActionStatetype,
  formData: FormData
) {
  const product = ProductFormSchema.safeParse({
    name: formData.get('name'),
    price: Number(formData.get('price')),
    inventory: Number(formData.get('inventory')),
    categoryId: Number(formData.get('categoryId')),
  });
  if (!product.success) {
    return {
      errors: product.error.issues.map((issue) => issue.message),
      success: '',
    };
  }

  const url = `${process.env.API_URL}/products/${productId}`;
  const req = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product.data),
  });
  const json = await req.json();

  if (!req.ok) {
    const errors = ErrorResponseSchema.parse(json);
    return {
      errors: errors.message.map((issue) => issue),
      success: '',
    };
  }



  return {
    errors: [],
    success: 'Producto Actualizado',
  };
}
