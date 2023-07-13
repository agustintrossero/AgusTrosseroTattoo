import { Link } from "react-router-dom"
import logo from "../../public/img/dro-tattoo-logo.png"
import NavBar from "./NavBar"

export default function Header() {
  return (
    <header className="header">
      <div className="container barra">
        <h1 className="heading">Agustin Trossero Tattoo Artist</h1>
        <Link to='/'>
            <img className="logo" src={logo} alt="logo"/>
        </Link>
        <NavBar/>
      </div>
    </header>
  )
}
