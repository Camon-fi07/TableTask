import type { ColumnDef } from '@tanstack/react-table';

import { I18nText } from '@/components/I18nText';

export const COLUMNS: ColumnDef<UserDto>[] = [
  {
    header: () => <I18nText id='table.student.fullName' />,
    accessorKey: 'name'
  },
  {
    header: () => <I18nText id='table.student.email' />,
    accessorKey: 'email'
  },
  { header: () => <I18nText id='table.student.city' />, accessorKey: 'city' },
  {
    header: () => <I18nText id='table.student.phone' />,
    accessorKey: 'phoneNumber'
  },
  { header: () => <I18nText id='table.student.grade' />, accessorKey: 'grade' },
  {
    header: () => <I18nText id='table.student.university' />,
    accessorKey: 'university'
  },
  {
    header: () => <I18nText id='table.student.testScore' />,
    accessorKey: 'testScore'
  }
];
