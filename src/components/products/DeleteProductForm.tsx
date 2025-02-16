import { Product } from "@/schemas/schemas"
import { revalidatePath } from "next/cache"

type DeleteProductFormProps = {
  productId: Product["id"]
}

export const DeleteProductForm = ({ productId }: DeleteProductFormProps) => {


  const handleDeleteProduct = async () => {
    "use server"
    const url = `${process.env.API_URL}/products/${productId}`
    const req = await fetch(url, {
      method: 'DELETE'
    })
    await req.json()
    revalidatePath('/admin/products')

  }

  return (
    <form
      action={handleDeleteProduct}
    >
      <input
        type="submit"
        className="text-red-600 hover:text-red-800 cursor-pointer"
        value="Eliminar"
      />
    </form>
  )
}
