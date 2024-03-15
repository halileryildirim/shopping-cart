import { HandleCart } from "./HandleCart";
import Navbar from "./Navbar";

const Cart = () => {
    const { cartItems } = HandleCart();

    return (
        <>
            <Navbar/>
            <div>
                <h2>Your Cart</h2>
                {cartItems.map((item) => (
                    <div key={item.id}>
                        <img src={item.image} alt="item" />
                        <p>{item.title}</p>
                        <p>Price: {item.price}</p>
                        <button>Remove</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cart;