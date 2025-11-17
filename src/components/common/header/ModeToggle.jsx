function ModeToggle({ handleToggle, darkMode }) {
  return (
    <>
      <div
        className="mode-toggle relative flex items-center w-12 h-6 not-firts:select-none 
      transition duration-200 ease-in"
      >
        <input
          id="toggle-theme"
          type="checkbox"
          checked={!darkMode ? "checked" : ""}
          onChange={handleToggle}
          name="toggle"
          className="input-mode peer appearance-none w-12 h-6 rounded-full
            bg-gray-400 hover:bg-linear-to-r from-blue-500 to-green-500 
            transition-colors duration-300 cursor-pointer "
        />
        <label
          htmlFor="toggle-theme"
          name="toggle"
          className="circle-mode absolute top-.7 left-0 w-4.5 h-4.5 mx-0.5
          bg-white dark:bg-card-bg-navy border rounded-full border-slate-300 dark:border-none shadow-sm 
          peer-checked:translate-x-6 peer-checked:border-transparent 
          transition-transform duration-300 cursor-pointer"
        ></label>
      </div>
    </>
  );
}
export default ModeToggle;
