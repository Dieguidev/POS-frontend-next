'use server';

import {
  ErrorResponseSchema,
  OrderSchema,
  SuccessResponseSchema,
} from '@/schemas/schemas';
import { revalidateTag } from 'next/cache';

export async function submitOrder(data: unknown) {
  const order = OrderSchema.parse(data);
  const url = `${process.env.API_URL}/transactions`;
  const req = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...order }),
  });
  const json = await req.json();

  if (!req.ok) {
    const errors = ErrorResponseSchema.parse(json);
    return {
      errors: errors.message.map((issue) => issue),
      success: '',
    };
  }

  const success = SuccessResponseSchema.parse(json);

  for (const item of data.contents) {
    revalidateTag(`category-${item.categoryId}`);
  }

  return {
    errors: [],
    success: success.message,
  };
}
