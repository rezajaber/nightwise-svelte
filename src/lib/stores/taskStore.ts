// src/lib/stores/TaskStore.ts
import { writable } from 'svelte/store';
import type { Task } from '$lib/types';
import { createTask, getTasks, updateTask, deleteTask } from '$lib/api/task';
import type { BaseAuthStore } from 'pocketbase';

import Base from '../api/base';

const tasks = writable<Task[]>([]);
const doneTasks = writable<Task[]>([]);
const selectedTask = writable<Task | null>(null);
const selectedPriority = writable<string | null>(null);
const showDoneTasks = writable<boolean>(false);

async function fetchTasks() {
	const base: BaseAuthStore = Base.getAuthStore();
	if (!base.isValid) {
		return;
	}
	try {
		const fetchedTasks: Task[] = await getTasks();
		tasks.set([]);
		doneTasks.set([]);
		fetchedTasks.forEach((task: Task) => {
			if (task.task_done) {
				doneTasks.update((dTasks) => [...dTasks, task]);
			} else {
				tasks.update((t) => [...t, task]);
			}
		});
	} catch (error) {
		console.error('Failed to fetch tasks:', error);
	}
}

async function addTask(
	title: string,
	description: string,
	category_id: string,
	prio_id: string,
	due_date: Date,
	task_done: boolean
) {
	const base: BaseAuthStore = Base.getAuthStore();
	if (!base.isValid) {
		return;
	}
	try {
		const newTask: Task = await createTask(
			title,
			description,
			category_id,
			prio_id,
			due_date,
			task_done
		);
		tasks.update((t) => [...t, newTask]);
	} catch (error) {
		console.error('Failed to add task:', error);
	}
}

async function updateTaskDetails(
	taskId: string,
	title: string,
	description: string,
	category_id: string,
	prio_id: string,
	due_date: Date,
	task_done: boolean
) {
	const base = Base.getAuthStore();
	if (!base.isValid) {
		return;
	}
	try {
		const updatedTask = await updateTask(
			taskId,
			title,
			description,
			category_id,
			prio_id,
			due_date,
			task_done
		);
		tasks.update((t) => t.map((task) => (task.id === taskId ? updatedTask : task)));
	} catch (error) {
		console.error('Failed to update task:', error);
	}
}

async function removeTask(taskId: string) {
	const base = Base.getAuthStore();
	if (!base.isValid) {
		return;
	}
	try {
		await deleteTask(taskId);
		tasks.update((t) => t.filter((task) => task.id !== taskId));
	} catch (error) {
		console.error('Failed to delete task:', error);
	}
}

function selectTask(task: Task) {
	selectedTask.set(task);
}

function clearSelectedTask() {
	selectedTask.set(null);
}

function selectPriority(priorityId: string) {
	selectedPriority.set(priorityId);
}

function toggleShowDoneTasks() {
	showDoneTasks.update((value) => !value);
}

function getVisibleTasks() {
	const base = Base.getAuthStore();
	if (!base.isValid) {
		return [];
	}
	return showDoneTasks ? doneTasks : tasks;
}

export default {
	tasks,
	doneTasks,
	selectedTask,
	selectedPriority,
	showDoneTasks,
	fetchTasks,
	addTask,
	updateTask,
	removeTask,
	selectTask,
	clearSelectedTask,
	selectPriority,
	toggleShowDoneTasks,
	getVisibleTasks
};
