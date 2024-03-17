import { render } from '@testing-library/react';
import Shop from '../components/Shop';

test('renders Shop component', () => {
  const { container } = render(Shop);

  // Check if Navbar is rendered
  const navbarElement = container.querySelector('.navbar');
  expect(navbarElement).toBeInTheDocument();

  // Check if Items component is rendered
  const itemsComponent = container.querySelector('.items');
  expect(itemsComponent).toBeInTheDocument();
});
