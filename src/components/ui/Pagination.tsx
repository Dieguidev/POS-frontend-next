import Link from "next/link"
import { redirect } from 'next/navigation';

type PaginationProps = {
  page: number
  totalPages: number
}

export const Pagination = ({ page, totalPages }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  return (
    <nav className="flex justify-center py-10">
      {
        pages.map(currentPage => (
          <Link
            key={currentPage}
            href={`/admin/products?page=${currentPage}`}
            className={`px-4 py-2 text-sm ${currentPage === page ? 'bg-gray-900 text-white' : 'text-gray-800'}`}
          >{currentPage}</Link>
        ))
      }
    </nav>
  )
}
