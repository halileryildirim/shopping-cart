import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import '../styles/Home.css';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="container">
                <h1 style={{fontSize:"6rem"}}>BYSHOP</h1>
                {
                    //Add edgy background colors, change font to white, search for font family.
                }
                <button><Link to='shop'>Shop</Link></button>
            </div>
        </>
    )
}


export default Home