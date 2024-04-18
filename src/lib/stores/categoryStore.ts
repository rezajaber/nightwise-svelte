// src/lib/stores/CategoryStore.ts
import { writable } from 'svelte/store';
import type { Category } from '$lib/types'; // Assuming you have types defined somewhere
import { getCategory, createCategory, deleteCategory } from '$lib/api/category';

// Create a writable store for categories
const categories = writable<Category[]>([]);
const selectedCategory = writable<Category | null>(null);

// Function to fetch categories from the API and update the store
async function fetchCategories() {
	const fetchedCategories = await getCategory();
	categories.set(fetchedCategories);
}

// Function to add a new category
async function addCategory(name: string) {
	const newCategory = await createCategory(name);
	categories.update((currentCategories) => [...currentCategories, newCategory]);
}

// Function to remove a category by id
async function removeCategory(categoryId: string) {
	try {
		await deleteCategory(categoryId);
		categories.update((currentCategories) =>
			currentCategories.filter((category) => category.id !== categoryId)
		);
	} catch (error) {
		console.error('Failed to delete category:', error);
	}
}

// Function to select a category
function selectCategory(category: Category) {
	selectedCategory.set(category);
}

// Function to clear the selected category
function clearSelectedCategory() {
	selectedCategory.set(null);
}

// Exporting the store and functions to be used in Svelte components
export default {
	categories,
	selectedCategory,
	fetchCategories,
	addCategory,
	removeCategory,
	selectCategory,
	clearSelectedCategory
};
