import styles from './textArea.module.css';

export const TextInput = ({
  register,
  name,
  validation,
  errors,
  placeholder = '',
}) => {
  return (
    <div className={styles.textInputContainer}>
      <textarea 
        className={styles.textArea}
        placeholder={placeholder}
        {...register(name, validation)}
      />
      {errors && errors[name] && (
        <span className={styles.error}>{errors[name].message}</span>
      )}
    </div>
  );
};