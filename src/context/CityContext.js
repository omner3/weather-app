import { createContext, useContext, useState } from "react";

const CityContext = createContext()

export const CityProvider = ({ children }) => {
    const [selectedCity, setSelectedCity] = useState(null)

    return (
        <CityContext.Provider value={{selectedCity, setSelectedCity}}>
            {children}
        </CityContext.Provider>
    )
}

export const useCity = () => useContext(CityContext)