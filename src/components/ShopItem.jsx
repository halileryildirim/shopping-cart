import PropTypes from 'prop-types';
import AddToCart from "./AddToCart";

const ShopItem = ({ item }) => {
    return (
        <div className="item">
            <img style={{ width: "200px", height: "250px" }} src={item.image} alt="item" />
            <h4>{item.title}</h4>
            <p><strong>{item.price}$</strong></p>
            <AddToCart/>
        </div>
    )
};

ShopItem.PropTypes = {
    item: PropTypes.object.isRequired,
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
}

export default ShopItem;