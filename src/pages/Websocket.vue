<script setup>
import { ref } from "vue";
const messages = ref([]);
const message = ref("");

const name = ref("");
const nameInput = ref("");

let socket;

function Send() {
	if (message.value.trim() === "") return;

	socket.send(
		JSON.stringify({ name: name.value, message: message.value, isMe: false })
	);
	messages.value.push({
		name: name.value,
		message: message.value,
		isMe: true,
	});

	message.value = "";
}

function Join() {
	if (nameInput.value.trim() === "") return;

	name.value = nameInput.value;

	// Create WebSocket connection.
	socket = new WebSocket("ws://localhost:8080");

	// Connection opened
	socket.addEventListener("open", (event) => {
		// socket.send("Hello Server!");
	});

	// Listen for messages
	socket.addEventListener("message", (event) => {
		console.log("Message from server ", event.data);
		messages.value.push(JSON.parse(event.data));
	});
}
</script>

<template>
	<div class="container" v-if="name">
		<div class="field has-addons">
			<div class="control is-expanded">
				<input
					class="input"
					type="text"
					placeholder="Write something"
					v-model="message"
					@keydown.enter="Send()"
				/>
			</div>
			<div class="control">
				<a class="button is-info" @click="Send()"> Send </a>
			</div>
		</div>

		<div
			class="notification is-light"
			v-for="message in messages"
			:class="{ 'is-primary': message.isMe, 'is-link': !message.isMe }"
		>
			{{ message.message }}
			<p class="has-text-dark has-text-weight-semibold">{{ message.name }}</p>
		</div>
	</div>

	<div class="container" v-else>
		<div class="field has-addons">
			<div class="control is-expanded">
				<input
					class="input"
					type="text"
					placeholder="Insert name"
					v-model="nameInput"
					@keydown.enter="Join()"
				/>
			</div>
			<div class="control">
				<a class="button is-info" @click="Join()"> Join </a>
			</div>
		</div>
	</div>
</template>
