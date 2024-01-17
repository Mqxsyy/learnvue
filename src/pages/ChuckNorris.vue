<script setup>
import axios from "axios";
import { ref } from "vue";

let joke = ref("");
let res = await axios.get("https://api.chucknorris.io/jokes/random");
joke.value = res.data.value;
// axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
// 	joke.value = res.data.value;
// });
</script>

<template>
	<div class="container">
		<div class="content">
			<h2>
				{{ joke }}
			</h2>
		</div>
	</div>
</template>
