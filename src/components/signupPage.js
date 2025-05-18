import React, { useState, useEffect } from "react";
import { Form, Input, Button, Row, Col, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export default function SignUpComponent() {
  const [userData, setuserData] = useState(null);
  const [data, setData] = useState({
    id: Math.random(),
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    confirmPassword: null,
  });

  const inputHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async () => {
    if (data.password != data.confirmPassword) {
      message.error("confirm password dose't match");
    } else {
      if (userData == null || userData == undefined) {
        localStorage.setItem("Authlist", JSON.stringify([data]));
      } else {
        await userData.push(data);
        localStorage.setItem("Authlist", JSON.stringify(userData));
      }

      message.success("Account Created Successfully");
    }
  };

  useEffect(() => {
    let usrInfo = JSON.parse(localStorage.getItem("Authlist"));
    setuserData(usrInfo);
  }, []);

  return (
    <div>
      <Form name="normal_login" className="login-form" onFinish={submitHandler}>
        <Row justify="space-between">
          <Col xxl={11}>
            <Form.Item
              name="firstName"
              rules={[
                {
                  required: true,
                  message: "Please enter your first name!",
                },
              ]}
            >
              <Input
                name="firstName"
                placeholder="first name"
                onChange={(e) => inputHandler(e)}
              />
            </Form.Item>
          </Col>
          <Col xxl={11}>
            <Form.Item
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "Please enter your last name!",
                },
              ]}
            >
              <Input
                name="lastName"
                placeholder="last name"
                onChange={(e) => inputHandler(e)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your email!",
            },
          ]}
        >
          <Input
            name="email"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
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
            name="password"
            placeholder="Password"
            onChange={(e) => inputHandler(e)}
          />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Please input your confirm Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
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
