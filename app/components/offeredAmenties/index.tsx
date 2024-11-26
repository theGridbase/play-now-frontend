import { Card, Col, Row } from 'antd';
import Image from 'next/image';
import styles from './offeredAmenties.module.scss';

interface Amenity {
  label: string;
  icon: string;
}

const guestFavorites: Amenity[] = [
  { label: 'Wifi', icon: '/assets/svgs/football.svg' },
  { label: 'TV', icon: '/assets/svgs/football.svg' },
  { label: 'Kitchen', icon: '/assets/svgs/football.svg' },
  { label: 'Washer', icon: '/assets/svgs/football.svg' },
  { label: 'Free parking on premises', icon: '/assets/svgs/football.svg' },
  { label: 'Paid parking on premises', icon: '/assets/svgs/football.svg' },
  { label: 'Air conditioning', icon: '/assets/svgs/football.svg' },
  { label: 'Dedicated workspace', icon: '/assets/svgs/football.svg' },
];

const standoutAmenities: Amenity[] = [
  { label: 'Pool', icon: '/assets/svgs/football.svg' },
  { label: 'Hot tub', icon: '/assets/svgs/football.svg' },
  { label: 'Patio', icon: '/assets/svgs/football.svg' },
  { label: 'Pool table', icon: '/assets/svgs/football.svg' },
  { label: 'Indoor fireplace', icon: '/assets/svgs/football.svg' },
  { label: 'Piano', icon: '/assets/svgs/football.svg' },
  { label: 'Exercise equipment', icon: '/assets/svgs/football.svg' },
  { label: 'Lake access', icon: '/assets/svgs/football.svg' },
  { label: 'Beach access', icon: '/assets/svgs/football.svg' },
  { label: 'Ski-in/Ski-out', icon: '/assets/svgs/football.svg' },
  { label: 'Outdoor shower', icon: '/assets/svgs/football.svg' },
];

const AmenitiesStep = () => {
  const renderAmenityCard = (amenity: Amenity) => (
    <Col xs={12} sm={8} md={6} key={amenity.label}>
      <Card hoverable className={styles.amenityCard}>
        <Image src={amenity.icon} alt={amenity.label} width={40} height={40} />
        <p>{amenity.label}</p>
      </Card>
    </Col>
  );

  return (
    <div className={styles.amenitiesContainer}>
      <h2>Tell guests what your place has to offer</h2>
      <p>You can add more amenities after you publish your listing</p>

      <h3>What about these guests favourites?</h3>
      <Row gutter={[16, 16]} className={styles.amenitiesGrid}>
        {guestFavorites.map(renderAmenityCard)}
      </Row>

      <h3>Do you have any standout amenities?</h3>
      <Row gutter={[16, 16]} className={styles.amenitiesGrid}>
        {standoutAmenities.map(renderAmenityCard)}
      </Row>
    </div>
  );
};

export default AmenitiesStep;
