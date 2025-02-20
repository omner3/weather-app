import { useState } from "react"

export function NavModal() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)


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
        >
          <img src="./src/images/location.svg" alt="location" className='w-6' />
        </div>
      </header>
      <section 
      className={`${isOpen ? 'block' : 'hidden'}
      bg-[#1e213a] w-screen h-screen absolute z-50 top-0 left-0 md:w-[30%] xl:h-[740px] 2xl:h-screen`}>
      <nav className="flex items-center justify-around w-full h-48">
        <span
          onClick={closeModal}
          className="absolute right-10 top-6 cursor-pointer">
          <img src="./src/images/close.svg" alt="close search" className="w-7"/>
        </span>
        <div className="flex items-center w-[55%] max-w-[268px] h-9 bg-transparent border border-[#E7E7EB]  font-medium text-base text-[#616475]">
          <img src="./src/images/search.svg" alt="search icon" className="w-7 px-1" />
          <input className="bg-transparent outline-none w-[233px] h-8 pr-1 " placeholder="search location" type="text"/>
        </div>
        <button
          className=" w-20 h-9 bg-[#3C47E9] px-1 font-semibold text-base text-[#E7E7EB] hover:text-[#def341]">
          Search
        </button>
      </nav>
      </section>
    </>
  )
}