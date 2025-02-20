import { TemperatureScale } from "./TemperatureScale"

export function WeeklyWeather() {
    return (
      <>
        <TemperatureScale />
        <section className="w-full md:px-5">
          <ul className="grid grid-cols-2 w-fit mx-auto gap-5 mt-5 md:max-w-2xl md:flex md:flex-row md:flex-wrap md:gap-4 md:w-fit">
            <li className="w-[7.5rem] h-40 bg-[#1E213A] flex flex-col items-center justify-center text-[#E7E7EB] text-base font-medium">
              <h3 className=" mb-2">Tomorrow</h3>
              <span className="flex items-center justify-center w-14 h-16">
                <img src="./src/images/weather/03d.png" alt="" />
              </span>
              <div className=" flex gap-2 mt-2">
                <p>23°C</p>
                <p className="text-[#A09FB1]">
                  14°C
                </p>
              </div>
            </li>
            <li className="w-[7.5rem] h-40 bg-[#1E213A] flex flex-col items-center justify-center text-[#E7E7EB] text-base font-medium">
              <h3 className=" mb-2">
                Tue, 18 Feb
              </h3>
              <span className="flex items-center justify-center w-14 h-16">
              <img src="./src/images/weather/03d.png" alt="" />
              </span>
              <div className=" flex gap-2 mt-2">
                <p>
                  23°C
                </p>
                <p className="text-[#A09FB1]">
                  14°C
                </p>
              </div>
            </li>
            <li className="w-[7.5rem] h-40 bg-[#1E213A] flex flex-col items-center justify-center text-[#E7E7EB] text-base font-medium">
              <h3 className=" mb-2">
                Tue, 18 Feb
              </h3>
              <span className="flex items-center justify-center w-14 h-16">
              <img src="./src/images/weather/03d.png" alt="" />
              </span>
              <div className=" flex gap-2 mt-2">
                <p>
                  23°C
                </p>
                <p className="text-[#A09FB1]">
                  14°C
                </p>
              </div>
            </li>
            <li className="w-[7.5rem] h-40 bg-[#1E213A] flex flex-col items-center justify-center text-[#E7E7EB] text-base font-medium">
              <h3 className=" mb-2">
                Tue, 18 Feb
              </h3>
              <span className="flex items-center justify-center w-14 h-16">
              <img src="./src/images/weather/03d.png" alt="" />
              </span>
              <div className=" flex gap-2 mt-2">
                <p>
                  23°C
                </p>
                <p className="text-[#A09FB1]">
                  14°C
                </p>
              </div>
            </li>
            <li className="w-[7.5rem] h-40 bg-[#1E213A] flex flex-col items-center justify-center text-[#E7E7EB] text-base font-medium">
              <h3 className=" mb-2">
                Tue, 18 Feb
              </h3>
              <span className="flex items-center justify-center w-14 h-16">
              <img src="./src/images/weather/03d.png" alt="" />
              </span>
              <div className=" flex gap-2 mt-2">
                <p>
                  23°C
                </p>
                <p className="text-[#A09FB1]">
                  14°C
                </p>
              </div>
            </li>
          </ul>
        </section>
      </>
    )
  }