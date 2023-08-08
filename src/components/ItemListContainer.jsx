import ItemList from "./ItemList"
import products from "../../public/data/prints"
import { useParams, Link } from "react-router-dom"

export default function ItemListContainer() {
  const { category } = useParams()
  console.log(category)

  const filteredProducts = category
  ? products.filter(product => product.category === category)
  : products;

  return (
    <>
      <div className="nav-bar">
        <Link className="category" to={"/prints"}>-- All Categories --</Link>
        <Link className="category" to={`/category/rose`}>El Rose</Link>
        <Link className="category" to={`/category/snake`}>Snake</Link>
        <Link className="category" to={`/category/bird`}>Bird</Link>
        <Link className="category" to={`/category/fire`}>Fire</Link>
      </div>
      <ItemList
        products={filteredProducts}
      />
    </>
  )
}
