import React, { Component } from 'react';

export default class ProductList extends Component {
  render() {
    const { products } = this.props;

    return (
      <div>
        <section className="products-container">
          {products.map(product => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} />
              <div className="product-item-details">
                <h3>{product.name}</h3>
                <p>{product.price}$</p>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  }
}
