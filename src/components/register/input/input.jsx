import react from "react";
import styles from "../../../style/register/main/register.module.css"

export const Inputs = ({
    type='text',
    register,
    name,
    validation,
    errors,
    placeholder = '',
    className = ''
}) => {
    return(
        <div className={styles.textInput}>
        <input
            type={type}
            placeholder={placeholder}
            {...register(name, validation)}  
        />
        {errors && errors[name] && (
            <span className={styles.error}>{errors[name].message}</span>
        )}
        </div>
    );
};