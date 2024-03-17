import { useState } from "react";
import { useCart } from "../CartContext";
import "../styles/AddToCart.css";


const AddToCart = ({ item }) => {
    const [quant, setQuant] = useState(1);
    const { addToCart } = useCart();

    const increaseQuant = () => {
        if (quant < 10) {
            setQuant((prevQuant) => prevQuant + 1);
        }
    }

    const decreaseQuant = () => {
        if (quant > 1) {
            setQuant((prevQuant)  => prevQuant - 1);
        }
    }
    

    const handleCartSubmit = () => {
        item = {...item, quantity: quant}
        addToCart(item)
        setQuant(1);
    }

    return (
        <>
            <form className="cart-form">
                <label htmlFor="add-input"></label>
                <button type="button" className="count-button" onClick={decreaseQuant}>-</button>
                <input type="number" id="add-input" value={quant} readOnly />
                <button type="button" className="count-button" onClick={increaseQuant}>+</button>
                <button type="button" onClick={handleCartSubmit} style={{ borderRadius: "4px", height: "32px", marginLeft: "12px" }}>Add to Cart</button>
            </form>
            
        </>
    )
}

export default AddToCart;