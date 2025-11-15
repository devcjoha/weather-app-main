import ModeToggle from "../common/ModeToggle";
import HeaderSelectMenu from "../common/HeaderSelectMenu";
import Logo from "../../assets/images/logo.svg";

function Header({darkMode, handleToggle, setDarkMode}) {
  return (
    <>
      <section className="header-container w-full lg:h-25 h-20">
        <div className="header-left">
         <img src={Logo} alt="logo-weather" className="w-35 lg:w-40"/>
        </div>
        <div className="header-right">
          {darkMode ? (
            <label htmlFor="toggle-theme" className=" dark:text-gray-400">
              Light Mode
            </label>
          ) : (
            <label htmlFor="toggle-theme" className="dark:text-gray-400">
              Dark Mode
            </label>
          )}
          <ModeToggle
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            handleToggle={handleToggle}
            />
        <div className="select-header w-20 border rounded-lg">
            <HeaderSelectMenu/>
            </div>
        </div>
      </section>
    </>
  );
}
export default Header;
