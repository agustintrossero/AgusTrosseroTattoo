import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';

const ItemCount = ({quantity, setShowCompletePurchase, handleDecrement, handleIncrement, product}) => {
    
    const {cart, setCart} = useContext(CartContext)

    const handleAdd = (quantity) => {
        const itemAdded = { ...product, quantity };
        const existingCartItem = cart.find((cartItem) => cartItem.id === itemAdded.id);
    
        if (existingCartItem) {
            existingCartItem.quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, itemAdded]);
        }

        setShowCompletePurchase(true);
    };

    return (
        <div className='item-count-card'>
            <div className="counter">
                <button variant="outline-primary" className="count-button" onClick={handleDecrement}>-</button>
                <p className="count">{quantity}</p>
                <button variant="outline-primary" className="count-button" onClick={handleIncrement}>+</button>
            </div>
            <button className="custom-btn custom-btn-cart" onClick={() => handleAdd(quantity)}>Add to cart</button>
        </div>
    );
};

export default ItemCount