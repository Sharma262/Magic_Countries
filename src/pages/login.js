import React from "react";
import { Row, Col } from "antd";
import LoginComponent from "../components/loginPage";
import SignUpComponent from "../components/signupPage";

export default function Login() {
  return (
    <div className="userloginPanel">
      <Row justify="center">
        <Col
          xxl={9}
          xl={10}
          lg={13}
          md={16}
          sm={19}
          xs={23}
          style={{ padding: "20px" }}
          className="ujjk_0-2"
        >
          <h1>LOGIN </h1>
          <LoginComponent />
        </Col>
        <Col
          xxl={9}
          xl={10}
          lg={13}
          md={16}
          xs={23}
          sm={19}
          style={{ padding: "20px" }}
        >
          <h1> CREATE ACCOUNT</h1>
          <SignUpComponent />
        </Col>
      </Row>
    </div>
  );
}
