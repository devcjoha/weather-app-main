// src/hooks/useCurrentIcon.js
import getWeatherIcon from "../utils/getWeatherIcon.js";

export default function useCurrentIcon({ weatherCode }) {
  // const hour = new Date(time).getHours();
  // const isDay = hour >= 6 && hour < 18;
  return getWeatherIcon({ weatherCode });
};

