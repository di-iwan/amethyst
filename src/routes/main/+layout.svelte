<script lang="ts">
	import Navbar from "$lib/components/navbar/navbar.svelte";

	let { children } = $props();
</script>

{@render children()}
