<script>
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	let conf = getContext('config');
	let isMobile = getContext('mobile');
	let theme = getContext('theme');
	export let page = '';

	let menuIcon = 'ri-menu-3-line';
	let menuShow = isMobile ? false : true;
	function handleShowMenu() {
		menuShow = !menuShow;
		menuIcon = menuShow ? 'ri-close-line' : 'ri-menu-3-line';
	}
	
	function toggleTheme() {
		theme.toggle();
	}
</script>

<header id="mobile-header" class:whole={page != 'home'}>
	<div class="logo">
		<img src="/logo_inverse.png" alt={conf['name']} />
		<span>{conf['name']}</span>
	</div>
	{#if menuShow}
		<div
			class="nav"
			transition:fly={{
				duration: isMobile ? 200 : 0,
				y: 40,
				opacity: 0,
				easing: quintOut,
			}}
		>
			{#each conf['nav'] as row}
				<a
					href={row.url}
					class:active={(row.url === '#/' && page === 'home') ||
						row.url.includes(page)}
				>
					{row.name}
				</a>
			{/each}
		</div>
	{/if}
	<div class="icon">
		<!-- 主题切换按钮 -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<i 
			class="theme-toggle {$theme === 'dark' ? 'ri-sun-line' : 'ri-moon-line'}"
			on:click={toggleTheme}
			title={$theme === 'dark' ? '切换到白天模式' : '切换到夜间模式'}
		/>
		
		{#if conf['github'] != ''}
			<a
				href={conf['github']}
				target="_blank"
				title="点击访问GITHUB仓库"
				rel="noreferrer"
			>
				<i class="ri-github-line" />
			</a>
		{/if}
		{#if conf['qqgroup'] != ''}
			<a
				href={conf['qqgroup']}
				target="_blank"
				rel="noreferrer"
				title="点击加官方交流群"
			>
				<i class="ri-qq-line color-blue" />
			</a>
		{/if}
		{#if conf['wechat'] === true}
			<i class="ri-wechat-2-line color-green" />
		{/if}
	</div>

	{#if isMobile}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<i class="{menuIcon} menu" on:click={handleShowMenu} />
	{/if}
</header>
{#if page == 'home'}
	<div class="bg-box" />
{/if}

<style>
.theme-toggle {
	cursor: pointer;
	transition: transform 0.2s ease, color 0.2s ease;
	margin-left: 12px;
	font-size: 24px;
}

.theme-toggle:hover {
	transform: scale(1.1);
}

.theme-toggle:active {
	transform: scale(0.95);
}

/* 白天模式下的按钮颜色调整 */
:global(body[data-theme="light"]) .theme-toggle {
	color: #4a4a4a !important;
}

:global(body[data-theme="light"]) .theme-toggle:hover {
	color: #752bec !important;
}
</style>
