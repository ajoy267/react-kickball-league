import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Player from '../../views/Player/Player';

test('renders correctly when there are selections', () => {
  const container = render(
    <MemoryRouter>
      <Player match={{ params: { id: '2' } }} />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
