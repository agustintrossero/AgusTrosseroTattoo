import ItemList from "./ItemList"
import products from "../../public/data/prints"
import { useParams, Link } from "react-router-dom"

export default function ItemListContainer() {
  const { category } = useParams()

  const filteredProducts = products.filter(product => product.category.name === category);

  return (
    <>
      <div className="nav-bar">
        <Link className="category" to={"/prints"}>-- All Categories --</Link>
        <Link className="category" to={`/category/${'rose'}`}>El Rose Collection</Link>
        <Link className="category" to={`/category/${'snake'}`}>Snake Collection</Link>
        <Link className="category" to={`/category/${'birds'}`}>Birds Collection</Link>
        <Link className="category" to={`/category/${'fire'}`}>Fire Collection</Link>
      </div>
      <ItemList
        products={filteredProducts}
      />
    </>
  )
}
