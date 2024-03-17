import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const calculateTotalPrice = () => {
            const sum = cart.reduce((total, item) => total + (item.quantity * item.price), 0);
            return Math.floor(sum * 100) / 100;
        }

        setTotalPrice(calculateTotalPrice());
    }, [cart])

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
        <CartContext.Provider value={{ cart, totalPrice, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
