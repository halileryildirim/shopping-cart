import { useEffect, useState } from "react";
import API from "./API";
import '../styles/Items.css';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchItems() {
            setItems([]);
            const data = await API();
            if (!ignore) {
                setItems(data);
            }
        }
        let ignore = false;
        fetchItems();
        return () => {ignore = true}
    }, [])

    return (
        <div className="items-container">
            {items && items.map((item) => (
                <div className="item" key={item.id}>
                    <img style={{ width: "200px", height: "200px" }} src={item.image} alt="item" />
                    <h4>{item.title}</h4>
                    <p style={{ textAlign: 'start', overflow:'auto'}} >{item.description}</p>
                    <p><strong>{item.price}$</strong></p>
                </div>
                
            ))}
        </div>
    )
}

export default Items;
//Todo: add to cart button for items, add extra containers to item divs for styling, overflow for descriptions and same size for all sections to align prices, titles etc.