import { useEffect, useState } from 'react';

function useUserLocation() {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setLocation({ lat: latitude, lon: longitude });
      },
      (err) => {
        setError(err.message);
      }
    );
  }, []);

  return { ...location, error };
};
export default useUserLocation;