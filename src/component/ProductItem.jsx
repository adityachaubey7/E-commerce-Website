import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
import '../css/ComponentCss/ProductItem.css'

const ProductItem = ({ image, id, name, price }) => {
  const { currency } = useContext(ShopContext)

  return (
    <Link to={`/product/${id}`} className="product-item">

      <div className="product-image">
        <img src={image[0]} alt={name} />
      </div>

      <p className="product-name">{name}</p>

      <p className="product-price">
        {currency} {price}
      </p>

    </Link>
  )
}

export default ProductItem