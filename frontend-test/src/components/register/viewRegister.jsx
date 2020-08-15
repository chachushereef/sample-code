import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "../style.css";
import Header from "../header";
import Register from "./register";
import Footer from "../footer";

class ViewRegister extends Component {
  // state = {  }
  render() {
    return (
      <Container>
        <Header />
        <Register />
        <Footer />
      </Container>
    );
  }
}

export default ViewRegister;
