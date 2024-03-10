import { Link } from "react-router-dom"
import Navbar from "./Navbar"

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <h1>BYSHOP</h1>
            <h2>We bring you the best of everything!</h2>
            <h2>Check out our wares!</h2>
            <button><Link to='/'>Shop</Link></button>
        </>
    )
}


export default Home