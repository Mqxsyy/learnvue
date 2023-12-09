<script setup>
import Message from "../components/Message.vue";
import {
	GetMessageColor,
	MessageColors,
	GetMessageSize,
	MessageSizes,
} from "../components/MessageData.ts";
import { ref } from "vue";

const message1DisplayStyle = ref("block");
const message2DisplayStyle = ref("block");
const message3DisplayStyle = ref("block");

function InvertDisplayState(state) {
	if (state == "none") {
		return "block";
	} else {
		return "none";
	}
}

function GetRandomMessageColor() {
	return GetMessageColor(Math.floor(Math.random() * 7));
}

function GetRandomMessageSize() {
	return GetMessageSize(Math.floor(Math.random() * 3));
}
</script>

<template>
	<button
		class="button is-primary"
		:style="{ display: InvertDisplayState(message1DisplayStyle) }"
		@click="message1DisplayStyle = 'block'"
	>
		Open message 1
	</button>
	<Message
		:displayStyle="message1DisplayStyle"
		@close="message1DisplayStyle = 'none'"
	>
		<template #header> Message 1 </template>
		<template #body> No visual params defined </template>
	</Message>
	<button
		class="button is-primary"
		:style="{ display: InvertDisplayState(message2DisplayStyle) }"
		@click="message2DisplayStyle = 'block'"
	>
		Open message 2
	</button>
	<Message
		:displayStyle="message2DisplayStyle"
		:color="GetMessageColor(MessageColors.Primary)"
		:size="GetMessageSize(MessageSizes.Large)"
		@close="message2DisplayStyle = 'none'"
	>
		<template #header> Message 2 </template>
		<template #body> Visual params defined </template>
	</Message>
	<button
		class="button is-primary"
		:style="{ display: InvertDisplayState(message3DisplayStyle) }"
		@click="message3DisplayStyle = 'block'"
	>
		Open message 3
	</button>
	<Message
		:displayStyle="message3DisplayStyle"
		:color="GetRandomMessageColor()"
		:size="GetRandomMessageSize()"
		@close="message3DisplayStyle = 'none'"
	>
		<template #header> Message 3 </template>
		<template #body>
			Random visual parameters (randomizes when page changes)
		</template>
	</Message>
</template>
