"use strict";
{
    // TaskManager class
    class TaskManager {
        constructor() {
            this.tasks = [];
            this.nextId = 1;
        }
        // Add a new task
        addTask(title) {
            const newTask = {
                id: this.nextId++,
                title,
                completed: false,
            };
            this.tasks.push(newTask);
            console.log(`Task added: ${newTask.id} - "${newTask.title}"`);
        }
        // Mark a task as complete
        completeTask(id) {
            const task = this.tasks.find((task) => task.id === id);
            if (task) {
                task.completed = true;
                console.log(`Task ${id} marked as complete.`);
            }
            else {
                console.log(`Task ${id} not found.`);
            }
        }
        // List all tasks
        listTasks() {
            console.log("\nAll Tasks:");
            this.tasks.forEach((task) => {
                console.log(`[${task.completed ? "✔" : "✗"}] ${task.id}: ${task.title}`);
            });
        }
        // Filter tasks by completion status
        filterTasks(completed) {
            console.log(`\n${completed ? "Completed" : "Pending"} Tasks:`);
            const filteredTasks = this.tasks.filter((task) => task.completed === completed);
            if (filteredTasks.length === 0) {
                console.log("No tasks found.");
            }
            else {
                filteredTasks.forEach((task) => {
                    console.log(`[${task.completed ? "✔" : "✗"}] ${task.id}: ${task.title}`);
                });
            }
        }
    }
    // Example usage
    const manager = new TaskManager();
    manager.addTask("Learn TypeScript");
    manager.addTask("Build a project");
    manager.addTask("Write documentation");
    manager.listTasks();
    manager.completeTask(2);
    manager.filterTasks(true); // Show completed tasks
    manager.filterTasks(false); // Show pending tasks
    // Block Scoping
}
