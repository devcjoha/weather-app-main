// DropdownItem.jsx
import iconCheck from "../../../assets/icons/icon-checkmark.svg";

// Recibe la etiqueta a mostrar, el valor actual y el valor esperado para el ítem
const DropdownItem = ({ label, currentUnit, expectedUnit }) => {
  const isSelected = currentUnit === expectedUnit;
  
  // Clases base comunes a todos los ítems de unidad
  const baseClasses = 
    "flex items-center gap-2 pl-4 p-2 w-full font-bold text-text-card-light dark:text-text-dark rounded-md cursor-pointer hover:dark:bg-Neutral-600";
  
  // Clase condicional para el estado seleccionado
  const selectedClass = isSelected ? "dark:bg-Neutral-700 bg-Neutral-0" : "";
  
  return (
    <li className={`${baseClasses} ${selectedClass}`}>
      {label}
      {/* Solo muestra el ícono si está seleccionado */}
      {isSelected && (
        <img src={iconCheck} alt={`selected-${label}`} className="ml-auto invert dark:invert-0" />
    
      )}
    </li>
  );
};

export default DropdownItem;