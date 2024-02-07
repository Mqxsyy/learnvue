<script setup>
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import { onMounted, getCurrentInstance } from "vue";

const uid = getCurrentInstance().uid;
console.log(uid);

onMounted(() => {
	const map = L.map(`map_${uid}`).setView([51.505, -0.09], 13);

	L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
		maxZoom: 19,
		attribution:
			'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	}).addTo(map);
});
</script>

<template>
	<div :id="`map_${uid}`"></div>
</template>

<style scoped>
div {
	height: 600px;
}
</style>
