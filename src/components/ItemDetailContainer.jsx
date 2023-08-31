import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from "./ItemDetail"

export default function ItemDetailContainer() {

  const [product, setProduct] = useState();
  const { id } = useParams()

  useEffect(() => {
    const db = getFirestore();

    const oneItem = doc(db, "PRINTS", id); 
    getDoc(oneItem)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const docs = snapshot.data();
                    setProduct({ ...docs, id }); 
                } else {
                    console.log("Product not found");
                }
            })
            .catch((error) => {
              console.error("Error fetching product:", error);
          });
  }, [id]);

  return (
    <>
      <ItemDetail product={product} />
    </>
  )
}