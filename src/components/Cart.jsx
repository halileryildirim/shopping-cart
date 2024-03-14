import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useCartState } from "./UseCartState";

const Cart = () => { 
    const { cartItems, removeFromCart } = useCartState(); 

    const handleRemoveFromCart = (itemID) => {
        removeFromCart(itemID);
    }

    useEffect(() => {
        console.log("Cart items updated:", cartItems);
    }, [cartItems])

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
                        <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cart;