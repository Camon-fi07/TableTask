import { render, screen } from '@testing-library/react';

import { Button } from './button';
import styles from './button.module.css';

describe('Button', () => {
  it('should render', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toMatchSnapshot();
  });

  it('should apply size and mode', () => {
    render(
      <Button size='large' mode='negative'>
        Test
      </Button>
    );

    const btn = screen.getByRole('button');

    expect(btn).toHaveClass(styles.large);
    expect(btn).toHaveClass(styles.negative);
  });
});
