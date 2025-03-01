import { useState, useEffect } from "react"
import { getForecast } from "../libs/axios/weather"
import { TemperatureScale } from "./TemperatureScale"
import { getIcons } from "../libs/axios/weather"
import { useCity } from "../context/CityContext"
import { useScale } from "../context/ScaleContext"

export function WeeklyWeather() {
  const { scale } = useScale()
  const { selectedCity } = useCity()
  const [data, setData] = useState(null)
  // console.log('clgForecast', data);
  useEffect(() => {
    if (selectedCity) {
      getForecast(selectedCity.lat, selectedCity.lon)
      .then((response) => setData(response.result))
      .catch((error) => console.error(error))

    }
  }, [selectedCity]);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { weekday: "short", day: "numeric", month: "short" };
    return date.toLocaleDateString("en-US", options);
  };

  const getTemperature = (kelvin) => {
    if (scale === "celsius") {
      return (kelvin - 273.15).toFixed(0)
    } else {
      return (((kelvin - 273.15) * 9) / 5 + 32).toFixed(0)
    }
  }


  return (
    <>
      <TemperatureScale />
      <section className="w-full md:px-5">
        <ul
          className="grid grid-cols-2 w-fit mx-auto gap-5 mt-5 md:max-w-2xl md:flex md:flex-row md:flex-wrap md:gap-4 md:w-fit">
          {data &&
            data.map((item, index) => (
              <li
                className="w-[7.5rem] h-40 bg-[#1E213A] flex flex-col items-center justify-center text-[#E7E7EB] text-base font-medium"
                key={index}>
                <h3 className=" mb-2">
                  {index === 0 ? "Tomorrow" : formatDate(item.dt)}
                </h3>
                <span className="flex items-center justify-center w-14 h-16">
                  <img src={getIcons(item.weather[0].icon)} alt={(item.weather[0].icon)} />
                </span>
                <div className=" flex gap-2 mt-2">
                  <p>{getTemperature(item.main.temp_max)}{scale === "celsius" ? "°C" : "°F"}</p>
                  <p className="text-[#A09FB1]">
                  {getTemperature(item.main.temp_min)}{scale === "celsius" ? "°C" : "°F"}
                  </p>
                </div>
              </li>
            ))}
        </ul>
      </section>
    </>
  )
}