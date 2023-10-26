<script setup>
import { reactive, ref } from "vue";

const message = ref("Hello Vue!");
const items = reactive(["apple", "milk", "bread"]);

function Add() {
	items.push(message.value);
}
</script>

<template>
	<button @:click="Add">Click Me</button>
	<input type="text" v-model="message" />
	<h1>{{ message.split("").reverse().join("") }}</h1>
	<ul>
		<li v-for="item in items">{{ item }}</li>
	</ul>
</template>
