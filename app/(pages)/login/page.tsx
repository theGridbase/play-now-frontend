"use client"
import React, { useState } from "react";
import { Steps, Form, Input, Button, Checkbox } from "antd";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import styles from "./login.module.scss";
import ProfileForm from "../complete-profile/page";
import VerificationCode from "../two-step/page";
import Link from "next/link";

const { Step } = Steps;

const Login: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // Handlers for steps navigation
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const handleLogin = () => {
    nextStep(); // Proceed to the next step after login
  };

  const handleComplete = () => {
    console.log("Navigate to <Loginas /> or desired page");
    // Add navigation logic here, e.g., router.push("/loginas");
  };

  return (
    <div className={styles.container}>
      {/* Left Side: Login Form */}
      <div className={styles.formContainer}>
        <Steps
          current={currentStep}
          className={styles.steps}
          progressDot // Enable dot instead of number
        >
          <Step title="Login Process" />
          <Step title="2-Step Verification" />
          <Step title="Profile Completion" />
        </Steps>

        {currentStep === 0 && (
          <div className={styles.stepContent}>
            <h1 className={styles.heading}>Login Now!</h1>
            <p className={styles.subheading}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <Form layout="vertical" className={styles.loginForm} onFinish={handleLogin}>
              <Form.Item
                label={<span className={styles.label}>Email Address or Phone Number</span>}
                name="email"
                rules={[{ required: true, message: "Please input your email!" }]}
              >
                <Input placeholder="Your email" className={styles.placeholder} />
              </Form.Item>

              <Form.Item
                label={<span className={styles.label}>Password</span>}
                name="password"
                rules={[{ required: true, message: "Please input your password!" }]}
              >
                <Input.Password placeholder="Min 6 characters" className={styles.placeholder} />
              </Form.Item>

              <div className={styles.extraOptions}>
                <Checkbox className={styles.remember}>Remember me</Checkbox>
                <Link className={styles.forgotPassword} href="/forgetPassword">
                  Forgot password?
                </Link>
              </div>

              <Form.Item>
                <Button type="primary" htmlType="submit" className={styles.loginButton}>
                  Login
                </Button>
              </Form.Item>

              <div className={styles.separator}>
                <span>Or Login with</span>
              </div>
              <div className={styles.socialButtons}>
                <Button icon={<GoogleOutlined />} className={styles.socialButton}>
                  Google
                </Button>
                <Button icon={<FacebookOutlined />} className={styles.socialButton}>
                  Facebook
                </Button>
              </div>

              <p className={styles.register}>
                Not registered yet? <Link href="/signup" className={styles.create}>Create an Account</Link>
              </p>
            </Form>
          </div>
        )}

{currentStep === 1 && (
  <VerificationCode nextStep={nextStep} />
)}


        {currentStep === 2 && (
<ProfileForm/>
        )}
      </div>
      <div className={styles.imageContainer}>
  {currentStep === 0 ? (
    <img src="/assets/svgs/login.svg" alt="Stadium" className={styles.image} />
  ) : currentStep === 1 ? (
    <img src="/assets/svgs/verification.svg" alt="verficationium" className={styles.image} />
  ): currentStep === 2 ? (
    <img src="/assets/svgs/profile.svg" alt="verficationium" className={styles.image} />
  ):<></>}
</div>

    </div>
  );
};

export default Login;
