import { useState } from "react";

export const useCartState = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems(...cartItems, item);
    }

    const removeFromCart = (itemID) => {
        setCartItems(cartItems.filter((item) => item.id !== itemID));
    }

    return { cartItems, addToCart, removeFromCart}
}
