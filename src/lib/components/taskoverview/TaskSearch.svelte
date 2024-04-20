<script>
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
</script>

<div class="grid min-w-72 gap-2">
	<div class="flex gap-2.5">
		<Input
			placeholder="Search Task..."
			class="h-8 w-full border border-accent text-primary caret-accent"
		/>

		<Dialog.Root>
			<Dialog.Trigger
				><Button size="sm" class="hidden border-none bg-accent px-2.5 md:block"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#ffffff"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-circle-plus"
					>
						<circle cx="12" cy="12" r="10" />
						<path d="M8 12h8" />
						<path d="M12 8v8" />
					</svg>
				</Button>
			</Dialog.Trigger>
			<Dialog.Content class="max-w-xs rounded-md">
				<Dialog.Header>
					<Dialog.Title>Create New Task</Dialog.Title>
					<Dialog.Description class="text-white opacity-60">
						Are you sure you want to create a new task?
					</Dialog.Description>
				</Dialog.Header>

				<Dialog.Footer class="sm:justify-start">
					<Button type="button" class="w-full" size="sm">Create</Button>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	</div>

	<div class="border-red flex gap-2.5 border-2 text-white">
		<Button size="sm" class="w-2/5 border-none bg-accent text-white">Show Done</Button>

		<DropdownMenu.Root>
			<DropdownMenu.Trigger class="w-3/5">
				<Button
					size="sm"
					class="w-full justify-between border-none bg-accent px-4"
					variant="outline"
				>
					Priorities
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-arrow-down"
					>
						<path d="M12 5v14" />
						<path d="m19 12-7 7-7-7" />
					</svg>
				</Button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Content class="w-44">
				<DropdownMenu.Group>
					<DropdownMenu.Item>All</DropdownMenu.Item>
					<DropdownMenu.Item>Low</DropdownMenu.Item>
					<DropdownMenu.Item>Normal</DropdownMenu.Item>
					<DropdownMenu.Item>High</DropdownMenu.Item>
					<DropdownMenu.Item>Critical</DropdownMenu.Item>
				</DropdownMenu.Group>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
</div>
