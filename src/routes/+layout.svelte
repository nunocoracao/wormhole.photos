<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
</script>


<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<!-- App Bar -->

		<img class="w-32 lg:w-72 xl:w-80 2xl:w-96" src="wormhole-logo.png" alt=""/>
		
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
