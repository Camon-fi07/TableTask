import type { ColumnDef } from '@tanstack/react-table';

import { I18nText } from '@/components/I18nText';

export const COLUMNS: ColumnDef<UserDto>[] = [
  {
    header: () => <I18nText id='fullName' />,
    accessorKey: 'name'
  },
  {
    header: () => <I18nText id='email' />,
    accessorKey: 'email'
  },
  { header: () => <I18nText id='city' />, accessorKey: 'city' },
  {
    header: () => <I18nText id='phone' />,
    accessorKey: 'phoneNumber'
  },
  { header: () => <I18nText id='grade' />, accessorKey: 'grade' },
  {
    header: () => <I18nText id='university' />,
    accessorKey: 'university'
  },
  {
    header: () => <I18nText id='testScore' />,
    accessorKey: 'testScore'
  }
];
