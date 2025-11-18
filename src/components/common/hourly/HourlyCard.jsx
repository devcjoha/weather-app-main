import useCurrentIcon from "../../../hooks/UseCurrentIcon";
const HourlyCard = ({ selectedDay, byDay, isDay}) => {

  const cardHourly =
    "box-hourly-card w-full h-15 mt-[.9rem] text-[1.2rem] dark:bg-hourly-bg-card-dark dark:text-text-dark dark:border dark:border-border-card-dark justify-between";

  return (
    <>
     {byDay[selectedDay].map((hour, i) => (
        <div key={i} className={cardHourly}>
          <div className="flex flex-row gap-2 items-center">
            <img
              src={useCurrentIcon({
                weatherCode: hour.code, isDay
              })}
              alt="icon-hourly"
              className="w-12 h-10"
            />
            <p>{new Date(hour.date).toLocaleTimeString("en-US", {
              hour: "numeric",
              hour12: true,
            })} </p>
          </div>
          <p>{Math.round(hour.temp)}°</p>
        </div>
      ))}
    </>
  );
};

export default HourlyCard;