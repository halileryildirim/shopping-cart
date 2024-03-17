import Navbar from "./Navbar";
import { useCart } from "./CartContext";

const Cart = () => {
    const { cart, totalPrice, removeFromCart} = useCart();

    return (
        <>
            <Navbar/>
            <div>
                <h2>Your Cart</h2>
                {cart.map((item) => (
                    <div className="added-item" key={item.id}>
                        <img className="added-item-img" src={item.image} alt="item" />
                        <p className="added-item">{item.title}</p>
                        <p className="added-item">{item.quantity}</p>
                        <p className="added-item">Price: {item.price}</p>
                        <button className="added-item" onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                ))}
                <p>{totalPrice === 0 ? "Your cart is empty" : `Total Price : ${totalPrice}$`}</p>
                <button>Checkout</button>
            </div>
        </>
    )
}

export default Cart;