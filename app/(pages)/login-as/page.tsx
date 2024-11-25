// pages/login.tsx
import { Button } from 'antd';
import styles from './login-as.module.scss';
import { GoogleOutlined, FacebookOutlined,FacebookFilled } from '@ant-design/icons';
import BackImage from "@/public/assets/svgs/or.svg";
import Image from 'next/image';
import Link from 'next/link';
const Loginas = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.imageBackground}>
        <Image src={BackImage} fill alt=""/>
      </div>
      <div className={styles.loginCard}>
        <div className={styles.logo}>LOGO HERE</div>
        <p className={styles.p}>Sign in to your account to continue.</p>
        <div className={styles.btnWrapper}>
          <Link href="/login">
        <Button type="primary" block className={styles.customerBtn}>
          Login as a customer
        </Button>
        </Link>
        <Link href="/login">
        <Button block className={styles.ownerBtn}>
          Login as an owner
        </Button>
</Link>
        </div>
       
        <div className={styles.separator}>
  <span>Or</span>
</div>

          <div className={styles.socialLogin}>
          <Button className={styles.socialButton} icon={<GoogleOutlined />} block>
            Login with Google
          </Button>
          <Button className={styles.socialButton2} icon={<FacebookFilled />} block>
            Login with Facebook
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Loginas;
