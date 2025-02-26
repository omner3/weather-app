import '@fontsource/raleway'
import { TodayWeather } from './components/TodayWeather'
import { WeatherContent } from './components/WeatherContent'
import { CityProvider } from './context/CityContext'

function App() {
  return (
    <CityProvider>
      <div className='md:flex'>
        <TodayWeather />
        <WeatherContent />
      </div>
    </CityProvider>
  )
}

export default App
