import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['primary', 'negative', 'outline']
    },
    size: {
      control: 'radio',
      options: ['small', 'large']
    },
    onClick: { action: 'clicked' }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimarySmall: Story = {
  args: {
    children: 'Primary Small',
    mode: 'primary',
    size: 'small'
  }
};

export const PrimaryLarge: Story = {
  args: {
    children: 'Primary Large',
    mode: 'primary',
    size: 'large'
  }
};

export const NegativeSmall: Story = {
  args: {
    children: 'Negative Small',
    mode: 'negative',
    size: 'small'
  }
};

export const OutlineLarge: Story = {
  args: {
    children: 'Outline Large',
    mode: 'outline',
    size: 'large'
  }
};
