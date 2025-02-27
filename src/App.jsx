import '@fontsource/raleway'
import { TodayWeather } from './components/TodayWeather'
import { WeatherContent } from './components/WeatherContent'
import { CityProvider } from './context/CityContext'
import { ScaleProvider } from './context/ScaleContext'

function App() {
  return (
    <CityProvider>
      <ScaleProvider>
        <div className='md:flex'>
          <TodayWeather />
          <WeatherContent />
        </div>
      </ScaleProvider>
    </CityProvider>
  )
}

export default App
