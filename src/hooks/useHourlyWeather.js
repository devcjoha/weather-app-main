import { useEffect, useState } from "react";
import axios from "axios";
import { useUnits } from "../context/UnitsContext.jsx";
import  buildWeatherUrl  from "../utils/buidlWeatherUrl.js";
import useUserLocation  from "./useUserLocation.js";
import getDataCity from "../utils/getDataCity.js";


export default function useHourlyWeather() {
  const { units } = useUnits();
  const [dataHourly, setDataHourly] = useState(null);
  // const [city, setCity] = useState();
  const { lat, lon, error: locationError } = useUserLocation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    if (!lat || !lon) return;
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const url = buildWeatherUrl({ lat, lon, units, type: "hourly" });
        const response = await axios.get(url);
        setDataHourly(response.data);
        const geoInfo = await getDataCity(lat, lon);
        setCity(geoInfo)
      } catch (err) {
        setError(err.message || "Error al obtener datos del clima");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [lat, lon, units]);

  return { dataHourly, loading, error, locationError };
}