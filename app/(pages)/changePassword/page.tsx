"use client"
import React, { useState } from "react";
import { Steps, Form, Input, Button, Checkbox } from "antd";
import styles from "./changepassword.module.scss";


const { Step } = Steps;

const ChangePassword: React.FC = () => {
 

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        

    
          <div className={styles.stepContent}>
            <h1 className={styles.heading}>Change Password</h1>
            <p className={styles.subheading}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <Form layout="vertical" className={styles.loginForm}>
             <Form.Item
                label={<span className={styles.label}>New Password</span>}
                name="password"
                rules={[{ required: true, message: "Please input your New Password!" }]}
              >
                <Input placeholder="Password" className={styles.placeholder} />
              </Form.Item> 

              <Form.Item
                label={<span className={styles.label}>New Password</span>}
                name="password"
                rules={[{ required: true, message: "Confirm Your Password" }]}
              >
                <Input placeholder="Password" className={styles.placeholder} />
              </Form.Item>
            

              <Form.Item>
                <Button type="primary" htmlType="submit" className={styles.loginButton}>
                  Continue
                </Button>
              </Form.Item>

             
            </Form>
          </div>
      
      </div>
      <div className={styles.imageContainer}>

    <img src="/assets/svgs/change.svg" alt="Stadium" className={styles.image} />

  
</div>

    </div>
  );
};

export default ChangePassword;
