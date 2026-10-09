import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../component/RelatedProducts";
import "../css/Product.css";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    const product = products.find((item) => item._id == productId);

    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="product">
      {/* Product Details */}

      <div className="product-details">
        {/* Images */}

        <div className="product-images">
          <div className="thumbnail-images">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                alt=""
              />
            ))}
          </div>

          <div className="main-image">
            <img src={image} alt="" />
          </div>
        </div>

        {/* Information */}

        <div className="product-info">
          <h1>{productData.name}</h1>

          <div className="product-rating">
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_dull_icon} alt="" />

            <p>(122)</p>
          </div>

          <p className="product-price">
            {currency}
            {productData.price}
          </p>

          <p className="product-description">{productData.description}</p>

          {/* Size */}

          <div className="product-size">
            <p>Select Size</p>

            <div className="size-buttons">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={item === size ? "selected-size" : ""}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button onClick={()=>addToCart(productData._id,size)} className="add-cart">ADD TO CART</button>

          <hr />

          <div className="product-policy">
            <p>100% original product</p>
            <p>Cash on delivery is present for this project</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>

      {/* Description */}

      <div className="product-description-section">
        <div className="description-heading">
          <b>DESCRIPTION</b>
          <b>REVIEWS (122)</b>
        </div>

        <div className="description-text">
          <p>
            E-commerce website is a website where users can browse, search, buy,
            and pay for products or services online.
          </p>

          <p>
            An e-commerce website is an online shopping platform that allows
            customers to view products, add them to a cart, place orders, and
            make payments online.
          </p>
        </div>
      </div>

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div></div>
  );
};

export default Product;
