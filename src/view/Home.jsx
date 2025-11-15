import Header from "../components/layout/Header";
import SearchBar from "../components/common/SearchBar";
import CurrentWeather from "../components/layout/CurrentWeather";
import DailyForecast from "../components/layout/DailyForecast";
import HourlyForecast from "../components/layout/HourlyForecast";
import useCurrentWeather from "../hooks/useCurrentWeather";
import useDailyWeather from "../hooks/useDailyWeather";
import useHourlyWeather from "../hooks/useHourlyWeather";
// import { useEffect, useState } from "react";

const Home = ({ handleToggle, darkMode, setDarkMode }) => {
  const current = useCurrentWeather({});
  const daily = useDailyWeather({});
  const hourly = useHourlyWeather({});

  const cityData = current.city;
  const cityInfo = {
    city: cityData?.city,
    locality: cityData?.locality,
    country: cityData?.country,
    subdivision: cityData?.subdivision,
  };

  return (
    <>
      <section className="home-container lg:w-310 w-85 min-h-screen">
        <Header
          handleToggle={handleToggle}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        ></Header>

        <div className="title-home-container flex w-full lg:h-20 h-65 font-family-secondary justify-center items-center leading-16">
          <h1 className="title-home lg:text-[4rem] text-gray-950 dark:text-white text-[3.5rem] font-bold">
            How's the sky looking today?
          </h1>
        </div>
        <div className="search-bar-container-home flex lg:w-full w-90 lg:120 flex-row flex-wrap items-center justify-center h-50 lg:h-30">
          <SearchBar />
        </div>
        <div className="total-weather-container flex flex-row flex-wrap min-h-180 w-full lg:justify-between lg:p-5 bg-gray-500">
          <div className="current-daily-container">
            <CurrentWeather current={current.data} cityInfo={cityInfo} />
            <h2 className="daily-title text-size-24 pt-5 pb-5">
              Daily forecast
            </h2>
            <DailyForecast daily={daily.dataDaily} />
          </div>

          <HourlyForecast hourly={hourly.dataHourly} cityInfo={cityInfo} />
        </div>
      </section>
    </>
  );
};
export default Home;
