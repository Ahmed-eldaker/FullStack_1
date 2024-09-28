import React, { Component } from "react";
import Product from "./../Product";

export default class Cart extends Component {
  //   props vs state

  render() {
    let {
      Products,
      handleDelete,
      handleIncrement,
      handleDecrement,
      handleReset,
    } = this.props;
    // console.log(Products);
    return (
      <>
        {!Products.length && <h2>there is no products</h2>}

        <button className="btn btn-info" onClick={handleReset}>
          Reset
        </button>
        {Products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleDelete={() => handleDelete(product)}
            handleIncrement={() => handleIncrement(product)}
            handleDecrement={() => handleDecrement(product)}
          />
        ))}
      </>
    );
  }
}
