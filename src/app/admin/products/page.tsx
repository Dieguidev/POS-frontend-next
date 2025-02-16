import { ProductsTable } from "@/components/products/ProductsTable";
import { Heading } from "@/components/ui/Heading";
import { Pagination } from "@/components/ui/Pagination";
import { ProdcutsResponseSchema } from "@/schemas/schemas";
import { isValidPage } from "@/utils/isValidPage";
import Link from "next/link";
import { redirect } from "next/navigation";


async function getProducts(limit: number, page: number) {
  const url = `${process.env.API_URL}/products?limit=${limit}&page=${page}`
  const req = await fetch(url)
  const json = await req.json()
  const data = ProdcutsResponseSchema.parse(json)

  return {
    products: data.data,
    total: data.total,
    totalPages: data.totalPages
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

  const { products, total, totalPages } = await getProducts(productsPorPage, +page)
  if (+page > totalPages) redirect('/admin/products?page=1')
  return (
    <>

      <Link

        href="/admin/products/new"
        className="rounded bg-green-400 font-bold py-2 px-10"
        >Nuevo producto
      </Link>

      <Heading>Administrar productos</Heading>

      <ProductsTable
        products={products}
      />

      <Pagination
        page={+page}
        totalPages={totalPages}
      />
    </>
  );
}
