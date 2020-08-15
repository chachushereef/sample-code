import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Footer extends Component {
  // state = {  }
  render() {
    return (
      <div style={{ backgroundColor: "#2b2b2d" }} className="pb-4">
        <Row>
          <Col></Col>
          <Col xs={6}>
            <hr className="bg-secondary my-1" />
            <div>
              <p className="text-secondary text-center">
                Copyright &copy; 2018 Onwards Media Group Pte Ltd
              </p>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
