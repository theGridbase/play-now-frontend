
"use client"
import React, { useRef, useState, useEffect } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import styles from './map.module.scss';

const PlacesSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [location, setLocation] = useState({ lat: 37.7749, lng: -122.4194 }); // Default to San Francisco

  useEffect(() => {
    if (typeof window !== 'undefined' && window.google) {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current!, {
        types: ['geocode'],
      });

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (place.geometry && place.geometry.location) {
          setLocation({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          });
        } else {
          console.error('No geometry available for this place.');
        }
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <LoadScript
        googleMapsApiKey="ATBBrNtJb8ey6svqRqSGHRfYKaWB4A359E5E" // Replace with your API key
        libraries={['places']}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter your address"
          className={styles.input}
        />
        <GoogleMap
          center={location}
          zoom={15}
          mapContainerClassName={styles.map}
        >
          <Marker position={location} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default PlacesSearch;
