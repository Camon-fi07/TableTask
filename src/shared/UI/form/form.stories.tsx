import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from '../Input/input';
import { Label } from '../label/label';

import { FormItem } from './formItem/formItem';
import { FormMessage } from './formMessage/formMessage';

const meta: Meta = {
  title: 'UI/Form',
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;
type Story = StoryObj;

const TemplateDefault = () => (
  <FormItem style={{ width: '300px' }}>
    <Label htmlFor='name'>Label</Label>
    <Input id='name' />
  </FormItem>
);

export const Default: Story = {
  render: TemplateDefault
};

const TemplateWithError = () => (
  <FormItem style={{ width: '300px' }}>
    <Label htmlFor='name'>Label</Label>
    <Input id='name' isError />
    <FormMessage>Error</FormMessage>
  </FormItem>
);

export const WithError: Story = {
  render: TemplateWithError
};
