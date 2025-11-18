import iconCheck from "../../../assets/icons/icon-checkmark.svg";

const DropdownItem = ({ label, currentUnit, expectedUnit }) => {
  const isSelected = currentUnit === expectedUnit;
  
  const baseClasses = 
    "flex items-center gap-2 pl-4 p-2 w-full font-bold text-text-card-light dark:text-text-dark rounded-md cursor-pointer hover:dark:bg-Neutral-600";
  
  const selectedClass = isSelected ? "dark:bg-Neutral-700 bg-Neutral-0" : "";
  
  return (
    <li className={`${baseClasses} ${selectedClass}`}>
      {label}
      {isSelected && (
        <img src={iconCheck} alt={`selected-${label}`} className="ml-auto invert dark:invert-0" />
    
      )}
    </li>
  );
};

export default DropdownItem;