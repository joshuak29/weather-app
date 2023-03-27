<template>
	<div class="w-[20%] h-full border-gray-500 flex flex-col p-2">
          
          <!-- time -->
          <div class="w-full h-1/4 text-center text-white">{{ data.time.split(" ")[1]}}</div>

          <!-- condition -->
          <div class="w-full grow border-r border-gray-500 flex items-center justify-center"><img :src="data.condition.icon"></div>

          <!-- temp -->
          <div class="w-full h-1/4 font-medium text-lg text-center text-white">{{data.temp_c}}&deg</div>
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