import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from '../input/input';

import { Label, LabelProps } from './label';

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Label'
  }
};

const TemplateWithInput = (args: LabelProps) => (
  <div
    style={{
      display: 'flex',
      gap: '2px',
      flexDirection: 'column',
      width: '300px'
    }}
  >
    <Label htmlFor='name' {...args} />
    <Input id='name' />
  </div>
);

export const WithInput: Story = {
  render: TemplateWithInput,
  args: {
    children: 'Label'
  }
};
