import getWeatherIcon from "../utils/getWeatherIcon.js";

export default function useCurrentIcon({ weatherCode, isDay }) {
  return getWeatherIcon({ weatherCode, isDay });
};