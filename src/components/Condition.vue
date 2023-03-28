<template>
	<div class="w-1/3 flex flex-col h-full pl-4 mb-4">
          <div class="flex flex-row"><i class="fa-solid text-2xl" :class="iconToRender"></i> <span class="ml-4">{{ props.name }}</span></div>
          <div class="text-white font-bold text-2xl pl-10">{{ props.value }}</div>
	</div>
</template>
<script setup>
const props = defineProps({
	icon: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	value: {
		type: String,
		required: true
	}
})

import { computed } from 'vue'

const iconToRender = computed(() => {
	return {'fa-temperature-high': props.icon === 'temp', 'fa-sun': props.icon === 'uv', 'fa-wind': props.icon === 'wind'}
})
</script>