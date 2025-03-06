<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main class="m-5">
	<h1 class="text-3x1 font-bold underline">
		MyApp
	</h1>

	<nav>
		<a href="/">home</a>
		<a href="/counter">counter</a>
		<a href="/todo">todo</a>
	</nav>

	{@render children()}
</main>

