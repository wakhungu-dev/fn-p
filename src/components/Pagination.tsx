import Link from 'next/link';  

interface PaginationProps {  
  totalPages: number;  
  currentPage: number;  
}  

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage }) => {  
  const pages: number[] = [];  
  for (let i = 1; i <= totalPages; i++) {  
    pages.push(i);  
  }  

  return (  
    <nav aria-label="Pagination">  
      <ul className="flex justify-center gap-2 mt-4">  
        {currentPage > 1 && (  
          <li>  
            <Link href={`/products?page=${currentPage - 1}`} aria-label="Previous">  
              <span className="px-4 py-2 border rounded cursor-pointer">&laquo;</span>  
            </Link>  
          </li>  
        )}  

        {pages.map((page: number, index: number) => (  
          <li key={index}>  
            <Link href={`/products?page=${page}`}>  
              <span className={`px-4 py-2 border rounded cursor-pointer ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-white'}`}>{page}</span>  
            </Link>  
          </li>  
        ))}  

        {currentPage < totalPages && (  
          <li>  
            <Link href={`/products?page=${currentPage + 1}`} aria-label="Next">  
              <span className="px-4 py-2 border rounded cursor-pointer">&raquo;</span>  
            </Link>  
          </li>  
        )}  
      </ul>  
    </nav>  
  );  
};  

export default Pagination;
