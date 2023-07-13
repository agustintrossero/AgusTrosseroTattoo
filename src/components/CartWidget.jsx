import cart from '../../public/img/carrito.png'
import { NavLink } from 'react-router-dom'

export default function CartWidget() {
  return (
    <>
        <NavLink to='/cart'>
          <img src={cart} alt="cart" />
        </NavLink>
    </>
  )
}
