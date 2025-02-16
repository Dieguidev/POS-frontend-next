'use server'

import { revalidatePath } from "next/cache";

export async function uploadImage(formData: FormData): Promise<string> {
  const url = `${process.env.API_URL}/products/upload-image/1`
  const req = await fetch(url, {
    method: 'POST',
    body: formData,
  })
  const  image = await req.json()
  revalidatePath('/');
  return image.secure_url
}
