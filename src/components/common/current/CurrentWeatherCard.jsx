import useCurrentIcon from "../../../hooks/UseCurrentIcon";
const CurrentWeatherCard = ({ current, cityInfo, loading, error }) => {
  if (!current || !current.current || (!current.current_units && !cityInfo))
    return null;

  const { temperature_2m, is_day, weather_code } = current.current;
  const iconName = useCurrentIcon({ weatherCode: weather_code, isDay: is_day });
  const { temperature_2m: tempUnit } = current.current_units;

  return (
    <>
      <section
        className={`current-weather-card-container relative flex  border-transparent rounded-3xl items-center justify-center w-full lg:h-70 h-70 text-text-dark
         ${
           is_day === 0
             ? "bg-[url(/src/assets/images/bg-today-small.svg)] lg:bg-[url(/src/assets/images/bg-today-large.svg)] bg-cover"
             : "bg-linear-to-br from-sky-400 to-Blue-700"
         } `}
      >
        <div className="feedback-container w-full h-2 flex justify-center absolute z-30 items-center">
          {loading && (
            <div className="animate-spin-3 rounded-3xl h-9 w-9 border-4 border-dotted border-Neutral-300"></div>
          )}
          {error && (
            <div className="text-center text-red-500 font-bold">
              <p>{error}</p>
            </div>
          )}
        </div>
        <div className="current-card absolute inset-0 flex flex-row flex-wrap items-center lg:justify-between justify-center p-5">
          <div className="city-card flex flex-col lg:items-start items-center">
            <h1 className="city  lg:text-size-30 text-size-24 font-bold">
              {cityInfo.city}, {cityInfo.country}
            </h1>
            <h1 className="subdivision  text-size-18">
              {cityInfo.subdivision}
            </h1>
            <p className="date-card text-xs italic">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <div className="icon-temperature flex items-center">
            <img
              src={iconName}
              alt="weather-icon"
              className="icon-weather flex lg:w-40 lg:h-38 w-30 h-28 "
            />
            <div className="temperature-card lg:text-[6.5rem] text-[6rem] italic font-bold ">
              <p>
                {Math.round(temperature_2m)}
                {tempUnit.slice(0, 1)}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CurrentWeatherCard;