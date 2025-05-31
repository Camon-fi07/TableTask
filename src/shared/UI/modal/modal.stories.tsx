import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowLeftIcon } from 'lucide-react';
import { useState } from 'react';

import { Modal, ModalProps } from './modal/modal';
import { ModalContent } from './modalContent/modalContent';
import { ModalHeader } from './modalHeader/modalHeader';
import { ModalHeaderTitle } from './modalHeaderTitle/modalHeaderTitle';

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
      <button data-testid='open-modal' onClick={() => setIsOpen(!isOpen)}>
        click me
      </button>
      {isOpen && (
        <Modal {...args} onClose={() => setIsOpen(!isOpen)}>
          <ModalHeader>
            <ArrowLeftIcon />
            <ModalHeaderTitle>Заголовок</ModalHeaderTitle>
          </ModalHeader>
          <ModalContent>
            <div>text</div>
            <div>text</div>
            <div>text</div>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export const Default: Story = {
  render: TemplateDefault,
  args: {}
};
