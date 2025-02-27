import { useScale } from "../context/ScaleContext"

export function TemperatureScale() {
  const { scale, setCelsius, setFahrenheit } = useScale()

  return (
    <div className="flex justify-end items-end h-20 w-64 gap-5 md:max-w-2xl md:w-full">
      <button
        className={`w-10 h-10 pr-1 pt-1 text-center text-xl font-bold rounded-full 
          ${scale === "celsius" ? "bg-[#E7E7EB] text-[#110E3C]" : "bg-[#585676] text-[#E7E7EB]"
          }`}
        onClick={setCelsius}
      >
        °C
      </button>
      <button
        className={`w-10 h-10 pr-1 pt-1 text-center text-xl font-bold rounded-full 
          ${scale === "celsius" ? "bg-[#585676] text-[#E7E7EB]" : "bg-[#E7E7EB] text-[#110E3C]"
          }`}
        onClick={setFahrenheit}
      >
        °F
      </button>

    </div>
  )
}