"use client"
import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import styles from "./signup.module.scss";
import Link from "next/link";

const CreateAccount: React.FC = () => {
  // Form Submission Handler
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.error("Failed:", errorInfo);
  };

  return (
    <div className={styles.container}>
      {/* Left Image Section */}
      <div className={styles.imageContainer}></div>

      {/* Right Form Section */}
      <div className={styles.formContainer}>
        <div className={styles.formContent}>
          <h1 className={styles.heading}>Create Account</h1>
          <p className={styles.subheading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum, lacus
          </p>

          <Form
            className={styles.form}
            name="create_account"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
          >
            {/* Full Name */}
            <Form.Item

              label={<span className={styles.label}>Full Name</span>}

              name="fullName"
              rules={[
                { required: true, message: "Please enter your full name" },
                { min: 3, message: "Name must be at least 3 characters" },
              ]}
            >
              <Input placeholder="Full Name" className={styles.placeholder} />
            </Form.Item>

            {/* Email Address */}
            <Form.Item
              label={<span className={styles.label}>Email Address</span>}

              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email address" },
              ]}
            >
              <Input placeholder="Email Address" type="email" className={styles.placeholder} />
            </Form.Item>

            {/* Password */}
            <Form.Item
              label={<span className={styles.label}>Password </span>}

              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
                { min: 8, message: "Password must be at least 8 characters" },
              ]}
            >
              <Input.Password placeholder="Password" className={styles.placeholder} />
            </Form.Item>

            {/* Terms and Conditions */}
            <Form.Item
              name="terms"
              valuePropName="checked"
              rules={[
                { validator: (_, value) => (value ? Promise.resolve() : Promise.reject("You must accept terms & conditions")) },
              ]}
            >
              <Checkbox>
                <span className={styles.checkboxLabel}>
                  I accept all the terms & conditions
                </span>
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className={styles.loginButton}>
                Sign up
              </Button>
            </Form.Item>
            <div className={styles.separator}>
              <span>Or Signup with</span>
            </div>
            <div>
              <Button icon={<GoogleOutlined />} className={styles.googleButton}>
                Sign in with Google
              </Button>
            </div>
            <div className={styles.footer}>
              Already have an Account? <Link className={styles.a} href="/login">Login Now</Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
