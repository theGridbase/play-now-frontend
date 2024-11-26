import { Input } from 'antd';
import { useState } from 'react';
import styles from './discription.module.scss';

const PlaceTitleStep = () => {
  const [title, setTitle] = useState('');
  const maxLength = 32;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div className={styles.placeTitleContainer}>
      <h2>Now, let's give your place a title</h2>
      <p>Short titles work best.</p>
      <Input.TextArea
        value={title}
        onChange={handleChange}
        maxLength={maxLength}
        showCount
        placeholder="Enter a title for your place"
        className={styles.textArea}
      />
    </div>
  );
};

export default PlaceTitleStep;
