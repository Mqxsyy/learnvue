<script setup>
import Tabs from "./components/Tabs.vue";
</script>

<template>
	<Tabs></Tabs>
	<Suspense>
		<router-view></router-view>
	</Suspense>
</template>
