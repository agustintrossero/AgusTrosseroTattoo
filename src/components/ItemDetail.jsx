import { useState } from "react"
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

export default function ItemDetail({product}) {

  const [quantity, setQuantity] = useState(1);
  const [showCompletePurchase, setShowCompletePurchase] = useState(false);

  const handleDecrement = () => {
      if (quantity > 1) {
          setQuantity(prevQuantity => prevQuantity - 1);
      }
  };

  const handleIncrement = () => {
      setQuantity(prevQuantity => prevQuantity + 1);
  };

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div className="detail-card">
      <h3 className="heading">{product.TITLE}</h3>
      <img src={product.IMAGE} alt={`Print title image: ${product.TITLE}`} id="image"/>
      <div className="content">
        <p className="d-description">{product.DESCRIPTION}</p>
        {!showCompletePurchase ? (
            <ItemCount 
              setShowCompletePurchase={setShowCompletePurchase} 
              product={product} 
              quantity={quantity} 
              handleIncrement={handleIncrement} 
              handleDecrement={handleDecrement} 
              id={product.id} />
        ) : (
            <div>
                <div className="added-message">
                    <p><strong>{quantity} x {product.TITLE}</strong> succesfully added to your cart!</p>
                </div>
                <div>
                <Link to="/prints">
                    <button className="m-2 secondary">Keep shopping</button>
                </Link>
                <Link to="/cart">
                    <button className="m-2 primary">Go to cart</button>
                </Link>
                </div>
            </div>
        )}
      </div>
    </div>
  )
}
