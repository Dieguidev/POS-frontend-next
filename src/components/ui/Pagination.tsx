import Link from "next/link"


type PaginationProps = {
  page: number
  totalPages: number
}

export const Pagination = ({ page, totalPages }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  return (
    <nav className="flex justify-center py-10">

      {
        page > 1 && (
          <Link
            className="px-4 py-2 text-sm text-gray-800"
            href={`/admin/products?page=${page - 1}`}
          >&laquo;</Link>
        )
      }



      {
        pages.map(currentPage => (
          <Link
            key={currentPage}
            href={`/admin/products?page=${currentPage}`}
            className={`px-4 py-2 text-sm ${currentPage === page ? 'bg-gray-900 text-white' : 'text-gray-800'}`}
          >{currentPage}</Link>
        ))
      }

      {
        page < totalPages && (
          <Link
            className="px-4 py-2 text-sm text-gray-800"
            href={`/admin/products?page=${page + 1}`}
          >&raquo;</Link>
        )
      }
    </nav>
  )
}
