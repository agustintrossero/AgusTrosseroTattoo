import { Link } from "react-router-dom"

import React from 'react'

const Item = ({product}) => {
  return (
    <>
      <div className="card">
          <img src={product.image} alt="" />
          <div className="card-content">
            <h3>{product.title}</h3>
            <Link className="link" to={`/item/${product.id}`}>See Print</Link>
          </div>
      </div>
    </>
  )
}

export default Item
