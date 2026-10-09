import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../component/Title";
import "../css/Order.css";

const Order = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="orders">
      <div className="orders-title">
        <Title text1="MY" text2="ORDERS" />
      </div>

      <div className="orders-list">
        {products.slice(1, 4).map((item, index) => (
          <div className="order-item" key={index}>
            <div className="order-product">
              <img className="order-image" src={item.image[0]} alt="" />

              <div className="order-info">
                <p className="order-name">{item.name}</p>

                <div className="order-details">
                  <p>
                    {currency}
                    {item.price}
                  </p>

                  <p>Quantity : 1</p>

                  <p>Size : M</p>
                </div>

                <p className="order-date">
                  Date
                  <span> 5 sept 2026</span>
                </p>
              </div>
            </div>

            <div className="order-status">
              <div className="status">
                <p></p>
                <p>Ready to ship</p>
              </div>

              <button>Track order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
