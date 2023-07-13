import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

export default function NavBar() {
  return (
    <div>
      <h1>Agustin Trossero Tattoo</h1>
      <nav className="nav-bar">
        <NavLink to="/" className="category">Home</NavLink>
        <NavLink to="/styles" className="category">Styles</NavLink>
        <NavLink to="/prints" className="category">Prints</NavLink>
        <NavLink to="/book-appointments" className="category">Book Appointment</NavLink>
      </nav>  
      <CartWidget/>
    </div>
  )
}
