import { useState } from "react";
import { useCart } from "./CartContext";
import "../styles/AddToCart.css";


const AddToCart = ({ item }) => {
    const [quant, setQuant] = useState(1);
    const { addToCart } = useCart();


    const onQuantChange = (e) => {
        setQuant(e.target.value);
    }

    const increaseQuant = () => {
        if (quant === 0) {
            setQuant(1)
        }
        else {
            setQuant(quant + 1);
        }
    }

    const decreaseQuant = () => {
        if (quant > 1) {
            setQuant(quant - 1);
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
                <input type="number" min={0} id="add-input" value={quant} onChange={onQuantChange} />
                <button type="button" className="count-button" onClick={increaseQuant}>+</button>
                <button type="button" onClick={handleCartSubmit} style={{ borderRadius: "4px", height: "32px", marginLeft: "12px" }}>Add to Cart</button>
            </form>
            
        </>
    )
}

export default AddToCart;