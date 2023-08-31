import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { CartContext } from '../context/ShoppingCartContext'; 
import cartImg from '../../public/img/carrito.png'

export default function CartWidget() {
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <>
        <NavLink to='/cart'>
          <img src={cartImg} alt="cart" />
          {totalQuantity}
        </NavLink>
    </>
  )
}
