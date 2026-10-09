import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../component/Title";
import { assets } from "../assets/assets";
import CartTotal from "../component/CartTotal";
import "../css/Cart.css";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="cart">
      <div className="cart-title">
        <Title text1="YOUR" text2="CART" />
      </div>

      <div className="cart-items">
        {cartData.map((item) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          if (!productData) return null;

          return (
            <div className="cart-item" key={item._id + item.size}>
              <div className="cart-product">
                <img
                  className="cart-product-image"
                  src={productData.image[0]}
                  alt={productData.name}
                />

                <div className="cart-product-info">
                  <p className="cart-product-name">{productData.name}</p>

                  <div className="cart-product-price">
                    {currency}
                    {productData.price}
                  </div>

                  <div className="cart-product-size">{item.size}</div>
                </div>
              </div>

              <input
                className="cart-quantity"
                type="number"
                min="1"
                defaultValue={item.quantity}
                onChange={(e) =>
                  e.target.value === ""
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
              />

              <img
                className="cart-remove"
                onClick={() => updateQuantity(item._id, item.size, 0)}
                src={assets.bin_icon}
                alt="Remove"
              />
            </div>
          );
        })}
      </div>

      <div className="cart-summary">
        <CartTotal />

        <button
          className="checkout-button"
          onClick={() => navigate("/place-order")}
        >
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
