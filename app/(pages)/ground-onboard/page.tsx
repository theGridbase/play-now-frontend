"use client"
import { useState } from 'react';
import { Row, Col, Button, Card, Progress } from 'antd';
import Image from 'next/image';
import styles from './ground-onboarding.module.scss';
import ConfirmAddressStep from '@/app/components/confirm-address';
import UploadPhotosStep from '@/app/components/add-photos';
import PlaceTitleStep from '@/app/components/add-discription';

const sports = [
  { name: 'Cricket', icon: '/assets/svgs/football.svg' },
  { name: 'Football', icon: '/assets/svgs/football.svg' },
  { name: 'Basketball', icon: '/assets/svgs/socker.svg' },
  { name: 'Tennis', icon: '/assets/svgs/football.svg' },
  { name: 'Soccer', icon: '/assets/svgs/football.svg' },
  { name: 'Badminton', icon: '/assets/svgs/football.svg' },
  { name: 'Squash', icon: '/assets/svgs/football.svg' },
  { name: 'Swimming', icon: '/assets/svgs/football.svg' },
  { name: 'Gym & Fitness', icon: '/assets/svgs/football.svg' },
];

export default function Groundonboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSport, setSelectedSport] = useState(null);

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSelect = (sport:any) => {
    setSelectedSport(sport);
  };

  const progressPercent = (currentStep / 4) * 100;

  return (
    <div className={styles.container}>
   
      <div className={styles.progressContainer}>
        <Progress percent={progressPercent} showInfo={false} />
      </div>

      {/* Sport Selection Screen */}
      {currentStep === 1 && (
        <div className={styles.sportSelectionContainer}>
          <h2>Which of these best describes your place?</h2>
          
            <Button
            className={styles.nextButtonContainer}
              type="primary"
              onClick={nextStep}
              disabled={!selectedSport}
            >
              Next
            </Button>
          
          <Row gutter={[16, 16]} justify="center">
  {sports.map((sport) => (
    <Col xs={24} sm={12} md={8} key={sport.name}>
      <Card
        className={`${styles.cardCustom} ${selectedSport === sport.name ? styles.active : ''}`}
        hoverable
        onClick={() => handleSelect(sport.name)}
      >
        <Image
          alt={sport.name}
          src={sport.icon}
          width={56}
          height={56}
        />
        <p>{sport.name}</p>
      </Card>
    </Col>
  ))}
</Row>


        </div>
      )}

      {/* Other screens can be added here */}
    </div>


  );
}
