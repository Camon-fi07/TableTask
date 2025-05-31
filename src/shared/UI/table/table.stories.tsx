import type { Meta, StoryObj } from '@storybook/react-vite';

import { Table } from './table/table';
import { TableBody } from './tableBody/tableBody';
import { TableCell } from './tableCell/tableCell';
import { TableHead } from './tableHead/tableHead';
import { TableHeader } from './tableHeader/tableHeader';
import { TableRow } from './tableRow/tableRow';

const meta: Meta<typeof Table> = {
  title: 'UI/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Table>;

const TemplateDefault = () => (
  <div style={{ width: 500 }}>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ФИО</TableHead>
          <TableHead>Курс</TableHead>
          <TableHead>Группа</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Иванов Иван Иванович</TableCell>
          <TableCell>1</TableCell>
          <TableCell>953312</TableCell>
        </TableRow>
        <TableRow isSelected>
          <TableCell>Петров Иван Иванович(Выбран)</TableCell>
          <TableCell>2</TableCell>
          <TableCell>953312</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Кьют Иван Иванович</TableCell>
          <TableCell>3</TableCell>
          <TableCell>953312</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

export const Default: Story = {
  render: TemplateDefault,
  args: {}
};
