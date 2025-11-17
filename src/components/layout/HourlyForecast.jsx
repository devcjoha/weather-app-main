import HourlyCard from "../common/hourly/HourlyCard";
import { useState } from "react";
// import iconArrow from "../../assets/icons/icon-dropdown.svg";
import SelectMenu from "../common/hourly/SelectMenu";
const HourlyForecast = ({ hourly }) => {
  
  if (!hourly || !hourly.hourly) return null;
  const [selectedDay, setSelectedDay] = useState("Saturday");

  const { temperature_2m, time, weather_code: weatherCode } = hourly.hourly;

  const hours = time.map((date, index) => ({
    date,
    temp: temperature_2m[index],
    code: weatherCode[index],
  }));

  const byDay = hours.reduce((acc, hour) => {
    const weekDay = new Date(hour.date).toLocaleDateString("en-US", {
      weekday: "long",
    });
    if (acc[weekDay]) {
      acc[weekDay].push(hour);
    } else {
      acc[weekDay] = [hour];
    }
    return acc;
  }, {});
  return (
    <>
      <section className="hourly-container flex flex-col lg:w-95 w-full h-full dark:border-transparent border border-border-card-light rounded-3xl dark:bg-card-dark bg-card-light ">
        <div className="hourly-header flex flex-row w-full h-20 items-center justify-between p-5 ">
          <h2 className="hourly-title dark:text-text-dark text-Neutral-500 lg:text-size-24 text-[1.2rem]">
            Hourly forecast
          </h2>
          <SelectMenu hourly={hourly} selectedDay={selectedDay} setSelectedDay={setSelectedDay} time={time}/>
        </div>
        <div className="hourly-cards-container flex flex-col max-h-150 overflow-y-auto scrollbar p-4 pt-0">
          <HourlyCard hourly={hourly} selectedDay={selectedDay}  byDay={byDay} />
        </div>
      </section>
    </>
  );
};
export default HourlyForecast;
