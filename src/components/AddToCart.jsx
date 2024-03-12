import "../styles/AddToCart.css"

const AddToCart = () => {
    return (
        <>
            <form className="cart-form">
                <label htmlFor="add-input"></label>
                <button type="button" className="count-button">-</button>
                <input type="number" id="add-input" placeholder="1"/>
                <button type="button" className="count-button">+</button>
                <button type="submit" style={{borderRadius:"4px"}}>Add to Cart</button>
            </form>
        </>
    )
}

export default AddToCart;