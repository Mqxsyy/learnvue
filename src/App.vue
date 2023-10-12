<script setup>
import { ref } from "vue";
const message = ref("Hello Vue!");
const newItem = ref("");
const items = ref(["apple", "milk", "bread"]);

function Add() {
	items.push(newItem);
}
</script>

<template>
	<button @:click="Add">Click Me</button>
	<input type="text" v-model="newItem" />
	<h1>{{ message.split("").reverse().join("") }}</h1>
	<ul>
		<li v-for="item in items">{{ item }}</li>
	</ul>
</template>
