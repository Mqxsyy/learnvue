<script setup>
import { computed, reactive, ref } from "vue";
import ItemList from "../components/ItemList.vue";

const message = ref("");

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
	if (message.value.trim() === "") return;

	items.push({ id: i++, name: message.value, isDone: false });
	message.value = "";
}
</script>

<template>
	<div class="container">
		<div class="field has-addons">
			<p class="control is-expanded">
				<input
					@keydown.enter="Add"
					type="text"
					v-model="message"
					class="input"
				/>
			</p>
			<p class="control">
				<button @:click="Add" class="button is-primary">Click Me</button>
			</p>
		</div>
		<div class="content">
			<ItemList :items="items" title="All items"></ItemList>
			<ItemList :items="doneItems" title="Done items"></ItemList>
			<ItemList :items="todoItems" title="Todo items"></ItemList>
		</div>
	</div>
</template>
