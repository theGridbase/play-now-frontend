// components/Footer.tsx
import React from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './Footer.module.scss';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Image src="/assets/svgs/logo.svg" width={100} height={100} alt=""/>
          <p className={styles.description}>We give you the best stadiums in town</p>
        </div>
        <div className={styles.linksSection}>
          <div className={styles.column}>
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Local Service Provider</li>
              <li>Travel agencies</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>Help</h4>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>Newsletter</h4>
            <div className={styles.newsletter}>
              <Input
                className={styles.emailInput}
                placeholder="Enter your email address"
                suffix={<SearchOutlined />}
              />
              <Button className={styles.subscribeButton}>Subscribe Now</Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; Copyright 2022, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
