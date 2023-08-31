import { Link } from "react-router-dom"

const Item = ({product}) => {
  return (
    <>
      <div className="card">
          <img src={product.IMAGE} alt="" />
          <div className="card-content">
            <h3 className="card-title">{product.TITLE}</h3>
            <p className="description">{product.DESCRIPTION}</p>
            <p className="price">{product.PRICE}</p>
          </div>
            <Link className="link" to={`/item/${product.id}`}>See Print</Link>
      </div>
    </>
  )
}
export default Item
