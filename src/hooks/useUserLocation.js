import { useEffect, useState } from "react";
import getDataCity from "../utils/getDataCity";

function useUserLocation() {
  const [location, setLocation] = useState({
    lat: null,
    lon: null,
    city: null,
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          const data = await getDataCity(latitude, longitude);
          setLocation({
            lat: latitude,
            lon: longitude,
            city: data?.city || null,
          });
          setLoading(false);
        },
        async (err) => {
          console.error("Geolocation error:", err);
          setError(
            "To obtain your geolocation, enable location services in your browser."
          );

          const data = await getDataCity(10.4806, -66.9036);
          setLocation({
            lat: 10.4806,
            lon: -66.9036,
            city: data?.city || "Caracas",
          });
          setLoading(false);
        }
      );
    } else {
      (async () => {
        setError(
          "Your browser doesn't support geolocation. Default location, Caracas."
        );
        const data = await getDataCity(10.4806, -66.9036);
        setLocation({
          lat: 10.4806,
          lon: -66.9036,
          city: data?.city || "Caracas",
        });
        setLoading(false);
      })();
    }
  }, []);

  return { ...location, error, loading };
}

export default useUserLocation;