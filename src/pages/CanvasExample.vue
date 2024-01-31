<script setup>
import { onMounted, ref } from "vue";
import CanvasBox from "../components/CanvasBox.vue";

const myCanvas = ref(null);
const context = ref(null);

const radius = ref(150);

const x = ref(10);
const y = ref(10);

onMounted(() => {
	context.value = myCanvas.value.getContext("2d");
	context.value.beginPath();
	context.value.arc(400, 300, radius.value, 0, 2 * Math.PI);
	context.value.stroke();
});

function Draw() {
	context.value.reset();
	context.value.beginPath();
	context.value.arc(400, 300, radius.value, 0, 2 * Math.PI);
	context.value.stroke();
}

function Hover(event) {
	x.value = event.offsetX;
	y.value = event.offsetY;
}
</script>

<style scoped>
canvas {
	border: 1px solid black;
}
</style>

<template>
	<div class="container">
		<input
			type="range"
			min="10"
			max="300"
			step="1"
			v-model="radius"
			@input="Draw()"
		/>
		<br />
		<canvas ref="myCanvas" width="800" height="600" @mousemove="Hover"></canvas>
		<CanvasBox v-if="context" :context="context" :x="x" :y="y" />
	</div>
</template>
