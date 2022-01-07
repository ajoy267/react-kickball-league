import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Team from '../../views/Team/Team';

test('renders Team details when selected', () => {
  const container = render(
    <MemoryRouter>
      <Team match={{ params: { id: '2' } }} />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
