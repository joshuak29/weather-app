<template>
	<div class="w-full h-full text-left text-white flex items-center pointer my-2 hover:text-gray-300 cursor-pointer">
		<h1 class="text-xl font-medium">{{ data.name}}, {{ data.country }}</h1>
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