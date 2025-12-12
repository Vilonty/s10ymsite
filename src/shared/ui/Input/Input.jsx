import styles from '../../../shared/style/request/main/request.module.css';

export const Inputs = ({
  type='text',
  register,
  name,
  validation,
  errors,
  placeholder = ''
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