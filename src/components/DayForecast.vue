<template>	
	<div class="flex flex-col">
        <div class="border-b border-gray-500 grow flex flex-row justify-between items-center">
          <!-- day -->
          <span class="text-gray-500 text-sm">{{ data.date }}</span> 
          <!-- weather -->
          <div class="flex flex-row items-center justify-center"><img :src="data.day.condition.icon"><span class="text-white">{{ data.day.condition.text }}</span></div>
          <!-- date -->
          <span class="text-gray-500 text-sm text-white font-medium">{{ data.day.avgtemp_c }}&deg</span>
        </div>
     </div>	
</template>
<script setup>
defineProps({
	data: {
		type: Object,
		required: true
	}
})
</script>