<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>


<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->

		<div class="justify-center">
			<div class="max-w-[1200px] mx-auto">
				<a class="fixed" href="/">
					<img class="w-32 mb-[-400px]" src="wormhole-logo.png" alt=""/>
				</a>
			</div>
		</div>
		
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
