import { useState } from "react";
import "../styles/AddToCart.css";

const AddToCart = () => {
    const [quant, setQuant] = useState(1);

    const increaseQuant = () => {
        if (quant < 10) {
            setQuant(quantity => quantity + 1);
        }
    }

    const decreaseQuant = () => {
        if (quant > 1) {
            setQuant(quantity => quantity - 1);
        }
    }

    const handleQuant = () => {
        setQuant(quant);
    }
    
    return (
        <>
            <form className="cart-form">
                <label htmlFor="add-input"></label>
                <button type="button" className="count-button" onClick={decreaseQuant}>-</button>
                <input type="number" id="add-input" value={quant} onChange={handleQuant} />
                <button type="button" className="count-button" onClick={increaseQuant}>+</button>
                <button type="button" style={{ borderRadius: "4px", height: "32px", marginLeft: "12px" }}>Add to Cart</button>
            </form>
        </>
    )
}

export default AddToCart;