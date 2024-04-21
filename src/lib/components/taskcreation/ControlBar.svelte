<script>
	import MarkDownLegend from './MarkDownLegend.svelte';
	import InformationLegend from './InformationLegend.svelte';

	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
</script>

<div class="flex justify-between">
	<div class="flex items-center gap-2">
		<Button size="xs" class="border-none bg-accent text-white">Create</Button>

		<Dialog.Root>
			<Dialog.Trigger>
				<Button size="xs" class="border-none bg-accent text-white"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-list-checks"
					>
						<path d="m3 17 2 2 4-4" />
						<path d="m3 7 2 2 4-4" />
						<path d="M13 6h8" />
						<path d="M13 12h8" />
						<path d="M13 18h8" /></svg
					></Button
				>
			</Dialog.Trigger>
			<Dialog.Content class="max-w-xs rounded-md">
				<Dialog.Header>
					<Dialog.Title>Finish Task</Dialog.Title>
					<Dialog.Description class="text-white opacity-60">
						Is this task finished and can be moved to the done section?
					</Dialog.Description>
				</Dialog.Header>

				<Dialog.Footer class="sm:justify-start">
					<Button type="button" class="w-full" size="sm">Done</Button>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>

		<Dialog.Root>
			<Dialog.Trigger>
				<Button size="xs" class="border-none bg-accent text-white"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-trash-2"
					>
						<path d="M3 6h18" />
						<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
						<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
						<line x1="10" x2="10" y1="11" y2="17" />
						<line x1="14" x2="14" y1="11" y2="17" /></svg
					></Button
				>
			</Dialog.Trigger>
			<Dialog.Content class="max-w-xs rounded-md">
				<Dialog.Header>
					<Dialog.Title>Delete Task</Dialog.Title>
					<Dialog.Description class="text-white opacity-60">
						Are you sure you want to delete the task?
					</Dialog.Description>
				</Dialog.Header>

				<Dialog.Footer class="sm:justify-start">
					<Button type="button" class="w-full" size="sm">Delete</Button>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	</div>

	<div class="flex items-center gap-2">
		<MarkDownLegend />
		<InformationLegend />
	</div>
</div>
