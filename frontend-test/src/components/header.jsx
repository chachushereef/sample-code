import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import logo from "../image/logo.png";

class Header extends Component {
  // state = {  }
  render() {
    return (
      <div>
        <div className="" style={{ backgroundColor: "#1b1b1d" }}>
          <Image src={logo} className="mx-auto d-block" height="200px"></Image>
        </div>

        <div
          style={{ backgroundColor: "#222224" }}
          className="text-white text-center"
        >
          <p className="text-uppercase py-3 mb-0">
            video management and integrated support system
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
