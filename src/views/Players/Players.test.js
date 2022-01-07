import { render } from '@testing-library/react';
import Players from '../../views/Players/Players';

test('renders list of Players', () => {
  const container = render(<Players />);
  expect(container).toMatchSnapshot();
});
