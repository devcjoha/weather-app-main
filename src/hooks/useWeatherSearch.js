// src/hooks/useWeatherSearch.js
import { useState } from "react";
import axios from "axios";
import getDataCity from "../utils/getDataCity";
import { useUnits } from "../context/UnitsContext";

export default function useWeatherSearch() {
  const [currentSearch, setCurrentSearch] = useState(null);
  const [city, setCity] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { units } = useUnits(); // "metric" o "imperial"

  // 🔑 función para construir la URL con params
  const buildWeatherUrl = (lat, lon, units) => {
    const isMetric = units === "metric";
    return {
      url: "https://api.open-meteo.com/v1/forecast",
      params: {
        latitude: lat,
        longitude: lon,
        current:
          "temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,rain,snowfall,showers,cloud_cover,weather_code,wind_speed_10m,is_day",
        daily:
          "weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum",
        hourly:
          "temperature_2m,precipitation,wind_speed_10m,weather_code",
        timezone: "auto",
        temperature_unit: isMetric ? "celsius" : "fahrenheit",
        wind_speed_unit: isMetric ? "kmh" : "mph",
        precipitation_unit: isMetric ? "mm" : "inch",
      },
    };
  };

  const searchWeather = async (cityName) => {
    setLoading(true);
    setError(null);

    try {
      // 1. Buscar coordenadas
      const { data } = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`
      );
      if (!data.results || data.results.length === 0) {
        throw new Error("City not found");
      }

      const { latitude, longitude } = data.results[0];

      // 2. Info ciudad
      const geoInfo = await getDataCity(latitude, longitude);
      setCity(geoInfo);

      // 3. Construir URL y pedir clima
      const { url, params } = buildWeatherUrl(latitude, longitude, units);
      const { data: weatherData } = await axios.get(url, { params });

      // 4. Normalizar
      setCurrentSearch({
        current: weatherData.current,
        current_units: weatherData.current_units,
        daily: weatherData.daily,
        daily_units: weatherData.daily_units,
        hourly: weatherData.hourly,
        hourly_units: weatherData.hourly_units,
        cityInfo: geoInfo,
      });
    } catch (err) {
      setError(err.message || "Error al obtener datos del clima");
    } finally {
      setLoading(false);
    }
  };

  return { currentSearch, city, loading, error, searchWeather };
};