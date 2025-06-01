import type { Meta, StoryObj } from '@storybook/react-vite';

import { Loader } from './loader';

const meta: Meta<typeof Loader> = {
  title: 'UI/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {};

export const Center: Story = {
  args: {
    isCenter: true
  }
};
