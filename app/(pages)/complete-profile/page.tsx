import React, { useState } from "react";
import { Form, Input, Select, DatePicker, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import styles from "./ProfileForm.module.scss";

const { Option } = Select;

const ProfileForm: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (info: any) => {
    if (info.file.status === "done") {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(info.file.originFileObj);
    }
  };

  const onFinish = (values: any) => {
    console.log("Form values: ", values);
  };

  return (
<div>
    <div className={styles.stepContent}>
      <h1 className={styles.heading}>Complete your Profile</h1>
      <p className={styles.subheading}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum, lacus
      </p>
</div>
      {/* Profile Picture */}
      <div className={styles.profilePicture}>
        <div className={styles.upload}>
          {profileImage ? (
            <img src={profileImage} alt="Profile" />
          ) : (
            <Upload
              showUploadList={false}
              beforeUpload={() => false}
              onChange={handleImageUpload}
            >
              <UploadOutlined />
              <div>Upload</div>
            </Upload>
          )}
        </div>
        <span className={styles.uploadText}>Add Profile Picture</span>
      </div>

      {/* Form */}
      <Form
        className={styles.form}
        layout="vertical"
        onFinish={onFinish}
      >
        <div className={styles.formRow}>
          <Form.Item
            label={<span className={styles.label}>Name</span>}
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
            style={{ flex: 1 }}
          >
            <Input placeholder="Enter your name"  className={styles.placeholder} />
          </Form.Item>

          <Form.Item
            label={<span className={styles.label}>Date of Birth</span>}
            name="dob"
            rules={[{ required: true, message: "Please select your date of birth" }]}
            style={{ flex: 1 }}
          >
            <DatePicker style={{ width: "100%" }}  className={styles.placeholder}/>
          </Form.Item>
        </div>

        {/* Address and City */}
        <div className={styles.formRow}>
          <Form.Item
            label={<span className={styles.label}>Address</span>}
            name="address"
            rules={[{ required: true, message: "Please enter your address" }]}
            style={{ flex: 1 }}
          >
            <Input placeholder="Enter your address"  className={styles.placeholder}/>
          </Form.Item>

          <Form.Item
            label={<span className={styles.label}>City</span>}
            name="city"
            rules={[{ required: true, message: "Please select your city" }]}
            style={{ flex: 1 }}
          >
            <Select placeholder="Select your city" className={styles.selectWrapper} >
              <Option value="florida">Florida</Option>
              <Option value="newyork">New York</Option>
            </Select>
          </Form.Item>
        </div>

        {/* Gender and Interests */}
        <div className={styles.formRow}>
          <Form.Item
            label={<span className={styles.label}>Gender</span>}
            name="gender"
            rules={[{ required: true, message: "Please select your gender" }]}
            style={{ flex: 1 }}
          >
            <Select placeholder="Select your gender" className={styles.selectWrapper} >
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label={<span className={styles.label}>Interests</span>}

            name="interests"
            style={{ flex: 1 }}
          >
            <Select placeholder="Select your interests" mode="multiple" className={styles.selectWrapper} >
              <Option value="cricket">Cricket</Option>
              <Option value="football">Football</Option>
            </Select>
          </Form.Item>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.completeButton}>
            Confirm
          </Button>
        </Form.Item>
      </Form>



    </div>
  );
};

export default ProfileForm;
