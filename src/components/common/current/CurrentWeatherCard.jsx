import useCurrentIcon from "../../../hooks/UseCurrentIcon";
const CurrentWeatherCard = ({ current, cityInfo }) => {
  if (!current || !current.current || (!current.current_units && !cityData))
    return null;

  const { temperature_2m, is_day, weather_code } = current.current;
  const iconName = useCurrentIcon({ weatherCode: weather_code });
  const { temperature_2m: tempUnit } = current.current_units;

  // console.log("time", time);
  // console.log("isDay", is_day);
  // console.log("CARD", is_day);
  // console.log("CARD-current", current);
  return (
    <>
      <section
        className={`current-weather-card-container relative flex  border-transparent rounded-3xl items-center justify-center w-full lg:h-70 h-70 text-white
         ${
           is_day === 0
             ? "bg-[url(/src/assets/images/bg-today-small.svg)] lg:bg-[url(/src/assets/images/bg-today-large.svg)] bg-cover"
             : "bg-linear-to-br from-sky-500 via-cyan-500 to-Blue-700"
         } `}
      >
        <div className="current-card absolute inset-0 flex flex-row flex-wrap items-center lg:justify-between justify-center p-5">
          <div className="city-card flex flex-col lg:items-start items-center">
            <h1 className="city  lg:text-size-32 text-[1.8rem] font-bold">
              {cityInfo.city}, {cityInfo.country}
            </h1>
            <h1 className="subdivision  text-size-20">{cityInfo.subdivision}</h1>
            <p className="date-card text-xs italic">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <div className="flex">
            <img
              src={iconName}
              alt="weather-icon"
              className="icon-weather flex lg:w-45 w-40 "
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
