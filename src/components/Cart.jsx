import Navbar from "./Navbar";
import { useCart } from "./CartContext";

const Cart = () => {
    const { cart, removeFromCart } = useCart();
    return (
        <>
            <Navbar/>
            <div>
                <h2>Your Cart</h2>
                {cart.map((item) => (
                    <div key={item.id}>
                        <img src={item.image} alt="item" />
                        <p>{item.title}</p>
                        <p>Price: {item.price}</p>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cart;