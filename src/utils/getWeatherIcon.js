import iconSunny from "../assets/icons/icon-sunny.svg";
import iconMoon from "../assets/icons/icon-moon.svg";
import iconOvercast from "../assets/icons/icon-overcast.svg";
import iconPartlySunny from "../assets/icons/icon-partly-sunny.svg";
import iconCloudSingle from "../assets/icons/icon-cloud-single.svg";
import iconRainSunny from "../assets/icons/icon-lluviasol.svg";
import iconSnow from "../assets/icons/icon-snow.svg";
import iconRain from "../assets/icons/icon-rain.svg";
import iconCloudThunder from "../assets/icons/icon-cloud-thunder.svg";
import iconError from "../assets/icons/icon-error.svg";
import iconNightCloud from "../assets/icons/icon-night-cloud.svg";
import iconNightRain from "../assets/icons/icon-night-thunder-rain.svg";

// Tabla de mapeo por código
const weatherIconMap = {
  0: { day: iconSunny, night: iconMoon },         
  1: { day: iconSunny, night: iconMoon },              // Mainly clear
  2: { day: iconPartlySunny, night: iconCloudSingle }, // Partly cloudy
  3: { day: iconOvercast, night: iconOvercast },       // Overcast
  45: { day: iconCloudSingle, night: iconNightCloud }, // Fog
  46: { day: iconCloudSingle, night: iconNightCloud },
  47: { day: iconCloudSingle, night: iconNightCloud },
  48: { day: iconCloudSingle, night: iconNightCloud },
  51: { day: iconRainSunny, night: iconRain },         // Drizzle
  53: { day: iconRainSunny, night: iconRain },
  55: { day: iconRainSunny, night: iconRain },
  61: { day: iconRainSunny, night: iconRain },         // Rain
  63: { day: iconRainSunny, night: iconRain },
  65: { day: iconRainSunny, night: iconRain },
  71: { day: iconSnow, night: iconSnow },              // Snow
  73: { day: iconSnow, night: iconSnow },
  75: { day: iconSnow, night: iconSnow },
  77: { day: iconSnow, night: iconSnow },
  80: { day: iconRain, night: iconNightRain },         // Showers
  81: { day: iconRain, night: iconNightRain },
  82: { day: iconRain, night: iconNightRain },
  95: { day: iconCloudThunder, night: iconCloudThunder }, // Thunderstorm
  96: { day: iconCloudThunder, night: iconCloudThunder },
  99: { day: iconCloudThunder, night: iconCloudThunder },
};

export default function getWeatherIcon({ weatherCode, isDay }) {
  const day = Number(isDay) === 1;
  const iconSet = weatherIconMap[weatherCode];
  if (!iconSet) return iconError;
  return day ? iconSet.day : iconSet.night;
};