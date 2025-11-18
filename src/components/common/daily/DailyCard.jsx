import useCurrentIcon from "../../../hooks/UseCurrentIcon";
const DailyCard = ({ daily, isDay}) => {

  if (!daily || !daily.daily) return null;

  const {
    temperature_2m_max,
    temperature_2m_min,
    time,
    weather_code: weatherCode,
  } = daily.daily;

  const days = time.map((date, index) => ({
    date,
    max: temperature_2m_max[index],
    min: temperature_2m_min[index],
    code: weatherCode[index],
  }));

  const cardDaily =
    "box-daily-card w-26 h-45 pt-5 mb-4 text-[1.2rem] lg:p-[.8rem] dark:bg-card-dark dark:text-text-dark dark:border-transparent";

  return (
    <>
      <section className="daily-card-container relative flex flex-row flex-wrap justify-between w-full lg:h-50 items-center font-light">
        {days.map((day, i) => (
          <div key={i} className={cardDaily}>
            <p>
              {new Date(day.date).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>
            <img
              src={useCurrentIcon({ weatherCode: day.code, isDay })}
              alt="icon"
              className="icon-daily w-15 h-12"
            />
            <p className="daily-temperature text-size-16">
            {Math.round(day.min)}°   /   {Math.round(day.max)}°
            </p>
          </div>
        ))}
      </section>
    </>
  );
};
export default DailyCard;