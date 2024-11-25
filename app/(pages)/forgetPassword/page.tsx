"use client"
import React, { useState } from "react";
import { Steps, Form, Input, Button, Checkbox } from "antd";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import styles from "./fogetpassword.module.scss";
import Link from "next/link";


const forgetPassword: React.FC = () => {
 

  return (
    <div className={styles.container}>
      {/* Left Side: Login Form */}
      <div className={styles.formContainer}>
        

    
          <div className={styles.stepContent}>
            <h1 className={styles.heading}>Forget Password</h1>
            <p className={styles.subheading}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <Form layout="vertical" className={styles.loginForm}>
              <Form.Item
                label={<span className={styles.label}>Email Address or Phone Number</span>}
                name="email"
                rules={[{ required: true, message: "Please input your email!" }]}
              >
                <Input placeholder="Your email" className={styles.placeholder} />
              </Form.Item>
              <div className={styles.extraOptions}>
                
                <Link className={styles.forgotPassword} href="/login">
                 Back To Login
                </Link>
              </div>
              

              <Form.Item>
                <Link href=""></Link>
                <Button type="primary" htmlType="submit" className={styles.loginButton}>
                  Continue
                </Button>
              </Form.Item>

             
            </Form>
          </div>
      
      </div>
      <div className={styles.imageContainer}>

    <img src="/assets/svgs/forget.svg" alt="Stadium" className={styles.image} />

  
</div>

    </div>
  );
};

export default forgetPassword;
