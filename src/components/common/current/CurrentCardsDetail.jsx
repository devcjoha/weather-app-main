const CardDetailCurrent = ({ current }) => {
  if (!current || !current.current || !current.current_units) return null;

  const {
    apparent_temperature,
    relative_humidity_2m,
    wind_speed_10m,
    precipitation,
  } = current.current;

  const {
    apparent_temperature: appUnit,
    relative_humidity_2m: humidityUnit,
    wind_speed_10m: windUnit,
    precipitation: precipitationUnit,
  } = current.current_units;

  const boxCurrentDetail =
    "box-current-detail lg:w-46 lg:h-30 w-40 h-30 lg:pl-5 pl-5 pt-5 mb-4 text-[1.2rem] lg:p-[.8rem] dark:bg-card-dark dark:text-text-dark dark:border-transparent";

    return (
    <>
      <section className="current-weather-detail-container relative flex flex-row flex-wrap justify-between w-full lg:h-24 items-center font-light">
        <div className={boxCurrentDetail}>
          <h5>Feels Like</h5>
          <p className="text-[1.7rem]">
            {Math.round(apparent_temperature)} {appUnit}
          </p>
        </div>
        <div className={boxCurrentDetail}>
          <h5>Humidity</h5>
          <p className="text-[1.7rem]">
            {relative_humidity_2m} {humidityUnit}
          </p>
        </div>
        <div className={boxCurrentDetail}>
          <h5>Wind</h5>
          <p className="text-[1.7rem]">
            {wind_speed_10m} {windUnit}
          </p>
        </div>
        <div className={boxCurrentDetail}>
          <h5>Precipitation</h5>
          <p className="text-[1.7rem]">
            {precipitation} {precipitationUnit}
          </p>
        </div>
      </section>
    </>
  );
};

export default CardDetailCurrent;
