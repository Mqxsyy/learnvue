<script setup>
import Modal from "./Modal.vue";
defineProps(["isOpen", "src", "alt"]);
</script>

<template>
	<Modal :isOpen="isOpen" @close="$emit('close')">
		<p class="image is-4by3">
			<img :src="src" :alt="alt" />
		</p>
	</Modal>
</template>
