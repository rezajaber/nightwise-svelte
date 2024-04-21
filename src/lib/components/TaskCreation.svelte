<script>
	import { Input } from '$lib/components/ui/input';
	import ControlBar from '$lib/components/taskcreation/ControlBar.svelte';
	import TaskSideInformation from '$lib/components/taskcreation/TaskSideInformation.svelte';
</script>

<div
	class="relative rounded-xl bg-gradient-to-b from-border to-card p-px px-4 py-5 shadow-lg transition-all"
>
	<ControlBar />
	<Input
		class="font-regular mt-7 w-full border-0 bg-secondary px-4 text-3xl text-primary caret-accent focus-visible:outline-none focus-visible:ring-0"
	/>
</div>
