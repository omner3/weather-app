import { createContext, useContext, useState } from "react";

const ScaleContext = createContext();

export const ScaleProvider = ({ children }) => {
  const [scale, setScale] = useState("celsius")

  const setCelsius = () => setScale("celsius")
  const setFahrenheit = () => setScale("fahrenheit")

  return (
    <ScaleContext.Provider value={{ scale, setCelsius, setFahrenheit }}>
      {children}
    </ScaleContext.Provider>
  );
};

export const useScale = () => useContext(ScaleContext);