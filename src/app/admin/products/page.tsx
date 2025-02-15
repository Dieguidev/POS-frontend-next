import { ProductsTable } from "@/components/products/ProductsTable";
import { Heading } from "@/components/ui/Heading";
import { ProdcutsResponseSchema } from "@/schemas/schemas";


async function getProducts() {
  const url = `${process.env.API_URL}/products`
  const req = await fetch(url)
  const json = await req.json()
  const data = ProdcutsResponseSchema.parse(json)
  return {
    products: data.data,
    total: data.total
  }
}

export default async function ProductsPage() {

  const {products,total} = await getProducts()
  return (
    <>
      <Heading>Administrar productos</Heading>

      <ProductsTable
      products={products}
      />
    </>
  );
}
