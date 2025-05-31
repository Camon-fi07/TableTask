import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Modal, ModalContent, ModalHeader, ModalHeaderTitle } from './';

const Component = ({ onClose }: { onClose: () => void }) => (
  <Modal data-testid='modal' onClose={onClose}>
    <ModalHeader>
      <ModalHeaderTitle>Заголовок</ModalHeaderTitle>
    </ModalHeader>
    <ModalContent>
      <div>text</div>
      <div>text</div>
      <div>text</div>
    </ModalContent>
  </Modal>
);

describe('modal', () => {
  const onClose = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    const { getByTestId } = render(<Component onClose={onClose} />);
    expect(getByTestId('modal')).toBeInTheDocument();
  });

  it('should call onClose when clicking on close button', () => {
    const { getByTestId } = render(<Component onClose={onClose} />);
    const closeModalButton = getByTestId('close-modal-button');
    userEvent.click(closeModalButton);
    expect(onClose).not.toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    const { getByTestId } = render(<Component onClose={onClose} />);
    expect(getByTestId('modal')).toMatchSnapshot();
  });
});
