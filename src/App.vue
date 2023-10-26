<script setup>
import { computed, reactive, ref } from "vue";
import ItemList from "./components/ItemList.vue";

const message = ref("Hello Vue!");

let i = 0;
const items = reactive([
	{ id: i++, name: "apple", isDone: true },
	{ id: i++, name: "milk", isDone: true },
	{ id: i++, name: "bread", isDone: false },
	{ id: i++, name: "cheese", isDone: true },
	{ id: i++, name: "eggs", isDone: true },
]);

const doneItems = computed(() => items.filter((item) => item.isDone));
const todoItems = computed(() => items.filter((item) => !item.isDone));

function Add() {
	items.push({ id: i++, name: message.value, isDone: false });
}
</script>

<template>
	<button @:click="Add">Click Me</button>
	<input type="text" v-model="message" />
	<h1>{{ message.split("").reverse().join("") }}</h1>
	<ItemList :items="items" title="All items"></ItemList>
	<ItemList :items="doneItems" title="Done items"></ItemList>
	<ItemList :items="todoItems" title="Todo items"></ItemList>
</template>
