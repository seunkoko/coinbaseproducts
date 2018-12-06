import React from 'react';

// assets
import logo from '../../assets/images/cryptoicon.png';

// style
import './Product.css';

const Product = ({
  baseCurrency,
  quoteCurrency,
  baseMinSize,
  baseMaxSize,
  quoteIncrement,
  status,
  minMarketFunds,
  maxMarketFunds,
}) => (
  <div className="contianer product___container">
    <div className="product_details">
      <div className="row">
        <div className="col-2">
          <img
            className="logo"
            src={logo}
            alt="icon"
          />
        </div>
        <div className="col-3 product__text">
          {baseCurrency}
          <div className="currency__type">Base Currency</div>
        </div>
        <div className="col-2">
          <div className="product__line"></div>
        </div>
        <div className="col-3 product__text">
          {quoteCurrency}
          <div className="currency__type">Quote Currency</div>
        </div>
      </div>

      <div className="product__description__container">
        <div className="row product__description__row">
          <div className="col-5 product__description__title">
            STATUS
          </div>
          <div className="col-5 product__description">
            <div className={status === 'online' ? "online__status" : "offline__status"}></div>
            {status}
          </div>
        </div>

        <div className="row product__description__row">
          <div className="col-5 product__description__title">
            BASE MIN SIZE
          </div>
          <div className="col-5 product__description">
            {baseMinSize}
          </div>
        </div>

        <div className="row product__description__row">
          <div className="col-5 product__description__title">
            BASE MAX SIZE
          </div>
          <div className="col-5 product__description">
            {baseMaxSize}
          </div>
        </div>

        <div className="row product__description__row">
          <div className="col-5 product__description__title">
            QUOTE INCREMENT
          </div>
          <div className="col-5 product__description">
            {quoteIncrement}
          </div>
        </div>

        <div className="row product__description__row">
          <div className="col-5 product__description__title">
            MIN MARKET FUNDS
          </div>
          <div className="col-5 product__description">
            {minMarketFunds}
          </div>
        </div>

        <div className="row product__description__row">
          <div className="col-5 product__description__title">
            MAX MARKET FUNDS
          </div>
          <div className="col-5 product__description">
            {maxMarketFunds}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Product;
