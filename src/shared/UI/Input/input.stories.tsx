import type { Meta, StoryObj } from '@storybook/react-vite';
import { EyeIcon, SearchIcon } from 'lucide-react';

import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    isError: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder'
  }
};

export const WithIcons: Story = {
  args: {
    leftIcon: <SearchIcon />,
    rightIcon: <EyeIcon />
  }
};
