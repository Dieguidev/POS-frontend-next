import { AddProductForm } from "@/components/products/AddProductForm";
import { ProductForm } from "@/components/products/ProductForm";
import { Heading } from "@/components/ui/Heading";
import Link from "next/link";

export default function NewProductPage() {
  return (
    <>
      <Link
        href="/admin/products"
        className="rounded bg-green-400 font-bold py-2 px-10"
      >Lista de productos
      </Link>
      <Heading>Nuevo producto</Heading>

      <AddProductForm>
        <ProductForm />
      </AddProductForm>
    </>
  );
}
