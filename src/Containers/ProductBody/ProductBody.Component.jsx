import React, { Component } from 'react';

// third-party libraries
import { connect } from 'react-redux';

// components
import Product from '../../Components/Products/Product.Component';
import Stats from '../../Components/Stats/Stats.Component';

// actions
import { getStats } from '../../actions/statsActions';

// style
import './ProductBody.css';

class ProductBody extends Component {
  state = {
    product: {},
    stats: {},
  }

  /**
   * React component life cycle hook
   *
   * @memberof ProductBody
   * @param {object} props - Props
   * @param {object} state - State
   * @return {void}
   */
  static getDerivedStateFromProps = (props, state) => {
    const { product } = props;

    if (product !== state.product) return { product }

    return null;
  }

  /**
   * React component life cycle hook
   *
   * @memberof Home
   * @return {void}
   */
  componentDidMount() {
    const {
      product,
      getStats,
    } = this.props;

    getStats(product.id)
      .then(() => {
        const { stats } = this.props;

        this.setState({
          product,
          stats: stats.data
        });
      });
  }
  
  render() {
    const {
      product,
      stats,
    } = this.state;

    return (
      <div className="container productbody__containder">
        <div className="row">
          <div className="col-6">
            <Product
              status={product.status}
              baseCurrency={product.base_currency}
              quoteCurrency={product.quote_currency}
              baseMinSize={product.base_min_size}
              baseMaxSize={product.base_max_size}
              quoteIncrement={product.quote_increment}
              minMarketFunds={product.min_market_funds}
              maxMarketFunds={product.max_market_funds}
            />
          </div>
          <div className="col-2 text-center arrow___container">
            <div className="arrow__name">STATS</div>
            <div className="line"></div>
            <div className="point"></div>
          </div>
          <div className="col-4">
            <Stats
              displayName={product.display_name}
              open={stats.open}
              high={stats.high}
              low={stats.low}
              volume={stats.volume}
              last={stats.last}
              volume30day={stats.volume_30day}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ stats }) => ({ stats });

export default connect(mapStateToProps, { getStats })(ProductBody);
