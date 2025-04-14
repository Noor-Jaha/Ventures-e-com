import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const API = (`https://makeup-api.herokuapp.com/api/v1/products?id=${id}`);


const ProList = () => {
  const [product,setProduct] = useState([]);
  const { id } = useParams();
console.log('save file', id)


useEffect(() => {
  
const getSinglePro = async () => {
  const response = await fetch(API);
  const data = await response.json();
  console.log(data);
  setProduct(data);
}
  getSinglePro()
},[])

  return (
    <>
     {
      product.map((pro,id) => {
        return (
          <div key={id}>
                 <h1>{pro.name}</h1>
                 <h2>{pro.price}</h2>
          </div>
        )
      })
     }
    </>
  )
}

export default ProList