<script setup>
import { ref, computed, onMounted } from 'vue'
import { useWeatherStore } from '@/stores/weather.js'

import { searchCities, fetchWeatherData } from '@/utils/api'

import SearchResult from '@/components/SearchResult.vue'
import DayForecast from '@/components/DayForecast.vue'
import HourForecast from '@/components/HourForecast.vue'
import Condition from '@/components/Condition.vue'

const weatherStore = useWeatherStore();

const loadingSearch = ref(false)
const searchTerm = ref(null);
const searchCity = () => {
  searchCities(searchTerm.value)
};

const setWeatherData = (city) => {
  fetchWeatherData(city)
  weatherStore.searchResults = null
  searchTerm.value = null
};

onMounted(() => {
  setWeatherData('Kigali')
});
</script>

<template>
  <!-- container -->
  <div class="h-full bg-gray-900 flex flex-row p-2 min-h-[580px]">

    <!-- left-side navbar -->
    <aside class="bg-gray-700 h-full w-14 flex flex-col gap-8 m-2 mt-0 rounded-xl hidden">
      
    </aside>

    <!-- main center page -->
    <main class="h-full flex flex-col gap-2 m-2 mt-0 rounded-xl grow-2" v-if="weatherStore.current">

      <!-- search -->
      <div class="w-full relative">
        <input type="search" placeholder="Search for Cities" class="bg-gray-700 h-10 rounded-xl border-0 px-4 text-white w-full" :class="{'rounded-b-none': weatherStore.searchResults}" v-model="searchTerm" @change="searchCity" id="citySearch">

        <!-- results -->
        <div class="w-full h-fit bg-black/[.95] absolute px-4 rounded-b-lg" v-if="weatherStore.searchResults">
          
          <!-- items -->
          <search-result v-for="result in weatherStore.searchResults" :key="result.id" :data="result" @click="setWeatherData(result.name)" />
        </div>
      </div>
      

      <!-- main display -->
      <div class="h-fit w-full grow flex flex-row">
        <!-- city name and temp -->
        <div class="flex flex-col h-full w-1/4 gap-8 pl-12">
          <!-- city name -->
          <div>
            <p class="text-7xl font-medium text-white">{{ weatherStore.location.name || 'Madrid' }}</p>
            <p class="text-xs text-gray-500 mt-4"><span>Las updated at </span>{{ weatherStore.location.localtime.split(" ")[1] }}</p>
          </div>
          

          <!-- temp -->
          <p class="h-1/2 w-full flex flex-row items-end text-5xl font-semibold text-gray-300"> {{ weatherStore.current.temp_c }}&deg</p>
        </div>
        <div class="grow flex items-center justify-end pr-24"><img :src="weatherStore.current.condition.icon" class="h-2/3"></div>
        
      </div>

      <!-- today forecast -->
      <div class="main-today-forecast flex flex-row flex-wrap">
        <header class="w-full">TODAY'S FORECAST</header>
        <hour-forecast v-for="hour in weatherStore.forecastHour" :key="hour.time_epoch" :data="hour"/>
      </div>

      <!-- air conditions -->
      <div class="main-air-conditions">
        <header>AIR CONDITIONS</header>
        <div class="flex flex-row flex-wrap mt-4">
          <!-- <i class="fa-solid fa-temperature-high text-2xl"></i>
          <i class="fa-solid fa-wind text-2xl"></i>wind
          <i class="fa-solid fa-sun text-2xl"></i>UV
          <i class="fa-solid fa-droplet text-2xl"></i>chance of rain -->
          <condition v-for="i in 4" :key="i"/>
        </div>
      </div>
      
    </main>

    <!-- right page -->
    <section class="h-full flex flex-col gap-8 m-2 mt-0 rounded-xl grow p-8 bg-gray-700" v-if="weatherStore.current">
      <header class="text-gray-400">
        7-DAY FORECAST
      </header>

      <!-- items -->
      <day-forecast v-for="day in weatherStore.forecastDay" :key="day.date" :data="day" />

    </section>
  </div>
</template>

<style scoped>
.main-today-forecast, .main-air-conditions {
  @apply bg-gray-700 w-full grow rounded-xl p-6 text-gray-400
}


/*nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}*/

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box
}
:root {
  @apply bg-gray-900
}
</style>
