interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const getPageNumbers = () => {
    const pages = []
    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 6) {
        pages.push(1, 2, 3, 4, 5, 6, 7, '...', totalPages)
      } else if (currentPage > totalPages - 6) {
        pages.push(
          1,
          '...',
          totalPages - 6,
          totalPages - 5,
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        )
      } else {
        pages.push(
          1,
          '...',
          currentPage - 2,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          currentPage + 2,
          '...',
          totalPages
        )
      }
    }
    return pages
  }

  return (
    <div className='flex items-center space-x-1'>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className='px-3 py-1 border rounded-md bg-white hover:bg-gray-200 disabled:opacity-50'
      >
        &lt;
      </button>
      {getPageNumbers().map((page, index) =>
        typeof page === 'number' ? (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`px-2 py-1 border ${
              page === currentPage
                ? 'bg-[#EB0A1E] text-white'
                : 'bg-white hover:bg-gray-200'
            }`}
          >
            {page}
          </button>
        ) : (
          <span
            key={index}
            className='px-3 py-1'
          >
            ...
          </span>
        )
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='px-3 py-1 border rounded-md bg-white hover:bg-gray-200 disabled:opacity-50'
      >
        &gt;
      </button>
    </div>
  )
}

export default Pagination
