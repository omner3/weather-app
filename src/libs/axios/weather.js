import { instance } from "./instance"


const token = import.meta.env.VITE_API_KEY

export async function getCurrentWeather(city='Puebla', ctry='mx') {
    try {
        const { status, data } = await instance.get(`weather?q=${city},${ctry}&APPID=${token}`)
        return { status, data }
    } catch (error) {
        throw error
    }
}

export async function getForecast(city='Puebla') {
    try {
        const {status, data} = await instance.get(`forecast?q=${city}&appid=${token}`)
        return { status, data }
    } catch (error) {
        throw error
    }
}