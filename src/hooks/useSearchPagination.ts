import { useMemo, useState } from 'react';

interface UseSearchPaginationProps<T> {
  data: T[];
  searchKey: keyof T;
  itemsPerPage?: number;
}

const useSearchPagination = <T extends Record<string, any>>({
  data,
  searchKey,
  itemsPerPage = 4,
}: UseSearchPaginationProps<T>) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      String(item[searchKey]).toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [data, searchQuery, searchKey]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  return {
    searchQuery,
    setSearchQuery: handleSearch,
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedData,
    filteredData,
  };
};

export default useSearchPagination;
