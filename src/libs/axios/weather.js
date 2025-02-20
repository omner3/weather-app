import { instance } from "./instance"

const token = 'c331525cb8c86b2d63e2bd7e2eda0968'

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