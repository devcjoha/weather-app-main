import { useUnits } from "../../../context/UnitsContext";
import { useState } from "react";
import iconArrow from "../../../assets/icons/icon-dropdown.svg";
import iconCheck from "../../../assets/icons/icon-checkmark.svg";
import iconUnits from "../../../assets/icons/icon-units.svg";
const DropDownHe = ({ darkMode, setDarkMode, handleToggle, current }) => {
  const currentUnits = current.data;
  const units = useUnits();
  const toggleUnits = units.toggleUnits;
  const [open, setOpen] = useState(false);

  if (!current || !current.data || !units) return null;
  const {
    temperature_2m: appUnit,
    wind_speed_10m: windUnit,
    precipitation: precipitationUnit,
  } = currentUnits.current_units;

  console.log("DROP", units);
  // console.log("DROPx", currentUnits.current_units);
  const labelStyle = "";
  // const unitsStyle = "flex items-center gap-2 pl-4 w-full";
  const unitsStyle = `flex items-center gap-2 pl-4 w-full 
    ${units.units === "°C" ? "bg-Neutral-700 hover:bg-Neutral-600" : ""}`;
  const switchStyle =
    "p-2 hover:dark:bg-Neutral-600 rounded-lg font-bold cursor-pointer";
  return (
    <div className="select-hourly relative w-35 dark:text-text-dark text-text-light dark:bg-card-dark bg-card-light rounded-xl">
      {/* Botón */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-2 pl-4 pr-4 rounded-lg dark:bg-Neutral-600 text-size-16 cursor-pointer"
      >
        <img src={iconUnits} alt="icon-units" />
        <span>Units</span>
        <img
          src={iconArrow}
          alt="icon-dropdown"
          className={`w-3 h-3 transform transition-transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Lista desplegable */}
      {open && (
        <ul className="absolute p-[.6rem] pl-2 w-56 dark:border dark:border-border-card-dark rounded-xl dark:bg-card-dark text-[.9rem] bg-card-light border border-border-card-light z-10 cursor-pointer translate-x-[-37%] ">
          <li className="w-full">
            <button
              onClick={() => {
                setDarkMode(darkMode);
                setOpen(false);
                handleToggle();
              }}
              className={switchStyle}
            >
              Switch to {darkMode ? "Light" : "Dark"} Mode
            </button>
          </li>
          <li
            key="switch-units"
            onClick={() => {
              toggleUnits();
              setOpen(false);
            }}
            className={switchStyle}
          >
            Switch to {units.units === "metric" ? "Imperial" : "Metric"}
          </li>
          <li className="p-2 font-bold">Temperature</li>

          <li
            className={`flex items-center gap-2 p-2 w-full rounded-md cursor-pointer 
            hover:dark:bg-Neutral-600 
            ${appUnit === "°C" ? "bg-Neutral-700" : ""}`}
          >
            Celsius (°C)
            {appUnit === "°C" && <img src={iconCheck} alt="li-units" />}
          </li>

          <li className={unitsStyle}>
            Fahrenheit (°F)
            {appUnit === "°F" && (
              <span>
                <img src={iconCheck} alt="li-units" />
              </span>
            )}
          </li>

          <li className="p-2 font-bold">Wind Speed</li>
          <li className={unitsStyle}>
            km/h
            {windUnit === "km/h" && (
              <span>
                <img src={iconCheck} alt="li-units" />
              </span>
            )}
          </li>
          <li className={unitsStyle}>
            mp/h
            {windUnit === "mp/h" && (
              <span>
                <img src={iconCheck} alt="li-units" />
              </span>
            )}
          </li>

          <li className="p-2 font-bold">Precipitation</li>
          <li className={unitsStyle}>
            Milimeters
            {precipitationUnit === "mm" && (
              <span>
                <img src={iconCheck} alt="li-units" />
              </span>
            )}
          </li>
          <li className={unitsStyle}>
            Inches
            {precipitationUnit === "inch" && (
              <span>
                <img src={iconCheck} alt="li-units" />
              </span>
            )}
          </li>
        </ul>
      )}
    </div>
  );
};
export default DropDownHe;