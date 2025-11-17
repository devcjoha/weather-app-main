export default function buildWeatherUrl({ lat, lon, units, type = "current" }) {
  const baseUrl = "https://api.open-meteo.com/v1/forecast";
  const temperatureUnit = units === "imperial" ? "fahrenheit" : "celsius";
  const windSpeedUnit = units === "imperial" ? "mph" : "kmh";
  const precipitationUnit = units === "imperial" ? "inch" : "mm";
 

  const paramsByType = {
    current: "current=is_day,temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,weather_code,wind_speed_10m,snowfall,showers,cloud_cover",
    daily: "daily=weather_code,temperature_2m_max,temperature_2m_min",
    hourly: "hourly=temperature_2m,weather_code",
  };

  return `${baseUrl}?latitude=${lat}&longitude=${lon}&${paramsByType[type]}&timezone=auto&temperature_unit=${temperatureUnit}&wind_speed_unit=${windSpeedUnit}&precipitation_unit=${precipitationUnit}`;
}
