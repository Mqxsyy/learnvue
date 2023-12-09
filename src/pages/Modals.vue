<script setup>
import Modal from "../components/Modal.vue";
import ImgModal from "../components/ImgModal.vue";
import { ref } from "vue";
const isModal1Open = ref(false);
const isModal2Open = ref(false);
const isModal3Open = ref(false);
</script>

<template>
	<button class="button is-primary" @click="isModal1Open = true">
		Open modal
	</button>
	<button class="button is-primary" @click="isModal2Open = true">
		Open modal
	</button>
	<button class="button is-primary" @click="isModal3Open = true">
		Open modal
	</button>
	<Modal :isOpen="isModal1Open" @close="isModal1Open = false">
		<p class="image is-4by3">
			<img src="https://picsum.photos/seed/1/1280/960" alt="" />
		</p>
	</Modal>
	<Modal :isOpen="isModal2Open" @close="isModal2Open = false">
		<p class="image is-4by3">
			<img src="https://picsum.photos/seed/2/1280/960" alt="" />
		</p>
	</Modal>
	<ImgModal
		:isOpen="isModal3Open"
		@close="isModal3Open = false"
		src="https://picsum.photos/seed/3/1280/960"
		alt="altText"
	>
	</ImgModal>
</template>
