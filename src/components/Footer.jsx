import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";


const Footer = () => {

  return (
    <footer className="footer">
      <div className="title-footer">
        <h2>Let's get start on something great</h2>
        <p>Writing everything you want</p>
        <button>Let's start</button>
      </div>
      <p>&copy; 2023 MyWebSite. All rights reserved.</p>

    </footer>
  );
};

export default Footer;