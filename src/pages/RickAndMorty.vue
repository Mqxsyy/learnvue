<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import CharacterCard from "../components/CharacterCard.vue";

const info = ref({});
const chars = ref([]);
const page = ref(1);

GetCharacters(page.value);

async function GetCharacters(pageNumber) {
	const response = await axios.get(
		"https://rickandmortyapi.com/api/character",
		{
			params: {
				page: pageNumber,
			},
		}
	);

	info.value = response.data.info;
	chars.value.push(...response.data.results);
	page.value = pageNumber;
}

async function Next() {
	GetCharacters(++page.value);
}

onMounted(() => {
	document.addEventListener("scroll", () => {
		if (
			window.scrollY + window.innerHeight >=
			document.body.clientHeight - 100
		) {
			Next();
		}
	});
});
</script>

<template>
	<div class="container">
		<div class="columns is-multiline">
			<div v-for="char in chars" :key="char.id" class="column is-one-quarter">
				<CharacterCard :character="char" />
			</div>
		</div>
	</div>
</template>
