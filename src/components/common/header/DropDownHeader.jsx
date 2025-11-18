import { useUnits } from "../../../context/UnitsContext";
import { useState, useRef } from "react";
import iconArrow from "../../../assets/icons/icon-dropdown.svg";
import DropdownItem from "./DropDownItem";
import iconUnits from "../../../assets/icons/icon-units.svg";
import useOutsideClick from "../../../hooks/useOutsideClick";

const DropDownHeader = ({ darkMode, setDarkMode, handleToggle, current }) => {
  const { units, toggleUnits } = useUnits();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const currentUnits = current.data;

  useOutsideClick(dropdownRef, () => setOpen(false), open);

  if (!current || !current.data || !units) return null;

  const {
    temperature_2m: appUnit,
    wind_speed_10m: windUnit,
    precipitation: precipitationUnit,
  } = currentUnits.current_units;

  const switchStyle ="p-2 hover:dark:bg-Neutral-600 rounded-lg font-bold cursor-pointer";

  return (
    <div
      ref={dropdownRef}
      className="select-hourly relative w-35 dark:text-text-dark text-card-text-light dark:bg-card-dark bg-card-light rounded-xl "
    >
      {/* Botón */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-2 pl-4 pr-4 rounded-lg dark:bg-Neutral-600 text-size-16 cursor-pointer focus:outline-none focus:border-2 focus:border-Neutral-300"
      >
        <img
          src={iconUnits}
          alt="icon-units"
          className="invert dark:invert-0 dark:brightness-100 brightness-75"
        />
        <span>Units</span>
        <img
          src={iconArrow}
          alt="icon-dropdown"
          className={`w-3 h-3 transform transition-transform invert dark:invert-0 dark:brightness-100 brightness-75${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {/* Lista desplegable */}
      {open && (
        <ul className="absolute p-[.6rem] pl-2 w-56 text-[.9rem] dark:border dark:border-border-card-dark rounded-xl dark:bg-card-dark bg-card-light border border-border-card-light z-10 cursor-pointer translate-x-[-37%]
        
        ">
          {/* 1. Switch Dark/Light Mode */}
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

          {/* 2. Switch Metric/Imperial */}
          <li
            key="switch-units"
            onClick={() => {
              toggleUnits();
              setOpen(false);
            }}
            className={switchStyle}
          >
            Switch to {units === "metric" ? "Imperial" : "Metric"}
          </li>

          {/* 3. Temperatura */}
          <li className="p-2 font-light">Temperature</li>
          <DropdownItem
            label="Celsius (°C)"
            currentUnit={appUnit}
            expectedUnit="°C"
          />
          <DropdownItem
            label="Fahrenheit (°F)"
            currentUnit={appUnit}
            expectedUnit="°F"
          />

          {/* 4. Wind Speed */}
          <li className="p-2 font-light border-t-[.01rem] dark:border-border-card-dark border-border-card-light ">Wind Speed</li>
          <DropdownItem
            label="km/h"
            currentUnit={windUnit}
            expectedUnit="km/h"
          />
          <DropdownItem
            label="mp/h"
            currentUnit={windUnit}
            expectedUnit="mp/h"
          />

          {/* 5. Precipitation */}
          <li className="p-2 font-light border-t-[.01rem] dark:border-border-card-dark border-border-card-light">Precipitation</li>
          <DropdownItem
            label="Millimeters"
            currentUnit={precipitationUnit}
            expectedUnit="mm"
          />
          <DropdownItem
            label="Inches"
            currentUnit={precipitationUnit}
            expectedUnit="inch"
          />
        </ul>
      )}
    </div>
  );
};
export default DropDownHeader;