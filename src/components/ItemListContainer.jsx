import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import ItemList from "./ItemList"

export default function ItemListContainer() {
  
  const [products, setProducts] = useState([])
  const { category } = useParams()

  useEffect(() => {
      const db = getFirestore();
      const itemsCollection = collection(db, "PRINTS");

      getDocs(itemsCollection)
          .then((snapshot) => {
              const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
              setProducts(docs);
          });
  }, []);

  const filteredProducts = category
  ? products.filter(product => product.CATEGORY === category)
  : products;

  return (
    <>
      <div className="nav-bar print-nav-bar">
        <Link className="category" to={"/prints"}>-- All Categories --</Link>
        <Link className="category" to={`/category/rose`}>El Rose</Link>
        <Link className="category" to={`/category/snake`}>Snake</Link>
        <Link className="category" to={`/category/bird`}>Bird</Link>
        <Link className="category" to={`/category/fire`}>Fire</Link>
      </div>
      <ItemList products={filteredProducts}/>
    </>
  )
}
