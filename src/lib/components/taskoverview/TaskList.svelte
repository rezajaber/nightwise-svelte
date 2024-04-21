<script>
	import { Separator } from '$lib/components/ui/separator';
	import { Checkbox } from '$lib/components/ui/checkbox';
</script>

<div class="flex justify-between">
	<p class="align-middle text-sm font-semibold text-primary">Tasks</p>
	<p class="text-sm font-semibold text-primary">0</p>
</div>

<Separator class="mt-1 bg-primary"></Separator>

<div>
	<div class="no-scrollbar h-96 overflow-x-hidden overflow-y-scroll">
		<div class="px-2.5">
			<div
				class="mt-5 flex cursor-pointer items-center justify-between rounded-lg duration-300 ease-in-out hover:scale-105 hover:bg-secondary hover:px-2 hover:py-2"
			>
				<div class="grid gap-1.5">
					<div class="flex items-center space-x-2 text-primary">
						<Checkbox />
						<p class="break-all text-sm leading-none">Task Title Placeholder</p>
					</div>
					<p class="break-all pl-6 text-justify text-xs text-primary opacity-60">
						Task Description Placeholder
					</p>
				</div>

				<div class="flex items-center gap-1.5"></div>
			</div>
		</div>
	</div>
</div>
