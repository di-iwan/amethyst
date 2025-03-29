<script lang="ts">
	import Navbar from "$lib/components/navbar/navbar.svelte";

	let { children } = $props();
</script>

<div class="px-3">
	{@render children()}
</div>
