import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom'
//import logo from '../logo.svg';
import logo from '../images/logo.png';
import Axios from 'axios';

const Login = (props) => {

  const history = useHistory();
 // props.updateLogin(false);
  localStorage.removeItem('token');

  const onFinish = (values) => {
    //console.log('Received values of form: ', values);
   // props.updateLogin(true);
      const res = Axios.post(
        "http://localhost:8000/api/login",values)
        .then(function(response)  {
          console.log(response.data);
          if(response.data.login) {
            history.push("/"); // redirects to discussion page
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('user',JSON.stringify(response.data.data));
           // props.updateLogin(true);
          } else {
            alert("else "+response.data.message)
          }
        })
        .catch(error => {
          alert("catch "+error);
        });
  };

  return (
    <div className="login">
        <div className="loginbg">
            <div className="loginmn">
            <div className="loginlogo">
                    <img src={logo} alt="" />
                </div>
            <Form
        name="normal_login"
        className="login-form"
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        >
        <Form.Item
            name="email"
            rules={[
            {
                required: true,
                message: 'Please input your Username / E-mail!',
            },
            ]}
        >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
            name="password"
            rules={[
            {
                required: true,
                message: 'Please input your Password!',
            },
            ]}
        >
            <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Enter your password"
            />
        </Form.Item>
       

        <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
            </Button>
            Or <Link to="/register">register now!</Link>
        </Form.Item>
        </Form>
               
            </div>
        </div>
    </div>
  );
};
export default Login