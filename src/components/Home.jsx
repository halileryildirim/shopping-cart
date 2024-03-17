import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import '../styles/Home.css';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="container">
                <h1 style={{fontSize:"6rem"}}>BYSHOP</h1>
                <h2 style={{fontSize:"2rem"}}>BYShop has wares, if you have coin.</h2>
                <button><Link to='shop'>Shop</Link></button>
            </div>
        </>
    )
}


export default Home