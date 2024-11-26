"use client"

import { Upload, Button } from 'antd';
import { CameraOutlined } from '@ant-design/icons';
import { useState } from 'react';
import styles from './addPhotos.module.scss';

const UploadPhotosStep = () => {
  const [fileList, setFileList] = useState([]);

  const uploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false; // Prevent auto-upload, only allow manual
    },
    fileList,
  };

  return (
    <div className={styles.uploadContainer}>
      <h2>Add some photos of your place</h2>
      <p>You’ll need to add 5 photos to get started.</p>
      <Upload {...uploadProps} className={styles.uploadBox}>
        <Button icon={<CameraOutlined />} className={styles.uploadButton}>
          Add photos
        </Button>
      </Upload>
    </div>
  );
};

export default UploadPhotosStep;
