import React, { Component } from "react";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";

export default class Product extends Component {
  // increment = () => {
  //   // this.setState({ count: this.state.count + 1 });
  // };
  decrement = () => {
    // this.setState({ count: this.state.count - 1 });
  };
  render() {
    let { handleDelete, product, handleIncrement, handleDecrement } =
      this.props;
    // let [a, c, b] = [1, 2, 3, 5];
    // let { x, y } = { a: 1, b: 2 };
    return (
      <>
        <div>
          <span className="p-2 me-2 bg-primary">{product.name}</span>
          <span
            className={
              product.count > 0 ? "p-2 me-2 bg-primary" : "p-2 me-2 bg-danger"
            }
          >
            {product.count}
          </span>
          <button
            className="btn btn-success"
            onClick={() => handleIncrement(product)}
          >
            <IoMdAdd />
          </button>

          <button
            className="btn btn-warning"
            onClick={() => handleDecrement(product)}
          >
            -
          </button>
          {product.count <= 0 && (
            <span className="alert p-2 bg-danger-subtle">there is no data</span>
          )}
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(product)}
          >
            <MdDelete />
          </button>
        </div>
      </>
    );
  }
}
