import React from 'react'
import { responseData } from '../components/Details/Details'

export const fetchData = (forecastType: string, city: string) => async (
  setWeatherObj: (value: responseData) => void
) => {
  try {
    const res = await fetch(
      `https://weatherbit-v1-mashape.p.rapidapi.com/${forecastType}?lang=en&city=${city}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
          "x-rapidapi-key": "12dfd0ae84msheb33158fbc2b3a3p194f0djsnec051d7b0c10",
        },
      }
    )
        const jsonRes = await res.json()
        setWeatherObj(jsonRes)
      } catch (err) {
        console.error(err)
      }
    }

const getWeatherForecast = (
  setError: (value: boolean) => void,
  setWeatherObj: (value: responseData) => void
) => (forecastType: string, city: string) => (e: React.SyntheticEvent) => {
  e.preventDefault()
  if (city.length === 0) return setError(true)
  setError(false)
  setWeatherObj({})
  fetchData(forecastType, city)(setWeatherObj)
}

export default getWeatherForecast
