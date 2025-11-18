// src/context/UnitsContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const UnitsContext = createContext();

export function UnitsProvider({ children }) {
  const [units, setUnits] = useState('metric');

  const toggleUnits = () => {
    setUnits(prev => (prev === 'metric' ? 'imperial' : 'metric'));
  };

  return (
    <UnitsContext.Provider value={{ units, toggleUnits }}>
      {children}
    </UnitsContext.Provider>
  );
}

export function useUnits() {
  return useContext(UnitsContext);
};