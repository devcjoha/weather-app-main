
import iconSunny from "../assets/icons/icon-sunny.svg";
import iconMoon from "../assets/icons/icon-moon.svg";
import iconOvercast from "../assets/icons/icon-sunny-cloudy.svg";
import iconPartlySunny from "../assets/icons/icon-partly-sunny.svg";
import iconCloudSingle from "../assets/icons/icon-cloud-single.svg";
import iconRainSunny from "../assets/icons/icon-lluviasol.svg";
import iconSnow from "../assets/icons/icon-snow.svg";
import iconRain from "../assets/icons/icon-rain.svg";
import iconCloudThunder from "../assets/icons/icon-cloud-thunder.svg";
import iconError from "../assets/icons/icon-error.svg";
export default function getWeatherIcon({ weatherCode, isDay }) {
  if (isDay) return true;
  if (weatherCode === 0) return iconSunny;
  if (weatherCode === 1 || weatherCode === 2) return iconPartlySunny;
  if (weatherCode === 3) return iconOvercast;
  if (weatherCode >= 45 && weatherCode <= 48) return iconCloudSingle;
  if (weatherCode >= 51 && weatherCode <= 67) return iconRainSunny;
  if (weatherCode >= 71 && weatherCode <= 77) return iconSnow;
  if (weatherCode >= 80 && weatherCode <= 82) return iconRain;
  if (weatherCode >= 95) return iconCloudThunder;
  return iconError;
};