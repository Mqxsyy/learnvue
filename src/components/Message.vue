<script setup>
import {
	GetMessageColor,
	MessageColors,
	GetMessageSize,
	MessageSizes,
} from "./MessageData";

defineProps({
	displayStyle: {
		type: String,
		default: "block",
	},
	color: {
		type: String,
		default: GetMessageColor(MessageColors.Dark),
	},
	size: {
		type: String,
		default: GetMessageSize(MessageSizes.Normal),
	},
});
</script>
<template>
	<article
		:class="['message ' + color + ' ' + size]"
		:style="{ display: displayStyle }"
	>
		<div class="message-header">
			<slot name="header"></slot>
			<button
				class="delete"
				aria-label="delete"
				@click="$emit('close')"
			></button>
		</div>
		<div class="message-body">
			<slot name="body"></slot>
		</div>
	</article>
</template>
