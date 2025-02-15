import { ProductsTable } from "@/components/products/ProductsTable";
import { Heading } from "@/components/ui/Heading";
import { ProdcutsResponseSchema } from "@/schemas/schemas";
import { isValidPage } from "@/utils/isValidPage";
import { redirect } from "next/navigation";


async function getProducts(limit: number, page: number) {
  const url = `${process.env.API_URL}/products?limit=${limit}&page=${page}`
  const req = await fetch(url)
  const json = await req.json()
  const data = ProdcutsResponseSchema.parse(json)

  return {
    products: data.data,
    total: data.total
  }
}

type SearchParams = Promise<{ page: string }>

export default async function ProductsPage({ searchParams }: { searchParams: SearchParams }) {

  const { page } = await searchParams
  if (!isValidPage(+page)) {
    redirect('/admin/products?page=1')
  }

  const productsPorPage = 10
  // const skip = (+page) * productsPorPage

  const { products, total } = await getProducts(productsPorPage, +page)
  return (
    <>
      <Heading>Administrar productos</Heading>

      <ProductsTable
        products={products}
      />
    </>
  );
}
