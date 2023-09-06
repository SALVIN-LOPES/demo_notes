import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Col } from "react-bootstrap";

const Header = () => {
  return (
    <div className="app-header">
      <Link to={"/"}>
        <h1>Smart Notes</h1>
      </Link>
    </div>
  );
};

export default Header;
