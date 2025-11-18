import { useState, useRef } from "react";
import iconArrow from "../../../assets/icons/icon-dropdown.svg";
import useOutsideClick from "../../../hooks/useOutsideClick";

const SelectMenu = ({ hourly, selectedDay, setSelectedDay }) => {
  if (!hourly || !hourly.hourly || !hourly.hourly_units) return null;
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
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

  useOutsideClick(ref, () => setOpen(false));

  return (
    <div ref={ref}
    className="select-hourly relative w-35 text-Neutral-500 dark:text-text-dark ">
      {/* Botón */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-2 pl-4 pr-4 rounded-lg dark:bg-Neutral-600 bg-Neutral-0 text-[.9rem] cursor-pointer dark:hover:bg-Neutral-900
       focus:border-2 focus:border-Neutral-300"
      >
        <span>{selectedDay}</span>
        <img
          src={iconArrow}
          alt="icon-dropdown"
          className={`w-3 h-3 transform transition-transform invert dark:invert-0 dark:brightness-100 brightness-75 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Lista desplegable */}
      {open && (
        <ul
          className="absolute p-[.6rem] pl-2 w-50 text-[.9rem] 
        border border-border-card-light dark:border dark:border-border-card-dark rounded-xl 
        dark:bg-card-dark bg-card-light 
        z-10 cursor-pointer translate-x-[-30%]"
        >
          {Object.keys(byDay).map((day, i) => (
            <li
              key={day}
              onClick={() => {
                setSelectedDay(day);
                setOpen(false);
              }}
              className="p-2 hover:dark:bg-Neutral-600 rounded-lg hover:bg-Neutral-0 cursor-pointer"
            >
              {day}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectMenu;