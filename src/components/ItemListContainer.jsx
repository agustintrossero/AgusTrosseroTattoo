import ItemList from "./ItemList"

export default function ItemListContainer() {

  const products = [
    {id: 1, name: "Light Snake", description: "Pencil on A4 paper", stock: 10},
    {id: 2, name: "Sword Snake", description: "Pencil on A4 paper", stock: 10}, 
    {id: 3, name: "Skull Snake", description: "Pencil on A4 paper", stock: 10}
  ]

const getProducts = new Promise((resolve, reject) => {
  if (products.length > 0) {
    setTimeout(()=>{
      resolve(products)
    }, 2000)
  } else{
    reject(new Error("No products"))
  }
})

getProducts
  .then((res)=>{
    console.log(res)
  })
  .catch((error)=>{
    console.log(error)
  })

  return (
    <>
      <ItemList
        products={products}
      />
    </>
  )
}
