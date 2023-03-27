import axios from 'axios';
import { useWeatherStore } from '@/stores/weather.js'

export const searchCities = async (city) => {
	const weatherStore = useWeatherStore();

	let url = import.meta.env.VITE_BASE_URL
	try {
	let results = await axios.get(url + '/search.json?key=' + import.meta.env.VITE_API_KEY + '&q=' + city)

	if(results) {
		weatherStore.searchResults = results.data
	}
	} catch(error) {
		console.log(error)
	}
}

export const fetchWeatherData = async (city) => {
	const weatherStore = useWeatherStore();

	let url = import.meta.env.VITE_BASE_URL
	try {

		let results = await axios.get(url + '/forecast.json?key=' + import.meta.env.VITE_API_KEY + '&q=' + city + '&days=3&aqi=no&alerts=no')

		weatherStore.location = results.data.location
		weatherStore.current = results.data.current
		weatherStore.forecastHour = results.data.forecast.forecastday[0].hour.slice(19)

		weatherStore.forecastDay = []

		results.data.forecast.forecastday.forEach((day) => {
			var details = {}
			details['date'] = day.date
			details['day'] = day.day
			weatherStore.forecastDay.push(details)
		})

	} catch(error) {
		console.log(error)
	}
}