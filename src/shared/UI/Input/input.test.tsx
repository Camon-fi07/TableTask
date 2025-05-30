import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EyeIcon, SearchIcon } from 'lucide-react';

import { Input } from './input';

describe('Input', () => {
  it('should render', () => {
    const { getByTestId } = render(<Input data-testid='input' />);

    expect(getByTestId('input')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { getByTestId } = render(
      <Input data-testid='input' placeholder='placeholder' />
    );

    expect(getByTestId('input')).toMatchSnapshot();
  });

  it('should match snapshot with icons', () => {
    const { getByTestId } = render(
      <Input
        data-testid='input'
        placeholder='placeholder'
        leftIcon={<SearchIcon />}
        rightIcon={<EyeIcon />}
      />
    );

    expect(getByTestId('input')).toMatchSnapshot();
  });

  it('should change value', async () => {
    const { getByTestId } = render(<Input data-testid='input' />);

    const input = getByTestId('input');

    await userEvent.type(input, 'test');

    expect(input).toHaveValue('test');
  });
});
