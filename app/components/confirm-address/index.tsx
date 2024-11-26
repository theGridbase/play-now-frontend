import { Form, Input, Select, Button } from 'antd';
import { useState } from 'react';
// import { useRouter } from 'next/router';

const { Option } = Select;

const ConfirmAddressStep = ({ onNext }) => {
  const [form] = Form.useForm();
//   const router = useRouter();

  // Function to handle form submission
  const onFinish = (values:any) => {
    console.log('Form values:', values);
    onNext(); // Call the next step handler
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', textAlign: 'center' }}>
      <h2>Confirm your address</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          country: 'United States (+1)',
          city: 'Islamabad',
          state: 'Islamabad',
        }}
      >
        <Form.Item
          name="country"
          label="Country / region"
          rules={[{ required: true, message: 'Please select your country!' }]}
        >
          <Select>
            <Option value="United States (+1)">United States (+1)</Option>
            <Option value="Pakistan (+92)">Pakistan (+92)</Option>
            <Option value="India (+91)">India (+91)</Option>
            {/* Add more options as needed */}
          </Select>
        </Form.Item>

        {/* Street Address */}
        <Form.Item
          name="street"
          label="Street address"
          rules={[{ required: true, message: 'Please enter your street address!' }]}
        >
          <Input placeholder="Street address" />
        </Form.Item>

        {/* City */}
        <Form.Item
          name="city"
          label="City / town / village"
          rules={[{ required: true, message: 'Please enter your city!' }]}
        >
          <Input placeholder="City / town / village" />
        </Form.Item>

        {/* State / Province */}
        <Form.Item
          name="state"
          label="Province / state / territory (if applicable)"
          rules={[{ required: true, message: 'Please enter your state or province!' }]}
        >
          <Input placeholder="Province / state / territory" />
        </Form.Item>

        {/* Postal Code */}
        <Form.Item name="postalCode" label="Postal code (if applicable)">
          <Input placeholder="Postal code" />
        </Form.Item>

        {/* Next Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ float: 'right' }}>
            Next
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ConfirmAddressStep;
