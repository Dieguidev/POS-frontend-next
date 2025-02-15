import { Heading } from "@/components/ui/Heading";
import { ProdcutsResponseSchema } from "@/schemas/schemas";


async function getProducts() {
  const url = `${process.env.API_URL}/products`
  const req = await fetch(url)
  const json = await req.json()
  const products = ProdcutsResponseSchema.parse(json)

  console.log(products);

}

export default async function ProductsPage() {

  await getProducts()
  return (
    <Heading>Administrar productos</Heading>
  );
}
