<script>
	import TaskSearch from '$lib/components/taskoverview/TaskSearch.svelte';
	import TaskList from '$lib/components/taskoverview/TaskList.svelte';
</script>

<div
	class="relative rounded-xl bg-gradient-to-b from-border to-card p-px px-4 py-5 shadow-lg transition-all"
>
	<div class="mb-8">
		<TaskSearch />
	</div>
	<TaskList />
</div>
