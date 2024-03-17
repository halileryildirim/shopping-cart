import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const existingItemID = cart.findIndex(cartItem => cartItem.id === item.id)
        if (existingItemID !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemID].quantity += item.quantity;
            setCart(updatedCart);
        }
        else {
            setCart([...cart, item]);
        }
    };

    const removeFromCart = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
