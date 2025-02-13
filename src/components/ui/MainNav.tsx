import { CategoriesSchema } from "@/schemas/schemas";
import { Logo } from "./Logo"

async function getCategories() {
  const url = `${process.env.API_URL}/categories`;
  const req = await fetch(url, {
    method: 'GET',
    cache:'force-cache',
    next: {
      tags: [`categories`],
    }
  })

  const json = await req.json();

  const categories = CategoriesSchema.parse(json);
  return categories;
}


export const MainNav = async () => {

  const categories = await getCategories()
  console.log(categories);


  return (
    <header className="px-10 py-5 bg-gray-700 flex flex-col md:flex-row justify-between ">
        <div className="flex justify-center">
          <Logo />
        </div>

        <nav className="flex flex-col md:flex-row gap-2 items-center mt-5 md:mt-0">

        </nav>
    </header>
  )
}
