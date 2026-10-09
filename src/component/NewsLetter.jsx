import React from 'react'
import '../css/ComponentCss/NewsLetter.css'

const NewsLetter = () => {
    const onSuubmitHandler=(event)=>{
        event.preventDefault()
    }
  return (
    <div className="newsletter">

      <p className="newsletter-title">
        Subscribe now and get 20% off
      </p>

      <p className="newsletter-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Nihil vel ex magni cumque iste nisi aperiam, iure ratione
        placeat itaque?
      </p>

      <form className="newsletter-form" onSubmit={onSuubmitHandler}>

        <input
          className="newsletter-input"
          type="email"
          placeholder="enter your email"
          required
        />

        <button
          className="newsletter-button"
          type="submit"
        >
          SUBSCRIBE
        </button>

      </form>

    </div>
  )
}

export default NewsLetter