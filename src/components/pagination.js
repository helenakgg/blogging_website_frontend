import { Pagination } from 'flowbite-react';

export default function PaginationWithIcons() {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);

  return (
    <Pagination
      currentPage={1}
      onPageChange={page=>{setCurrentPage(page)}}
      showIcons
      totalPages={100}
    />
  )
}


