import { flexRender } from '@tanstack/react-table';

import { I18nText } from '@/components/I18nText';
import { Loader, Table, TableBody, TableCell, TableRow } from '@/shared/UI';

import { CreateUserModal } from './components/createUserModal/createUserModal';
import { COLUMNS } from './users.const';
import { useUsers } from './users.hooks';
import styles from './users.module.css';
import { TableUsersMobileSkeleton } from './users.skeleton';

export const UsersMobile = () => {
  const { getUsersQuery, table } = useUsers();

  return (
    <div className={styles.wrapper}>
      <CreateUserModal />
      <Table>
        <TableBody>
          {getUsersQuery.isLoading ? (
            <TableUsersMobileSkeleton />
          ) : table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className={styles.tableCellMobile} key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <div className={styles.tableCellMobileItem} key={cell.id}>
                      <span className={styles.tableCellMobileItemLabel}>
                        {/* eslint-disable-next-line
                        @typescript-eslint/no-explicit-any */}
                        {flexRender<any>(cell.column.columnDef.header, {})}:
                      </span>
                      <span>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </span>
                    </div>
                  ))}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow data-testid='no-data-row'>
              <TableCell colSpan={COLUMNS.length} className={styles.noDataCell}>
                <I18nText id='table.noData' />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {!getUsersQuery.isLoading && getUsersQuery.isFetching && (
        <Loader isCenter />
      )}
    </div>
  );
};
