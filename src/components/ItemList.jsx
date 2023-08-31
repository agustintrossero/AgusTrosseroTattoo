import Item from "./Item"

export default function ItemList({ products }) {
  return (
    <>
      <h2 className="heading">List of prints</h2>
      <div className="card-grid">
        {products.map(product => (
          <Item
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  )
}