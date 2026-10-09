import React, { useContext, useState } from 'react'
import Title from '../component/Title'
import CartTotal from '../component/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import '../css/PlaceOrder.css'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod')

  const { navigate } = useContext(ShopContext)

  return (
    <div className="place-order">

      {/* Left Side - Delivery Information */}

      <div className="delivery-info">

        <div className="delivery-title">
          <Title
            text1="DELIVERY"
            text2="INFORMATION"
          />
        </div>

        <div className="input-row">

          <input
            type="text"
            placeholder="First name"
          />

          <input
            type="text"
            placeholder="Last name"
          />

        </div>

        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="text"
          placeholder="Street"
        />

        <div className="input-row">

          <input
            type="text"
            placeholder="City"
          />

          <input
            type="text"
            placeholder="State"
          />

        </div>

        <div className="input-row">

          <input
            type="number"
            placeholder="Pincode"
          />

          <input
            type="text"
            placeholder="Country"
          />

        </div>

        <input
          type="number"
          placeholder="Phone"
        />

      </div>

      {/* Right Side */}

      <div className="order-right">

        <CartTotal />

        {/* Payment Method */}

        <div className="payment-section">

          <Title
            text1="PAYMENT"
            text2="METHOD"
          />

          <div className="payment-options">

            {/* Stripe */}

            <div
             className={
              method === 'stripe'
                ? 'payment-option selected-method'
                : 'payment-option'
            }
              onClick={() => setMethod('stripe')}
            >
              <p></p>

              <img
                src={assets.stripe_logo}
                alt="Stripe"
              />
            </div>

            {/* Razorpay */}

            <div
             className={
              method === 'razorpay'
                ? 'payment-option selected-method'
                : 'payment-option'
            }
              onClick={() => setMethod('razorpay')}
            >
              <p></p>

              <img
                src={assets.razorpay_logo}
                alt="Razorpay"
              />
            </div>

            {/* Cash on Delivery */}

            <div
             className={
              method === 'cod'
                ? 'payment-option selected-method'
                : 'payment-option'
            }
              onClick={() => setMethod('cod')}
            >
              <p></p>

              <p>CASH ON DELIVERY</p>
            </div>

          </div>

          <button
            className="place-order-button"
            onClick={() => navigate('/order')}
          >
            PLACE ORDER
          </button>

        </div>

      </div>

    </div>
  )
}

export default PlaceOrder