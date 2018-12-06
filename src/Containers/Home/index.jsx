import React, { Component, Fragment } from 'react';

// components
import Header from '../../Components/Header/Header.Component';
import ProductBody from '../ProductBody/ProductBody.Component';

// style
import './Home.css';

class Home extends Component {
  render() {
    // const { products } = this.props;
    const products = [];

    return (
      <Fragment>
        <Header />
        <div className="container homebody__container">
          {
            products.map((product) => (
              <ProductBody product={product} />
            ))
          }
        </div>
      </Fragment>
    );
  }
}

export default Home;
