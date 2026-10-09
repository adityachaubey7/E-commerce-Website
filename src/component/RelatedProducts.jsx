import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import '../css/ComponentCss/RelatedProducts.css'

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext)

  const [related, setRelated] = useState([])

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice()

      productCopy = productCopy.filter(
        (item) => category === item.category
      )

      productCopy = productCopy.filter(
        (item) => subCategory === item.subCategory
      )

      setRelated(productCopy.slice(0, 5))
    }
  }, [products, category, subCategory])

  return (
    <div className="related-products">

      {/* Heading */}
      <div className="related-title">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>

      {/* Products */}
      <div className="related-product-grid">
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>

    </div>
  )
}

export default RelatedProducts
