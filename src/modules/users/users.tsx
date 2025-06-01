import { flexRender } from '@tanstack/react-table';
import { Loader2Icon } from 'lucide-react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/shared/UI';

import { CreateUserModal } from './components/createUserModal/createUserModal';
import { useUsers } from './users.hooks';
import styles from './users.module.css';

export const Users = () => {
  const { getUsersQuery, table } = useUsers();

  return (
    <div className={styles.wrapper}>
      <CreateUserModal />
      <div>Фильтры</div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>Нет данных.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {getUsersQuery.isLoading && <Loader2Icon className={styles.loader} />}
    </div>
  );
};
