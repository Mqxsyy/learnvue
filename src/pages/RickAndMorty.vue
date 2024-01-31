<script setup>
import axios from "axios";
import { ref } from "vue";
import CharacterCard from "../components/CharacterCard.vue";

let info = ref({});
let chars = ref([]);
let page = ref(1);

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
	chars.value = response.data.results;
	page.value = pageNumber;
}

async function Next() {
	GetCharacters(++page.value);
}

async function Previous() {
	GetCharacters(--page.value);
}

function MakePagination(current, total) {
	let pages = [];
	for (let i = 1; i <= 3; i++) {
		pages[i] = i;
	}

	if (current > 2 && current < total - 1) {
		pages.push("...");

		for (let i = current - 1; i <= current + 1; i++) {
			pages[i] = i;
		}
	}

	pages.push("...");

	for (let i = total - 2; i <= total; i++) {
		pages[i] = i;
	}

	return pages.filter((value) => value);
}
</script>

<template>
	<div class="container">
		<div class="field has-addons">
			<p class="control">
				<button :disabled="!info.prev" class="button" @click="Previous()">
					<span>Previous</span>
				</button>
			</p>

			<p
				v-for="num in MakePagination(page, info.pages)"
				:key="num"
				class="control"
			>
				<button
					class="button"
					:class="{ 'is-static': num === '...', 'is-primary': num === page }"
					@click="GetCharacters(num)"
				>
					<span>{{ num }}</span>
				</button>
			</p>

			<p class="control">
				<button :disabled="!info.next" class="button" @click="Next()">
					<span>Next</span>
				</button>
			</p>
		</div>
		<div class="columns is-multiline">
			<div v-for="char in chars" :key="char.id" class="column is-one-quarter">
				<CharacterCard :character="char" />
			</div>
		</div>
	</div>
</template>
