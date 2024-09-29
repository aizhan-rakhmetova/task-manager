import React, {useState} from "react";

import {SubTaskList} from "../SubTaskList";
import {deleteTask, toggleTaskCompletion} from "../../../utils";
import styles from "../../../ui/TaskManagerForm.module.scss";

export const TaskList = ({tasks, setTasks}) => {
    const [expandedTasks, setExpandedTasks] = useState({});
    const handleToggleTaskCompletion = (index) => {
        const updatedTasks = toggleTaskCompletion(tasks, index);
        setTasks(updatedTasks);
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = deleteTask(tasks, index);
        setTasks(updatedTasks);
    };

    const handleToggleSubTasks = (index) => {
        setExpandedTasks(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className={styles.taskListWrapper}>
            <h2>Task List</h2>
            {tasks && tasks.length > 0 ? (
                <ul className={styles.taskList}>
                    {tasks.map((task, index) => (
                        <li key={index} className={styles.taskItemWrapper}>
                            <div>
                                <h3>Task {index+1}</h3>
                                <div className={styles.listItem}>
                                    <h4 >Title: {task.title}</h4>
                                    <p>Description: {task.description}</p>
                                </div>
                                <p className={task.completed ? styles.completed : styles.uncompleted}>
                                    {task.completed ? 'Completed' : 'Not Completed'}
                                </p>
                                <div className={styles.buttonsWrapper}>
                                    <button onClick={() => handleToggleTaskCompletion(index)}>
                                        {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                                    </button>
                                    <button className={styles.removeButton} onClick={() => handleDeleteTask(index)}>Delete Task</button>
                                </div>
                            </div>
                            <h3 className={styles.extension} onClick={() => handleToggleSubTasks(index)}>
                                Subtasks of Task {index + 1}
                            </h3>
                            { expandedTasks[index] && (
                                <SubTaskList
                                    tasks={tasks}
                                    setTasks={setTasks}
                                    task={task}
                                    index={index}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            ) : <p className={styles.emptyList}> You may add some tasks to the list </p>
            }
        </div>
    );
};