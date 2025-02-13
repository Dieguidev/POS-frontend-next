'use server'

import { OrderSchema } from "@/schemas/schemas"

export async function submitOrder(data: unknown) {
  const order = OrderSchema.parse(data)
  console.log(order);


  return {
    errors: [],
    success: 'Order submitted successfully'
  }
}
