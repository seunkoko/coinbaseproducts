import React, { Component, Fragment } from 'react';

// third-party libraries
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import toastr from 'toastr';

// components
import Spinner from '../../Components/Spinner/Spinner.component';
import Header from '../../Components/Header/Header.Component';
import ProductBody from '../ProductBody/ProductBody.Component';

// actions
import { getProducts } from '../../actions/productActions';

// style
import './Home.css';

export class Home extends Component {
  state = {
    paginatedProducts: [],
    page: 1,
    perPage: 2,
    total: 0,
    totalPages: 0,
    prevPage: 0,
    nextPage: 0,
    products: []
  }

  /**
   * React component life cycle hook
   *
   * @memberof Home
   * @param {object} props - Props
   * @param {object} state - State
   * @return {void} - no return
   */
  static getDerivedStateFromProps = (props, state) => {
    const { products } = props;

    if (products.data !== state.products && products.data) return { products: products.data };

    return null;
  }

  /**
   * React component life cycle hook
   *
   * @memberof Home
   * @return {void}
   */
  componentDidMount() {
    const { getProducts } = this.props;

    getProducts()
      .then(() => {
        const { products } = this.props;

        if (!products.data) return toastr.error('Something went wrong. No products found', 'Error');
        this.setState({ products: products.data });
        this.handlePageClick();
      })
      .catch((error) => toastr.error('Something went wrong, no products found', 'Error'));
  }

  handlePageClick = (data = { selected: 0}) => {
    const { selected } = data;
    const { products } = this.state;
    const { perPage } = this.state;
    let {
      page,
      paginatedProducts,
    } = this.state;

    page = selected ? Math.ceil(selected) + 1 : 1;
    const offset = (page - 1) * perPage;
    const totalPages = Math.ceil(products.length / perPage);

    paginatedProducts = products.slice(offset).slice(0, perPage);

    this.setState({
      page: page,
      total: products.length,
      prevPage: page - 1 ? page - 1 : null,
      nextPage: (totalPages > page) ? page + 1 : null,
      totalPages,
      paginatedProducts,
    });
  }

  render() {
    const { products: productsProp } = this.props;
    const {
      paginatedProducts,
      totalPages,
    } = this.state;
    const paginate = <ReactPaginate
      previousLabel={<i className="fas fa-chevron-circle-left prev__page"></i>}
      nextLabel={<i className="fas fa-chevron-circle-right next__page"></i>}
      breakLabel={<a href="#">...</a>} // eslint-disable-line
      breakClassName='break-me'
      pageCount={totalPages ? totalPages : 0}
      marginPagesDisplayed={3}
      pageRangeDisplayed={totalPages > 9 ? 10 : totalPages}
      onPageChange={this.handlePageClick}
      containerClassName='pagination justify-content-center'
      pageClassName='page-item'
      pageLinkClassName='page-link'
      nextClassName='page-item next-button'
      previousClassName='page-item'
      previousLinkClassName='page-link'
      nextLinkClassName='page-link'
      disabledClassName='disabled'
      activeClassName='active'
    />;

    return (
      <Fragment>
        <Header />
        <div className="container homebody__container">
         { 
           productsProp.pending 
            ? <Spinner />
            : (
              paginatedProducts.length <= 0
                ? (
                  <div className="home__error">No products to display</div>
                )
                : paginatedProducts.map((product) => (
                    <ProductBody
                      key={product.id}
                      product={product}
                    />
                  ))
              )
          }
          <nav>
            { totalPages > 1 ? paginate : null }
          </nav>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps, { getProducts })(Home);
