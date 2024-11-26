"use client"

import { Button, Form, Input } from 'antd';
import Image from 'next/image';
import styles from './bank-details.module.scss';

const BankDetailsStep = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Bank Details Submitted:', values);
    // Handle form submission
  };

  return (
    <div className={styles.bankDetailsContainer}>
      <div className={styles.imageSection}>
        <Image src="/assets/svgs/card.svg" alt="Bank card" width={652} height={456} />
      </div>

      <div className={styles.formSection}>
        <h2>Setup Bank details</h2>
        <p>You can change it any time</p>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className={styles.paymentForm}
        >
          {/* Bank Name */}
          <Form.Item
            label="Bank Name"
            name="bankName"
            rules={[{ required: true, message: 'Please enter your bank name!' }]}
          >
            <Input placeholder="e.g., Standard Chartered" />
          </Form.Item>

          {/* Account Number */}
          <Form.Item
            label="Account Number"
            name="accountNumber"
            rules={[{ required: true, message: 'Please enter your account number!' }]}
          >
            <Input placeholder="e.g., 1234-4567-789" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.saveButton}>
              Save Payment Info
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default BankDetailsStep;
