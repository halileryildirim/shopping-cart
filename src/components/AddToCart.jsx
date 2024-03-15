import { useState } from "react";
import "../styles/AddToCart.css";
import { HandleCart } from "./HandleCart";

const AddToCart = ( {item} ) => {
    const [quant, setQuant] = useState(1);
    const {addToCart } = HandleCart();

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
    
    const handleCartSubmit = (e) => {
        e.preventDefault();
        addToCart(item);
        setQuant(1);
    }

    return (
        <>
            <form className="cart-form" onSubmit={handleCartSubmit}>
                <label htmlFor="add-input"></label>
                <button type="button" className="count-button" onClick={decreaseQuant}>-</button>
                <input type="number" id="add-input" value={quant} readOnly />
                <button type="button" className="count-button" onClick={increaseQuant}>+</button>
                <button type="submit" style={{ borderRadius: "4px", height: "32px", marginLeft: "12px" }}>Add to Cart</button>
            </form>
        </>
    )
}

export default AddToCart;