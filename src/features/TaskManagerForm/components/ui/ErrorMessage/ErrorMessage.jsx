import styles from "../../../ui/TaskManagerForm.module.scss";

export const ErrorMessage = ({ message }) => {
    return <span className={styles.error}>{message}</span>;
};


