import NavBar from "./NavBar"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="header">
      <div className="container bar">
        <Link to={"/"} style={{ textDecoration: 'none', color: "white" }}>
          <h1 className="heading">Agustin Trossero Tattoo Artist</h1>
        </Link>
        <NavBar/>
      </div>
    </header>
  )
}
