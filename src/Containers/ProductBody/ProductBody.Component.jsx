import React, { Component } from 'react';

// components
import Product from '../../Components/Products/Product.Component';
import Stats from '../../Components/Stats/Stats.Component';

// style
import './ProductBody.css';

class ProductBody extends Component {
  render() {
    return (
      <div className="container productbody__containder">
        <div className="row">
          <div className="col-6">
            <Product />
          </div>
          <div className="col-2 text-center arrow___container">
            <div className="arrow__name">STATS</div>
            <div className="line"></div>
            <div className="point"></div>
          </div>
          <div className="col-4">
            <Stats />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductBody;
