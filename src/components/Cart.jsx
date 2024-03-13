import Navbar from "./Navbar"

const Cart = () => {
    return (
        <>
            <Navbar/>
            <h1>Your Cart</h1>
            {
                //Items go here
            }
            <h5>Total Price: </h5>
            <button type="button">Checkout</button> 
        </>
    )
}

export default Cart;