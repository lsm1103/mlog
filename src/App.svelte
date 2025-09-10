<script>
	import Router from 'svelte-spa-router';
	import { routes } from '@/router/';
	import { setContext, onMount } from 'svelte';
	import config from '@/config.js';
	import { theme } from '@/stores/theme.js';
	import '@/style/light-theme.css';
	
	setContext('config', config);
	setContext('mobile', window.innerWidth > 576 ? false : true);
	setContext('theme', theme);
	
	onMount(() => {
		theme.init();
	});
</script>

<Router {routes} />
