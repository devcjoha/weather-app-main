import Logo from "../../assets/images/logo.svg";
import DropDownHeader from "../common/header/DropDownHeader";
import logoLight from "../../assets/images/logo-light.svg";

function Header({ darkMode, handleToggle, setDarkMode, units, current, currentSearch }) {
  
  return (
    <>
      <section className="header-container w-full lg:h-25 h-20 lg:p-5 ">
        <div className="header-left">
          <img src={darkMode ? Logo : logoLight } alt="logo-weather" className="w-35 lg:w-40" />
        </div>
        <div>
          <DropDownHeader
          current={current}
            handleToggle={handleToggle}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            unitsContext={units}
            currentSearch={currentSearch}
          />

        </div>
      </section>
    </>
  );
}
export default Header;
