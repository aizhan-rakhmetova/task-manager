import React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";

import { ErrorMessage } from "../ErrorMessage";
import { SubTaskCreationForm } from "../SubTaskCreationForm";
import { createTaskEntity, ERROR_MESSAGES } from "../../../utils";
import styles from "../../../ui/TaskManagerForm.module.scss";

export const TaskCreationForm = ({tasks, setTasks}) => {
    const { control,
        handleSubmit,
        reset, formState: { errors } }
        = useForm({
        defaultValues: {
            title: '',
            description: '',
            subtasks: [{ title: '', description: '' }]
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'subtasks'
    });

    const onSubmit = (data) => {
        const newTask = createTaskEntity(data);
        setTasks([...tasks, newTask]);
        reset();
    };

    return (
        <form className={styles.taskWrapper}  onSubmit={handleSubmit(onSubmit)}>
            <h2>Create new task</h2>
            <div className={styles.taskWrap}>
                <div className={styles.task}>
                    <div className={errors && styles.errorsStyle}>
                        <label>Title*</label>
                        <Controller
                            control={control}
                            name="title"
                            rules={{ required: true }}
                            render={({ field }) =>
                                <input
                                    {...field}
                                    className={`${styles.input} ${errors.title && styles.errorBorder}`}
                                />
                            }
                        />
                        {errors.title && <ErrorMessage message={ERROR_MESSAGES.TITLE_REQUIRED} />}
                    </div>
                    <div className={errors && styles.errorsStyle }>
                        <label>Description</label>
                        <Controller
                            control={control}
                            name="description"
                            rules={{ minLength: 10 }}
                            render={({ field }) =>
                                <textarea
                                    {...field}
                                    className={`${styles.input} ${errors.description && styles.errorBorder}`}
                                />
                            }
                        />
                        {errors.description && <ErrorMessage message={ERROR_MESSAGES.DESCRIPTION_MIN_LENGTH} />}
                    </div>
                </div>

                <SubTaskCreationForm
                   fields={fields}
                   control={control}
                   errors={errors}
                   remove={remove}
                   append={append}
               />
            </div>
            <button type="submit" className={styles.addButton} >Add Task</button>
        </form>
        );
};