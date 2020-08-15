import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "./style.css";
import Header from "./header";
import Footer from "./footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/button";
import Form from "react-bootstrap/form";
import Cookies from "js-cookie";

export const getAccessToken = () => Cookies.get("access_token");
export const getRefreshToken = () => Cookies.get("refresh_token");
export const getUserEmail = () => Cookies.get("user_email");
export const isAuthenticated = () => !!getAccessToken();

class ViewHome extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      access_token: "",
      refresh_token: "",
      email: "",
    };
  }

  componentWillMount() {
    if (!isAuthenticated()) {
      window.location = "/login";
    } else {
      this.setState({
        access_token: getAccessToken(),
        refresh_token: getRefreshToken(),
        email: getUserEmail(),
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    Cookies.remove("user_email");

    window.location = "/login";
  }

  render() {
    return (
      <Container>
        <Header />

        <div style={{ backgroundColor: "#2b2b2d" }} className="py-5">
          <Row>
            <Col></Col>
            <Col xs={6}>
              <div>
                <Form.Control
                  type="text"
                  placeholder={`Signed in as "${this.state.email}"`}
                  readOnly
                />
              </div>
              <div className="pt-2">
                <p className="text-secondary py-0 text-right">
                  <Button onClick={this.onSubmit}>Logout</Button>
                </p>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </div>

        <Footer />
      </Container>
    );
  }
}

export default ViewHome;
