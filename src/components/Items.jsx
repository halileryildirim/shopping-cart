import { useEffect, useState } from "react";
import API from "./API";

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
            {items && items.map((item) => (
                <div key={item.id} style={{ width: "300px", height: "400px" }}>
                    <img style={{ width: "200px", height: "200px" }} src={item.image} alt="item" />
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <p><strong>{item.price}$</strong></p>
                </div>
                
            ))}
        </>
    )
}

export default Items;