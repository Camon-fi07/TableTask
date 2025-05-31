import { render } from '@testing-library/react';

import { Label } from './label';

describe('Label', () => {
  it('should render', () => {
    const { getByTestId } = render(<Label data-testid='label'>Label</Label>);
    expect(getByTestId('label')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { getByTestId } = render(<Label data-testid='label'>Label</Label>);
    expect(getByTestId('label')).toMatchSnapshot();
  });
});
