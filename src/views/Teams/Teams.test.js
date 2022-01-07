import { render } from '@testing-library/react';
import Teams from '../../views/Teams/Teams';

test('renders list of Teams', () => {
  const container = render(<Teams />);
  expect(container).toMatchSnapshot();
});
