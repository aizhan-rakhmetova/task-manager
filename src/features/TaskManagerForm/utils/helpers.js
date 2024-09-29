export const createTaskEntity = (data) => {
    return {
        title: data.title,
        description: data.description,
        completed: false,
        subtasks: data.subtasks.map(subtask => ({
            title: subtask.title,
            description: subtask.description,
            completed: false,
        })),
    };
};

export const toggleTaskCompletion = (tasks, index) => {
    return tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
    );
};

export const toggleSubtaskCompletion = (tasks, taskIndex, subtaskIndex) => {
    return tasks.map((task, i) => {
        if (i === taskIndex) {
            const subtasks = task.subtasks.map((subtask, j) =>
                j === subtaskIndex ? { ...subtask, completed: !subtask.completed } : subtask
            );
            return { ...task, subtasks };
        }
        return task;
    });
};

export const deleteTask = (tasks, index) => {
    return tasks.filter((_, i) => i !== index);
};

export const deleteSubtask = (tasks, taskIndex, subtaskIndex) => {
    return tasks.map((task, i) => {
        if (i === taskIndex) {
            const subtasks = task.subtasks.filter((_, j) => j !== subtaskIndex);
            return { ...task, subtasks };
        }
        return task;
    });
};
