import { useState } from "react"
import cities from "../static_Json/cities.json"
import { useCity } from "../context/CityContext"

export function NavModal() {
  const { setSelectedCity } = useCity()
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredCities, setFilteredCities] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const handleSearch = () => {
    if (searchQuery.length > 2) {
      const filtered = cities.filter((city) =>
        city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        city.country.toLowerCase().includes(searchQuery.toLowerCase())
      )
        .slice(0, 3)
      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  }

  const handleSelectCity = (city) => {
    setSelectedCity(city);
    setSearchQuery("");
    setFilteredCities([])
    closeModal()
  }

  function success(position) {
    const { latitude, longitude } = position.coords

    const userLocation = {
      name: "Your Location",
      lat: latitude,
      lon: longitude,
      country: "Unknown",
      country_code: "LOC",
    }
    setSelectedCity(userLocation)
  }
  
  function error() {
    console.error("Sorry, no position available.");
  }
  
  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
  };

  return (
    <>
      <header className='flex justify-around items-end h-16'>
        <button
          onClick={openModal}
          className='w-44 h-9 bg-[#6e7070] text-white text-center'>
          Search for places
        </button>
        <div
          className=" flex items-center justify-center w-10 h-10 bg-[#ffffff33] rounded-full cursor-pointer"
          onClick={() => navigator.geolocation.getCurrentPosition(success, error, options)}
        >
          <img src="/images/location.svg" alt="location" className='w-6' />
        </div>
      </header>
      <section
        className={`${isOpen ? 'block' : 'hidden'}
      bg-[#1e213a] w-screen h-screen absolute z-50 top-0 left-0 md:w-[30%] xl:h-[740px] 2xl:h-screen`}>
        <nav className="flex items-center justify-around w-full h-48">
          <span
            onClick={closeModal}
            className="absolute right-10 top-6 cursor-pointer">
            <img src="/images/close.svg" alt="close search" className="w-7" />
          </span>
          <div className="flex items-center w-[55%] max-w-[268px] h-9 bg-transparent border border-[#E7E7EB]  font-medium text-base text-[#616475]">
            <img src="/images/search.svg" alt="search icon" className="w-7 px-1" />
            <input
              className="bg-transparent outline-none w-[233px] h-8 pr-1 "
              placeholder="search location"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            className=" w-20 h-9 bg-[#3C47E9] px-1 font-semibold text-base text-[#E7E7EB] hover:text-[#def341]"
            onClick={handleSearch}
          >
            Search
          </button>
        </nav>
        <div className="mt-1 px-5">
          {filteredCities.map((city) => (
            <div
              key={city.id}
              className="flex items-center justify-between p-3 mb-2 bg-[#1E213A] text-[#E7E7EB] cursor-pointer hover:bg-[#3C47E9]"
              onClick={() => handleSelectCity(city)}
            >
              <span>
                {city.name}, {city.country}
              </span>
              <span>{city.country_code}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}