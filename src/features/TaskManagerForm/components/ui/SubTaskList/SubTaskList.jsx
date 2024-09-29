import React from "react";

import {deleteSubtask, toggleSubtaskCompletion} from "../../../utils";
import styles from "../../../ui/TaskManagerForm.module.scss";

export const SubTaskList = ({tasks, setTasks, task, index}) => {
    const handleToggleSubtaskCompletion = (taskIndex, subtaskIndex) => {
        const updatedTasks = toggleSubtaskCompletion(tasks, taskIndex, subtaskIndex);
        setTasks(updatedTasks);
    };

    const handleDeleteSubtask = (taskIndex, subtaskIndex) => {
        const updatedTasks = deleteSubtask(tasks, taskIndex, subtaskIndex);
        setTasks(updatedTasks);
    };

    return (
        <ul className={styles.subTaskItemWrapper}>
            {task.subtasks.map((subtask, subIndex) => (
                <div key={subIndex}>
                    <li className={styles.listItem}>
                        <h4>Subtask {subIndex+1}</h4>
                        <h5>Subtask title: {subtask.title}</h5>
                        <h6>Subtask description: {subtask.description}</h6>
                    </li>
                    <p className={subtask.completed ? styles.completed : styles.uncompleted}>
                        {subtask.completed ? 'Completed' : 'Not Completed'}
                    </p>
                    <div className={styles.buttonsWrapper}>
                        <button onClick={() => handleToggleSubtaskCompletion(index, subIndex)}>
                            {subtask.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                        </button>
                        <button className={styles.removeButton} onClick={() => handleDeleteSubtask(index, subIndex)}>Delete Subtask</button>
                    </div>
                </div>
            ))}
        </ul>
    );
};