import Navbar from "./Navbar"

const Cart = ({ cart }) => {
    const calculateTotalPrice = () => {
        // return cart && cart.reduce((total, item) => total + item.price * item.quant, 0)
    }
    return (
        <>
            <Navbar/>
            <h1>Your Cart</h1>
            {cart && cart.map((item) => (
                <div key={item.id}>
                    <img src="item.url"/>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{item.quant}</p>
                    <h5>Price: {item.price * item.quant} $</h5>
                </div>
            ))}
            <p>Total Price: {calculateTotalPrice()} $</p>
            <button type="button">Checkout</button> 
        </>
    )
}

export default Cart;