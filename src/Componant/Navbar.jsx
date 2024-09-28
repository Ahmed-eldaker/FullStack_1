import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark  bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <span className=" bg-primary-subtle rounded-2 px-2 ">2</span>
          </div>
        </nav>
      </>
    );
  }
}
