<script>
	import TaskOverview from '$lib/components/TaskOverview.svelte';
	import TaskCreation from '../lib/components/TaskCreation.svelte';
</script>

<div class="grid gap-4 md:flex md:gap-6">
	<div class="h-fit w-full md:h-auto lg:w-fit">
		<TaskOverview />
	</div>

	<div class="w-full md:h-auto lg:w-[32rem] xl:w-[40rem]">
		<TaskCreation />
	</div>
</div>
