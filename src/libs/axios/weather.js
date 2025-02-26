import { instance } from "./instance"


const token = import.meta.env.VITE_API_KEY

export async function getCurrentWeather(lat, lon) {
    try {
        const { status, data } = await instance.get(`weather?lat=${lat}&lon=${lon}&appid=${token}`)
        return { status, data }
    } catch (error) {
        throw error
    }
}

export async function getForecast(lat, lon) {
    try {
        const { status, data } = await instance.get(`forecast?lat=${lat}&lon=${lon}&appid=${token}`)
        // console.log(data.list)
        const result = []

        const current = new Date()
        function exist(item) {
            return result.some((weather) => {
                const date = new Date(weather.dt * 1000)
                const current = new Date(item.dt * 1000)
                if (current.getDate() === date.getDate()) {
                    return true
                }
            }
            )
        }

        data.list.forEach(item => {
            const date = new Date(item.dt * 1000)
            if (((current.getDate() < date.getDate()) || (current.getMonth() < date.getMonth()))
                && !exist(item)) {
                result.push(item)
            }
        });

        // console.log(result)
        return { status, result }
    } catch (error) {
        throw error
    }
}

export function getIcons(weatherCode) {
    const iconMap = {
        "01d": "01d.png",
        "01n": "01n.png",
        "02d": "02d.png",
        "02n": "02n.png",
        "03d": "03d.png",
        "03n": "03n.png",
        "04d": "04d.png",
        "04n": "04n.png",
        "09d": "09d.png",
        "09n": "09n.png",
        "10d": "10d.png",
        "10n": "10n.png",
        "11d": "11d.png",
        "11n": "11n.png",
        "13d": "13d.png",
        "13n": "13n.png",
        "50d": "50d.png",
        "50n": "50n.png"
    }

    return `/images/weather/${iconMap[weatherCode]}`;

}