<script setup>
import { ref } from "vue";
const message = ref("Hello Vue!");
</script>

<template>
	<button @:click="message += 1">Click Me</button>
	<input type="text" v-model="message" />
	<h1>{{ message.split("").reverse().join("") }}</h1>
</template>
