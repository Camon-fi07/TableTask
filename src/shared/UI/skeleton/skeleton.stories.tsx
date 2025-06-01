import type { Meta, StoryObj } from '@storybook/react-vite';

import { Skeleton } from './skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'UI/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {}
};

export const EditSize: Story = {
  args: {
    borderRadius: '50%',
    width: 30,
    height: 30
  }
};
