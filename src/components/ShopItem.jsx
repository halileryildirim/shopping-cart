import AddToCart from "./AddToCart";

const ShopItem = ({ item }) => {
    return (
        <div className="item">
            <div id='item-image'>
                <img src={item.image} alt="item" />
            </div>
            <div id='item-info'>
                <h4>{item.title}</h4>
                <p><strong>{item.price}$</strong></p>
            </div>
            <AddToCart item={item}/>
        </div>
    )
};

export default ShopItem;