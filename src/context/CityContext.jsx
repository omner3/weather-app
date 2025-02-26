import { createContext, useContext, useState } from "react";

const CityContext = createContext()

export const CityProvider = ({ children }) => {
    const [selectedCity, setSelectedCity] = useState({
        name: "Puebla",
        lat: 19.0414,
        lon: -98.2063,
        country: "Mexico",
        country_code: "MX"
    })

    return (
        <CityContext.Provider value={{ selectedCity, setSelectedCity }}>
            {children}
        </CityContext.Provider>
    )
}

export const useCity = () => useContext(CityContext)