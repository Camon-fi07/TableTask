import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useEffect, useMemo, useState } from 'react';

import { useGetUsersQuery } from '@/shared/api/hooks';

import { COLUMNS } from './users.const';

const SCROLL_MAX_REMAINING_PART = 30;

export const useUsers = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<UserDto[]>([]);
  const getUsersQuery = useGetUsersQuery({ _page: page });

  const columns = useMemo(() => COLUMNS, []);

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  useEffect(() => {
    const handleScroll = () => {
      if (
        !getUsersQuery.data ||
        !getUsersQuery.data.data.page.hasNext ||
        getUsersQuery.isFetching ||
        getUsersQuery.isError
      )
        return;

      const scrollRemainingPart =
        document.body.clientHeight - (window.innerHeight + window.scrollY);

      if (scrollRemainingPart < SCROLL_MAX_REMAINING_PART) {
        setPage((prevVal) => prevVal + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [getUsersQuery]);

  useEffect(() => {
    if (getUsersQuery.data?.data)
      setUsers([...users, ...getUsersQuery.data.data.items]);
  }, [getUsersQuery.data]);

  useEffect(() => {
    if (page !== 1) getUsersQuery.refetch();
  }, [page]);

  return { getUsersQuery, table, page };
};
