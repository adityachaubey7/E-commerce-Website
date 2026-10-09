import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import '../css/ComponentCss/BestSellers.css'

const BestSellers = () => {
  const { products } = useContext(ShopContext)

  const [bestseller, setBestSeller] = useState([])

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller)
    setBestSeller(bestProduct.slice(0, 5))
    console.log("All products:", products)
    console.log("Best products:", bestProduct)
  }, [products])

  return (
    <div className="best-sellers">

      <div className="best-sellers-title">
        <Title text1="BEST" text2="SELLERS" />

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Cumque natus ducimus assumenda deleniti a quam optio fugit
          quibusdam, eligendi, illum, esse libero quasi.
        </p>
      </div>

      <div className="best-sellers-products">
        {bestseller.map((item,index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>

    </div>
  )
}

export default BestSellers