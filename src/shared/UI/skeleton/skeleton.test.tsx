import { render, screen } from '@testing-library/react';

import { Skeleton } from './skeleton';

describe('Skeleton', () => {
  it('should render', () => {
    render(<Skeleton />);
    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    render(<Skeleton />);
    expect(screen.getByTestId('skeleton')).toMatchSnapshot();
  });

  it('should apply css properties', () => {
    render(<Skeleton borderRadius='50%' width={30} height={30} margin={10} />);

    expect(screen.getByTestId('skeleton')).toHaveStyle('border-radius: 50%');
    expect(screen.getByTestId('skeleton')).toHaveStyle('width: 30px');
    expect(screen.getByTestId('skeleton')).toHaveStyle('height: 30px');
    expect(screen.getByTestId('skeleton')).toHaveStyle('margin: 10px');
    expect(screen.getByTestId('skeleton')).toMatchSnapshot();
  });
});
