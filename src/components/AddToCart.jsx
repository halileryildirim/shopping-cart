const AddToCart = () => {
    return (
        <>
            <form className="cart-form">
                <label htmlFor="add-input">Add to Cart</label>
                <button type="button">-</button>
                <input type="num" id="add-input" />
                <button type="button">+</button>
                <button type="submit">Add to Cart</button>
            </form>
        </>
    )
}

export default AddToCart;