import { useEffect, useState } from "react";

const Home = () => {
    return (
        <header className="home-header">
            <h1>BYShop</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Your Cart</a></li>
            </ul>
        </header>
    )
}


export default Home