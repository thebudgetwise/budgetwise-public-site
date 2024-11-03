<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	let distanceScrolled = 0;

	let activeSection = '';
	let open = false;

	function selectSection(section: string) {
		activeSection = section;
		open = false;
	}

	onMount(() => {
		const allSections = document.querySelectorAll('section[id]');
		window.onscroll = function () {
			distanceScrolled = document.documentElement.scrollTop;
			const scrollY = window.scrollY;
			allSections.forEach((section) => {
				if (section.offsetTop-200 <= scrollY && section.offsetTop + section.offsetHeight > scrollY) {
					activeSection = section.id;
				}
			});
		};
	});
</script>

<nav class="navbar {distanceScrolled > 0 ? 'bg-glass' : null}  navbar-expand-lg bg-none">
	<div class="container">
		<a class="navbar-brand" href="#home">BWealthy</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded={open ? 'true' : 'false'}
			on:click={() => (open = !open)}
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse {open ? 'show' : undefined}" id="navbarSupportedContent">
			<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a
						class="nav-link {activeSection == 'home' ? 'active' : undefined}"
						aria-current="page"
						on:click={() => selectSection('home')}
						href="#">Home</a
					>
				</li>
				<li class="nav-item">
					<a
						class="nav-link {activeSection == 'features' ? 'active' : undefined}"
						on:click={() => selectSection('features')}
						href="#features">Features</a
					>
				</li>
				<li class="nav-item">
					<a
						class="nav-link {activeSection == 'about' ? 'active' : undefined}"
						href="#about"
						on:click={() => selectSection('about')}>About</a
					>
				</li>
				
				<li class="nav-item">
					<a
						class="nav-link {activeSection == 'app' ? 'active' : undefined}"
						href="#app"
						on:click={() => selectSection('app')}>App</a
					>
				</li>
				
				<li class="nav-item">
					<a
						class="nav-link {activeSection == 'pricing' ? 'active' : undefined}"
						href="#pricing"
						on:click={() => selectSection('pricing')}>Pricing</a
					>
				</li>

				<li class="nav-item">
					<a
						class="nav-link {activeSection == 'contact' ? 'active' : undefined}"
						href="#contact"
						on:click={() => selectSection('contact')}>Contact</a
					>
				</li>
			</ul>
		</div>

		<a
			class="btn btn-primary btn-sm rounded-pill {activeSection == 'download'
				? 'active'
				: undefined} ml-3"
			on:click={() => selectSection('download')}
			href="#download">Download</a
		>
	</div>
</nav>

<style>
	nav {
		position: sticky;
		top: 0;
		overflow: hidden;
		z-index: 1000;

		transition: background-color 0.5s ease;
	}

	

	.collapse {
		transition: all 0.5s ease;
	}
</style>
