export interface Prio {
	id: string;
	name: string;
}

export interface Category {
	id: string;
	name: string;
}

export interface Task {
	id: string;
	title: string;
	description: string;
	category_id: string;
	prio_id: string;
	due_date: Date;
	task_done: boolean;
}
