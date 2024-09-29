import React from "react";
import { Controller } from "react-hook-form";

import { ErrorMessage } from "../ErrorMessage";
import { ERROR_MESSAGES } from "../../../utils";
import styles from "../../../ui/TaskManagerForm.module.scss";

export const SubTaskCreationForm = ({fields, control, errors, remove, append}) => {
    return (
        <>
            {fields.map((item, index) => (
                <div className={styles.subTaskWrapper} key={index}>
                    <div className={errors ? styles.errorsStyle : styles.subTask}>
                    <Controller
                            control={control}
                            name={`subtasks.${index}.title`}
                            rules={{ required: true }}
                            render={({ field }) =>
                                <input
                                    {...field}
                                    className={`${styles.input} ${styles.subTaskTitleInput} ${errors.subtasks?.[index]?.title && styles.errorBorder}`}
                                    placeholder="Subtask Title" />}
                        />
                        {errors.subtasks?.[index]?.title && <ErrorMessage message={ERROR_MESSAGES.SUBTASK_TITLE_REQUIRED} />}
                    </div>
                    <div className={errors ? styles.errorsStyle : styles.subTask}>
                        <Controller
                            control={control}
                            name={`subtasks.${index}.description`}
                            rules={{ minLength: 10 }}
                            render={({ field }) =>
                                <textarea
                                    {...field}
                                    className={`${styles.input} ${styles.subTaskDescriptionInput} ${errors.subtasks?.[index]?.description && styles.errorBorder}`}
                                    placeholder="Subtask Description" />}
                        />
                        {errors.subtasks?.[index]?.description && <ErrorMessage message={ERROR_MESSAGES.DESCRIPTION_MIN_LENGTH} />}
                    </div>
                    <button type="button" className={styles.removeButton} onClick={() => remove(index)}>Remove Subtask</button>
                </div>
            ))}
            <button type="button" className={styles.addButton} onClick={() => append({ title: '', description: '' })}>
                Add Subtask
            </button>
        </>
        );
};