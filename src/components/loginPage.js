import React, { useState, useEffect } from "react";
import { Form, Input, Button, message, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
  const Navigate = useNavigate();
  const [cred, setCred] = useState(null);
  const [userHandler, setuserHandler] = useState(false);

  const [data, setData] = useState({
    email: null,
    password: null,
  });

  useEffect(() => {
    let usrInfo = JSON.parse(localStorage.getItem("Authlist"));
    setCred(usrInfo);
  }, [data]);

  const inputHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = () => {
    cred?.forEach((e) => {
      if (e.email == data.email) {
        if (e.password == data.password) {
          localStorage.setItem(
            "userDetails",
            JSON.stringify({ name: e.firstName, userId: e.password })
          );
          message.success("Login successfully");
          Navigate("/");
        }
      } else if (e.email !== data.email) {
        setuserHandler(true);
        setTimeout(() => {
          setuserHandler(false);
        }, 1500);
      }
    });
  };

  return (
    <div>
      {userHandler && (
        <div className="alert">
          <Alert message="Invalid Username and Password " type="error" />{" "}
        </div>
      )}

      <Form
        name="normal_login"
        className="login-form"
        onFinish={() => submitHandler()}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please enter your Username!",
            },
          ]}
        >
          <Input
            type="email"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            name="email"
            onChange={(e) => inputHandler(e)}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => inputHandler(e)}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
