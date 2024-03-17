import Navbar from "./Navbar";
import { useCart } from "./CartContext";
import '../styles/Cart.css';

const Cart = () => {
    const { cart, totalPrice, removeFromCart} = useCart();

    return (
        <>
            <Navbar/>
            <div className="cart-body">
                <h2>Your Cart</h2>
                <div className="cart">
                    {cart.map((item) => (
                        <div className="added-item" key={item.id}>
                            <img className="added-item-img" src={item.image} alt="item" />
                            <div className="added-item-details">
                                <p className="added-item-title">{item.title}</p>
                                <p>Price: {item.price} $</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Total Price: {item.price * item.quantity}$</p>
                            </div>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    ))}
                </div>
                <div className="checkout-details">
                    <p>{`Total Price : ${totalPrice}$`}</p>
                    <button className="checkout-button">Checkout</button>
                </div>
            </div>
        </>
    )
}

export default Cart;