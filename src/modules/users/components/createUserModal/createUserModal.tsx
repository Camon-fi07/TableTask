import { useState } from 'react';

import { I18nText } from '@/components/I18nText';
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalHeaderTitle
} from '@/shared/UI';

import { CreateUserForm } from './components/createUserForm/createUserForm';
import styles from './createUserModal.module.css';

export const CreateUserModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);

  const handleClose = () => {
    if (!isBlocked) setIsOpen(false);
  };

  return (
    <div>
      <Button
        className={styles.createButton}
        size='large'
        onClick={() => setIsOpen(true)}
      >
        <I18nText id='button.user.create' />
      </Button>
      {isOpen && (
        <Modal onClose={handleClose}>
          <ModalHeader>
            <ModalHeaderTitle>
              <I18nText id='modal.user.create.title' />
            </ModalHeaderTitle>
          </ModalHeader>
          <ModalContent>
            <CreateUserForm onClose={handleClose} setIsBlocked={setIsBlocked} />
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};
