import { instance } from "./instance"


const token = import.meta.env.VITE_API_KEY

export async function getCurrentWeather(city = 'Puebla', ctry = 'mx') {
    try {
        const { status, data } = await instance.get(`weather?q=${city},${ctry}&APPID=${token}`)
        return { status, data }
    } catch (error) {
        throw error
    }
}

export async function getForecast(city = 'Puebla') {
    try {
        const { status, data } = await instance.get(`forecast?q=${city}&appid=${token}`)
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

        console.log(result)
        return { status, result }
    } catch (error) {
        throw error
    }
}