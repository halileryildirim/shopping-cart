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

//Add item components for each item, link it to shop router, show just image, price, amount and add to cart. When clicked on item show items on full details and also add the option to add cart. Include navbar in item components