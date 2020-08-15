import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "../style.css";
import Header from "../header";
import Login from "./login";
import Footer from "../footer";

class ViewLogin extends Component {
  // state = {  }
  render() {
    return (
      <Container>
        <Header />
        <Login />
        <Footer />
      </Container>
    );
  }
}

export default ViewLogin;
