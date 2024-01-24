<script setup>
import axios from "axios";
import { ref } from "vue";
import CharacterCard from "../components/CharacterCard.vue";

let info = ref({});
let chars = ref([]);
let page = ref(1);

GetCharacters(page.value);

async function GetCharacters(page) {
	const response = await axios.get(
		"https://rickandmortyapi.com/api/character",
		{
			params: {
				page,
			},
		}
	);

	info.value = response.data.info;
	chars.value = response.data.results;
}

async function Next() {
	GetCharacters(++page.value);
}

async function Previous() {
	GetCharacters(--page.value);
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

			<p v-for="num in 3" :key="num" class="control">
				<button class="button">
					<span>{{ num }}</span>
				</button>
			</p>

			<p class="control">
				<button class="button is-static">
					<span>...</span>
				</button>
			</p>

			<p class="control">
				<button class="button">
					<span>{{ page - 2 }}</span>
				</button>
			</p>
			<p class="control">
				<button class="button">
					<span>{{ page - 1 }}</span>
				</button>
			</p>
			<p class="control">
				<button class="button is-primary">
					<span>{{ page }}</span>
				</button>
			</p>
			<p class="control">
				<button class="button">
					<span>{{ page + 1 }}</span>
				</button>
			</p>
			<p class="control">
				<button class="button">
					<span>{{ page + 2 }}</span>
				</button>
			</p>

			<p class="control">
				<button class="button is-static">
					<span>...</span>
				</button>
			</p>

			<p class="control">
				<button class="button">
					<span>{{ info.pages - 2 }}</span>
				</button>
			</p>
			<p class="control">
				<button class="button">
					<span>{{ info.pages - 1 }}</span>
				</button>
			</p>
			<p class="control">
				<button class="button">
					<span>{{ info.pages }}</span>
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
