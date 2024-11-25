import React, { useState } from "react";
import { Input, Button } from "antd";
import styles from "./two-step.module.scss";

interface VerificationCodeProps {
  nextStep: () => void;
}

const VerificationCode: React.FC<VerificationCodeProps> = ({ nextStep }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  // Handles OTP input changes
  const handleInputChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Limit to one character
    setOtp(newOtp);

    // Automatically focus the next input
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

 
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleSubmit = () => {
    console.log("Entered OTP:", otp.join(""));
    
    
    nextStep();
  };

  return (
    <div className={styles.container}>
      <div className={styles.verificationBox}>
        <h1 className={styles.heading}>Verification Code</h1>
        <p className={styles.subheading}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum, lacus
        </p>

        {/* OTP Inputs */}
        <div className={styles.otpInputContainer}>
          {otp.map((_, index) => (
            <Input
              key={index}
              id={`otp-input-${index}`}
              className={styles.otpInput}
              value={otp[index]}
              maxLength={1}
              onChange={(e) => handleInputChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>

       
        <div className={styles.resend}>Resend Code?</div>

        <div className={styles.changePhone}>Change Phone Number</div>

        
        <Button
          type="primary"
          className={styles.confirmButton}
          onClick={handleSubmit}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default VerificationCode;
