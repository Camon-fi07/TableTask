import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Modal, ModalProps } from './modal/modal';

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Modal>;

const TemplateDefault = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{ background: 'rgba(0,0,0,0.5)', width: '100%', height: '100vh' }}
    >
      <button onClick={() => setIsOpen(!isOpen)}>click me</button>
      {isOpen && (
        <Modal {...args} onClose={() => setIsOpen(!isOpen)}>
          content
        </Modal>
      )}
    </div>
  );
};

export const Default: Story = {
  render: TemplateDefault,
  args: {}
};
