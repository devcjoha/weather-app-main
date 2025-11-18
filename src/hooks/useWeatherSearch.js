import { useState, useEffect } from "react";
import axios from "axios";
import getDataCity from "../utils/getDataCity";
import buildWeatherUrl from "../utils/buidlWeatherUrl";
import { useUnits } from "../context/UnitsContext";

export default function useWeatherSearch() {
  const [currentSearch, setCurrentSearch] = useState(null);
  const [city, setCity] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { units } = useUnits();
  const [lastSearchedCity, setLastSearchedCity] = useState(null);

  const fetchWeather = async (cityName, currentUnits) => {
    setLoading(true);
    setError(null);

    try {
      let latitude, longitude, geoInfo;

      if (!lastSearchedCity || cityName !== lastSearchedCity) {
        const { data } = await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`
        );
        if (!data.results || data.results.length === 0) {
          throw new Error("No search result found!");
        }
        latitude = data.results[0].latitude;
        longitude = data.results[0].longitude;

        geoInfo = await getDataCity(latitude, longitude);
        setCity(geoInfo);
      } else {
        latitude = currentSearch.cityInfo.latitude;
        longitude = currentSearch.cityInfo.longitude;
        geoInfo = currentSearch.cityInfo;
      }

      const url = buildWeatherUrl({ lat: latitude, lon: longitude, units: currentUnits });
      const { data: weatherData } = await axios.get(url);

      setCurrentSearch({
        current: weatherData.current,
        current_units: weatherData.current_units,
        daily: weatherData.daily,
        daily_units: weatherData.daily_units,
        hourly: weatherData.hourly,
        hourly_units: weatherData.hourly_units,
        cityInfo: geoInfo,
      });

      setLastSearchedCity(cityName);
    } catch (err) {
      setError(err.message || "Couldn’t connect to the server!");
    } finally {
      setLoading(false);
    }
  };

  const searchWeather = (cityName) => {
    fetchWeather(cityName, units);
  };

  useEffect(() => {
    if (lastSearchedCity) {
      fetchWeather(lastSearchedCity, units);
    }
  }, [units]);

  return { currentSearch, city, loading, error, searchWeather };
};