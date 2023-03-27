import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', () => {
	// const weatherData = ref(null)
	const location = ref(null)
	const current = ref(null)
	const forecastHour = ref(null)
	const forecastDay = ref(null)

  const searchResults = ref(null)

  return { searchResults, location, current, forecastHour, forecastDay }
})