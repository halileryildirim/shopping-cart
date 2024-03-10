import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="home-header">
            <h1>BYShop</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>Shop</Link></li>
                <li><Link to='/'>Your Cart</Link></li>
            </ul>
        </header>
    )
}

export default Navbar;