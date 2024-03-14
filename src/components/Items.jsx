import { useEffect, useState } from "react";
import API from "./API";
import '../styles/Items.css';
import ShopItem from "./ShopItem";


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
        <>
            <div className="catalog-container">
                <h1 style={{textAlign:"center", fontSize:"3rem"}}>BYShop</h1>
                <div className="items-container">
                    {items && items.map((item) => (
                        <ShopItem key={item.id}  item={item} />
                    ))}
                </div>
            </div>            
        </>

    )
}

export default Items;
//Todo: add to cart button for items

//Add item components for each item, link it to shop router, show just image, price, amount and add to cart. When clicked on item show items on full details and also add the option to add cart. Include navbar in item components