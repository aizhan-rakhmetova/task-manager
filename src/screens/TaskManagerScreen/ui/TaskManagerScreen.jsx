import React from "react";

import { TaskManagerForm } from "../../../features/TaskManagerForm";
import styles from './TaskManagerScreen.module.scss'

export const TaskManagerScreen = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Task Manager</h1>
            <TaskManagerForm />
        </div>
    );
};