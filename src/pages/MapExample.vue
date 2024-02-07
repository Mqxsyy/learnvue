<script setup>
import LeafletMap from "../components/LeafletMap.vue";
import { ref } from "vue";

const coords = ref(null);
const markers = ref([
	[59.42691, 24.7635],
	[59.42691, 24.7535],
	[59.42691, 24.7435],
	[59.42691, 24.7335],
	[59.42691, 24.7235],
]);

navigator.geolocation.getCurrentPosition((position) => {
	coords.value = [position.coords.latitude, position.coords.longitude];
});
</script>

<template>
	<button @click="coords = [59.22998, 24.71565]">Go To Kurtna</button>
	<button @click="coords = [59.42691, 24.7435]">Go To School</button>
	<LeafletMap v-if="coords" :center="coords" :zoom="18" :markers="markers" />
	<LeafletMap :center="[59.42691, 24.7435]" :zoom="18" :markers="[]" />
</template>
