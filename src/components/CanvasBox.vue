<script setup>
import { watch } from "vue";

const sideLength = 10;

const props = defineProps(["context", "x", "y"]);
props.context.rect(props.x, props.y, sideLength, sideLength);
props.context.fill();

watch(
	() => props.x,
	(newX, oldX) => {
		props.context.reset();
		// props.context.clearRect(oldX, props.y, sideLength, sideLength);
		props.context.rect(newX, props.y, sideLength, sideLength);
		props.context.fill();
	}
);

watch(
	() => props.y,
	(newY, oldY) => {
		props.context.reset();
		// props.context.clearRect(props.x, oldY, sideLength, sideLength);
		props.context.rect(props.x, newY, sideLength, sideLength);
		props.context.fill();
	}
);
</script>
