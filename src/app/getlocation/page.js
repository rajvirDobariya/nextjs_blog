'use client'
import React, { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        console.log('Geolocation is not supported by this browser.');
      }
    };

    const showPosition = (position) => {
      console.log("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude);
    };

    const showError = (error) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.log("User denied the request for Geolocation.");
          break;
        case error.POSITION_UNAVAILABLE:
          console.log("Location information is unavailable.");
          break;
        case error.TIMEOUT:
          console.log("The request to get user location timed out.");
          break;
        case error.UNKNOWN_ERROR:
          console.log("An unknown error occurred.");
          break;
        default:
          console.log("Error:", error);
      }
    };

    getLocation();
  }, []);

  return (
    <div>
      <h1>Get Location</h1>
      {/* You can add other content here */}
    </div>
  );
}