import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import products from "../../public/data/prints"

export default function ItemDetailContainer() {
  const { id } = useParams()

  const filteredProduct = products.filter(product => product.id == id)

  return (
    <>
      <ItemDetail product={filteredProduct} />
    </>
  )
}