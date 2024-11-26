import { Layout, Input, Button, Row, Col } from 'antd';
import styles from './footer.module.scss';
import Image from 'next/image';
const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer className={styles.footer}>
      <div className={styles.container}>
        <Row justify="space-between">
         
          <Col xs={24} sm={6}>
            <div className={styles.logoSection}>
            <Image src="/assets/svgs/logo.svg" width={100}  height={100} alt=""/>
              <p>We give you the best stadiums in town</p>
            </div>
          </Col>

          {/* Company Section */}
          <Col xs={24} sm={6}>
            <div className={styles.footerSection}>
              <h4>COMPANY</h4>
              <ul>
                <li>About</li>
                <li>Local Service Provider</li>
                <li>Travel Agencies</li>
              </ul>
            </div>
          </Col>

          {/* Help Section */}
          <Col xs={24} sm={6}>
            <div className={styles.footerSection}>
              <h4>HELP</h4>
              <ul>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </Col>

          {/* Newsletter Section */}
          <Col xs={24} sm={6}>
            <div className={styles.newsletterSection}>
              <h4>NEWSLETTER</h4>
              <Input
                placeholder="Enter your email address"
                className={styles.input}
              />
              <Button className={styles.subscribeButton} type="primary">
                Subscribe Now
              </Button>
            </div>
          </Col>
        </Row>
        <div className={styles.copyright}>
          <p>© Copyright 2022, All Rights Reserved</p>
        </div>
      </div>
    </Footer>
  );
};

export default CustomFooter;
