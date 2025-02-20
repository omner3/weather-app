import { TodaysHightlights } from "./TodaysHightlights"
import { WeeklyWeather } from "./WeeklyWeather"

export function WeatherContent() {
  return (
    <div className='w-full h-fit min-h-screen flex flex-col items-center bg-[#100e1d] md:w-[70%]'>
      <WeeklyWeather />
      <TodaysHightlights/>
    </div>
  )
}