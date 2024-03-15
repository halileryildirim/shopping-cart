import { useState } from "react";

export const HandleCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]); // Add the item to the cart
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId)); // Remove item by ID
  };

  return { cartItems, addToCart, removeFromCart };
};
