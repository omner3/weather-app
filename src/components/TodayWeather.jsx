import { useEffect, useState } from "react";
import { getCurrentWeather } from "../libs/axios/weather";
import { getIcons } from "../libs/axios/weather";
import { NavModal } from "./NavModal"
import { useCity } from "../context/CityContext";
import { useScale } from "../context/ScaleContext";

export function TodayWeather() {
  const { selectedCity } = useCity()
  const [data, setData] = useState(null)
  const { scale } = useScale()

  /*prueba para saber si la seleccion de ciudad era correcta*

    const handleSelectCity = (city) =>{
    console.log("Ciudad seleccionada:", city)
    setSelectedCity(city)
  } */

  console.log('clgCurrent', data);
  useEffect(() => {
    if (selectedCity) {
      getCurrentWeather(selectedCity.lat, selectedCity.lon)
        .then((response) => setData(response.data))
        .catch((error) => console.error(error))

    }
  }, [selectedCity]);

  const getTemperature = (kelvin) => {
    if (scale === "celsius") {
      return (kelvin - 273.15).toFixed(0)
    } else {
      return (((kelvin - 273.15) * 9) / 5 + 32).toFixed(0)
    }
  }

  return (
    <div className='bg-[#1e213a] w-screen h-screen md:w-[30%] xl:h-[740px] 2xl:h-screen'>
      <NavModal />
      <div className='flex flex-col items-center w-full h-[90vh]'>

        <div
          className='h-60 w-full overflow-x-hidden relative flex justify-center items-center overflow-hidden'>
          <div className='h-full absolute z-30 w-full -top-1/2 translate-y-1/2'>
            <img src="/images/others/Cloud-background.png" alt="clouds background"
              className='opacity-10 object-cover w-full h-full'
            />
          </div>
          <div className='absolute w-40 aspect-square'>
            <img src={getIcons(data?.weather[0].icon)} alt={(data?.weather[0].icon)} />
          </div>
        </div>

        <div className='flex items-center'>
          <h2 className="text-9xl text-[#E7E7EB] my-8">
            {getTemperature(data?.main?.temp)}
          </h2>
          <h3 className="mt-6 text-6xl text-[#A09FB1] font-medium">
            {scale === "celsius" ? "°C" : "°F"}
          </h3>
        </div>
        <h2
          className="capitalize pt-6 pb-12 text-3xl text-[#A09FB1] font-semibold"
        >
          {data?.weather[0]?.description}
        </h2>
        <p className=" text-sm text-[#88869D] font-medium mb-6">
          Today &nbsp;&nbsp; . &nbsp;&nbsp;
          {new Date(data?.dt * 1000).toLocaleDateString("en-US", {
            weekday: "short",
            day: "numeric",
            month: "short"
          })}
        </p>
        <pre
          className="flex items-center gap-2 text-sm text-[#88869D] h-10  bottom-0 font-semibold mb-2">
          <img src="/images/location_on.svg" alt="location on"
            className="w-5"
          />
          {data?.name}
        </pre>

      </div>
    </div>
  )
}