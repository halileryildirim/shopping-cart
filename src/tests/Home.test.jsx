import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../components/Home';
import { vi } from 'vitest';

// Mocking useCart hook
vi.mock('../components/CartContext', () => ({
  useCart: vi.fn(),
}));

test('renders Home component with undefined cart', () => {
  // Set up useCart mock to return undefined
  const mockUseCart = vi.fn();
  mockUseCart.mockReturnValue(undefined);

  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  // Verify that the component gracefully handles undefined cart
  const errorMessage = screen.getByText(/cannot destructure property 'cart' of 'useCart'/i);
  expect(errorMessage).toBeInTheDocument();
});