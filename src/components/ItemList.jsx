import Item from "./Item"

async function getProductos(){
    const response = await fetch('https://fakestoreapi.com/products')
    const result = await response.json()
    console.log(result)
    return result
}
getProductos()

export default function ItemList({products}) {
  return (
    <>
        {products.map((product)=>{
            return(
                <Item
                key={product.id}
                product={product}
                />
            )
        })}
    </>
  )
}
