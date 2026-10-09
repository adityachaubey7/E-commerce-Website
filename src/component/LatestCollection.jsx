import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import '../css/ComponentCss/LatestCollection.css'
import ProductItem from './ProductItem'

const LatestCollection = () => {
  const { products } = useContext(ShopContext)

  const [latestProduct, setLatestProduct] = useState([])

  useEffect(() => {
    setLatestProduct(products.slice(0, 10))
  }, [products])

  return (
    <div className="latest-collection">

      <div className="latest-title">
        <Title text1="LATEST" text2="COLLECTION" />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ducimus aliquam, aperiam dicta doloribus magnam rerum.
        </p>
      </div>

      <div className="latest-products">
        {
          latestProduct.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        }
      </div>

    </div>
  )
}

export default LatestCollection