import { Link } from "react-router-dom"
import Navbar from "./Navbar"

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <h1>BYSHOP</h1>
            {
                //Add edgy background colors, change font to white, search for font family.
            }
            <button><Link to='/'>Shop</Link></button>
        </>
    )
}


export default Home