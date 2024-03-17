import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import "../styles/Navbar.css"

const Navbar = () => {
    const { cart } = useCart();
    return (
        <header className="navbar">
            <h1>BYShop</h1>
            <div className="navbar-links">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/shop'>Shop</Link></li>
                    <li><Link to='/cart'>Cart{cart.length > 0 ? `(${cart.length})`: ``}</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar;