import React from "react"

export default function ItemDetail({ product }) {
  if (!product) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <h3 className="title">{product[0].title}</h3>
      <img src={product[0].image} alt={`Print title image: ${product[0].title}`} />
      <p className="description">{product[0].description}</p>
      <p className="category">{product[0].category.name}</p>
    </div>
  )
}
