import { useEffect, useState } from "react";
import { getCurrentWeather } from "../libs/axios/weather";
import { useCity } from "../context/CityContext";

export function TodaysHightlights() {

  const { selectedCity } = useCity()
  const [data, setData] = useState(null)

  useEffect(() => {
    if (selectedCity) {
      getCurrentWeather(selectedCity.lat, selectedCity.lon)
        .then((response) => setData(response.data))
        .catch((error) => console.error(error))

    }
  }, [selectedCity]);

  function getKm(m) {
    return (m / 1000).toFixed(2)
  }

  const getWindDirection = (degrees) => {
    if (degrees >= 337.5 || degrees < 22.5) return "N"
    if (degrees >= 22.5 && degrees < 67.5) return "NE"
    if (degrees >= 67.5 && degrees < 112.5) return "E"
    if (degrees >= 112.5 && degrees < 157.5) return "SE"
    if (degrees >= 157.5 && degrees < 202.5) return "S"
    if (degrees >= 202.5 && degrees < 247.5) return "SW"
    if (degrees >= 247.5 && degrees < 292.5) return "W"
    if (degrees >= 292.5 && degrees < 337.5) return "NW"
  }

  return (
    <>
      <div className=" w-full px-5 mt-12 mb-12 md:mb-0">
        <h2 className=" h-7 text-[#E7E7EB] text-2xl font-bold my-5">
          Today`s Hightlights
        </h2>
        <div className="w-full flex flex-col items-center gap-5 md:grid grid-cols-2">
          <div
            className="w-full h-48 bg-[#1E213A] flex flex-col items-center justify-center">
            <h2 className="text-medium text-base text-center text-[#E7E7EB]">
              Wind status
            </h2>
            <div className="flex items-end h-20 mb-4">
              <h3 className="text-[#E7E7EB] text-6xl font-bold">
                {data?.wind?.speed}
              </h3>
              <h4 className="text-[#E7E7EB] text-4xl mb-2 ml-1">
                ms
              </h4>
            </div>
            <div className="flex items-center text-[#E7E7EB] text-sm">
              <span className="flex justify-center items-center w-8 h-8 m-3 rounded-full bg-[#ffffff4d]">
                <img src="/images/navigation.svg" alt="wind direction" className="w-4" style={{ transform: `rotate(${data?.wind.deg}deg)` }} />
              </span>
              {data?.wind.deg && getWindDirection(data.wind.deg)}
            </div>
          </div>
          <div className="w-full h-48 bg-[#1E213A] flex flex-col items-center justify-center">
            <h2 className="text-medium text-base text-center text-[#E7E7EB]">
              Humidity
            </h2>
            <div className="flex items-end h-20 mb-4">
              <h3 className=" text-[#E7E7EB] text-6xl font-bold">
                {data?.main?.humidity}
              </h3>
              <h4 className="text-[#E7E7EB] text-4xl mb-2 ml-1 text-right">
                %
              </h4>
            </div>
            <div className=" w-[70%] font-bold text-xs flex justify-between text-[#A09FB1]">
              <p>
                0
              </p>
              <p>
                50
              </p>
              <p>
                100
              </p>
            </div>
            <div className="flex items-center w-[70%] h-2 bg-[#E7E7EB] rounded-3xl">
              <div 
              className="h-2 bg-[#FFEC65] rounded-3xl m-0 p-0"
              style={{ width: `${data?.main?.humidity}%`}}
              >
              </div>
            </div>
            <div className="w-[70%] text-right font-bold text-[#A09FB1]">
              %
            </div>
          </div>
          <div className=" w-full flex flex-col items-center justify-center bg-[#1E213A] py-4">
            <h2 className="text-medium text-base text-center text-[#E7E7EB]">
              Visibility
            </h2>
            <div className="flex items-end h-20 mb-4">
              <h3 className="text-[#E7E7EB] text-6xl font-bold">
                {getKm(data?.visibility)}
              </h3>
              <h4 className="text-[#E7E7EB] text-4xl mb-2 ml-1">
                km
              </h4>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center bg-[#1E213A] p-4">
            <h2 className="text-medium text-base text-center text-[#E7E7EB]">
              Air Pressure
            </h2>
            <div className="flex items-end h-20 mb-4">
              <h3 className="text-[#E7E7EB] text-6xl font-bold">
                {data?.main?.pressure}
              </h3>
              <h4 className="text-[#E7E7EB] text-4xl mb-2 ml-1">
                mb
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}