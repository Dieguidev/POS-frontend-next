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
  const inventoryValue = formData.get('inventory');
  const inventory = inventoryValue
    ? parseInt(inventoryValue.toString(), 10)
    : 0;

  const product = ProductFormSchema.safeParse({
    name: formData.get('name'),
    image: formData.get('image'),
    price: Number(formData.get('price')),
    inventory,
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
