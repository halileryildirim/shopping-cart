import { render, screen } from "@testing-library/react"
import App from "../App"
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

vi.mock('../components/CartContext', () => ({
  useCart: vi.fn(),
}));

describe("App rendering", () => {
    const mockUseCart = vi.fn();
    mockUseCart.mockReturnValue(undefined);
    render(
        <MemoryRouter>
            <App/>
        </MemoryRouter>
    )
    const errorMsg = screen.getByText(/Cannot destructure property 'cart' of 'useCart(...)' as it is undefined./i);
    expect(errorMessage).toBeInTheDocument();
})