// src/stores/prioStore.ts
import { writable } from 'svelte/store';
import type { Prio } from '$lib/types'; // Assuming you have types defined somewhere
import { getPrio, createPrio, deletePrio } from '$lib/api/prio';

// Create a writable store for priorities
const prios = writable<Prio[]>([]);
const selectedPrio = writable<Prio | null>(null);

// Function to fetch priorities from the API and update the store
async function fetchPrios() {
	const fetchedPrios = await getPrio();
	prios.set(fetchedPrios);
}

// Function to add a new priority
async function addPrio(name: string) {
	const newPrio = await createPrio(name);
	prios.update((currentPrios) => [...currentPrios, newPrio]);
}

// Function to remove a priority by id
async function removePrio(prioId: string) {
	try {
		await deletePrio(prioId);
		prios.update((currentPrios) => currentPrios.filter((prio) => prio.id !== prioId));
	} catch (error) {
		console.error('Failed to delete prio:', error);
	}
}

// Function to select a priority
function selectPrio(prio: Prio) {
	selectedPrio.set(prio);
}

// Function to clear the selected priority
function clearSelectedPrio() {
	selectedPrio.set(null);
}

// Exporting the store and functions to be used in Svelte components
export default {
	prios,
	selectedPrio,
	fetchPrios,
	addPrio,
	removePrio,
	selectPrio,
	clearSelectedPrio
};
