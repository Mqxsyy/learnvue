<script setup>
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ref, onMounted, watch } from "vue";

const props = defineProps(["center", "zoom", "markers"]);
const mapEL = ref(null);
let map;

onMounted(() => {
	map = L.map(mapEL.value).setView(props.center, props.zoom);

	L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
		maxZoom: 19,
		attribution:
			'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	}).addTo(map);

	for (const marker of props.markers) {
		L.marker(marker).addTo(map);
	}
});

watch(
	() => props.center,
	() => {
		map.flyTo(props.center, props.zoom);
	}
);
</script>

<template>
	<div ref="mapEL"></div>
</template>

<style scoped>
div {
	height: 600px;
}
</style>
