import React from 'react';
import styles from './Input.module.css';

export const Inputs = ({
  type = 'text',
  register,
  name,
  validation,
  errors,
  placeholder = '',
  isTextarea = false,
}) => {
  return (
    <div className={styles.inputContainer}>
      {isTextarea ? (
        <textarea
          placeholder={placeholder}
          className={styles.textareaField}
          {...register(name, validation)}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={styles.inputField}
          {...register(name, validation)}
        />
      )}
      {errors && errors[name] && (
        <span className={styles.inputError}>{errors[name].message}</span>
      )}
    </div>
  );
};