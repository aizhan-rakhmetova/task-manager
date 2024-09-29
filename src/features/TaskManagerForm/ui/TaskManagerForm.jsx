import React, { useState } from 'react';

import { TaskCreationForm, TaskList } from "../components/ui";
import styles  from './TaskManagerForm.module.scss';

export const TaskManagerForm = () => {
    const [tasks, setTasks] = useState([]);

    // Left it to check component state
    // console.log('Added/Submitted tasks:', tasks);

    return (
        <div className={styles.wrapper}>
            <TaskCreationForm tasks={tasks} setTasks={setTasks}/>
            <TaskList tasks={tasks} setTasks={setTasks}/>
        </div>
    );
};

