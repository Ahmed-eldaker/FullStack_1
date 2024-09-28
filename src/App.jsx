import { Component, Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Product from "./Product";
import Cart from "./Componant/Cart";
import Navbar from "./Componant/Navbar";

class App extends Component {
  // const [count, setCount] = useState(0);
  state = {
    Products: [
      { id: 1, name: "Burger", count: 2 },
      { id: 2, name: "Fries", count: 4 },
      { id: 3, name: "Cola", count: 3 },
    ],
  };

  handleIncrement = (product) => {
    // clone
    const newProducts = [...this.state.Products];
    const index = newProducts.indexOf(product);
    newProducts[index] = { ...newProducts[index] };
    // edit
    newProducts[index].count++;
    // setState
    this.setState({ Products: newProducts });
  };
  handleDecrement = (product) => {
    // clone
    const newProducts = [...this.state.Products];
    const index = newProducts.indexOf(product);
    newProducts[index] = { ...newProducts[index] };
    // edit
    newProducts[index].count--;
    // setState
    this.setState({ Products: newProducts });
  };
  handleReset = () => {
    // clone
    let Products = [...this.state.Products];
    // edit
    Products = Products.map((p) => {
      p.count = 0;
      return p;
    });
    this.setState({ Products });
    console.log(Products);
  };
  handleDelete = (product) => {
    // clone
    // const newProduct=[...this.state.Products]
    // edit
    const Products = this.state.Products.filter((p) => p.id !== product.id);
    // set state
    this.setState({ Products });
  };
  render() {
    return (
      <>
        <Navbar />
        <Cart
          Products={this.state.Products}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleReset={this.handleReset}
          handleDelete={this.handleDelete}
        />
      </>
    );
  }
}
export default App;
