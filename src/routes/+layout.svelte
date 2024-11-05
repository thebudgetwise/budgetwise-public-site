<script lang="ts">
	import '../bootstrap2.css';
	import '../app.css';
	import Footer from './Footer.svelte';
	import Navbar from './Navbar.svelte';

	import 'aos/dist/aos.css';
	// @ts-ignore
	import AOS from 'aos';

	import { onMount } from 'svelte';

	onMount(() => {
		AOS.init();
	});

	let { children } = $props();
</script>

<div class="app">
	<Navbar />

	<main>
		{@render children()}
	</main>

	<Footer />
</div>
