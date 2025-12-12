import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Inputs } from '../../shared/ui/Input/Input.jsx';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../app/providers/AuthContext.js'; 
import styles from '../../shared/style/authorization/authorization.module.css';

export const Authorization = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onChange' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log('Form data:', data);
    navigate('/Profil');
  };
    
  return (
    <React.Fragment>
      <main className={styles.authorizationMain}>
        <div className={styles.authorizationContainer}>
          <h2 className={styles.authorizationTitle}>авторизация</h2>
          <form className={styles.authorizationForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formLabel}>email</div>
            <Inputs
              type='email'
              register={register}
              name='email'
              validation={{
                required: 'email обязатален',
                minLength: {
                  value: 3,
                  message: 'Минимум 3 символов',
                },
                maxLength: {
                  value: 50,
                  message: 'Максимум 50 символов',
                },
              }}
              errors={errors}
            />
            <button className={styles.forgotLink}>забыли логин?</button>

            <div className={styles.formLabel}>пароль</div>
            <Inputs
              type='password'
              register={register}
              name='password'
              validation={{
                required: 'Пароль обязателен',
                minLength: {
                  value: 3,
                  message: 'Минимум 3 символов',
                },
                maxLength: {
                  value: 16,
                  message: 'Максимум 16 символов',
                },
              }}
              errors={errors}
            />
            <button className={styles.forgotLink}>забыли пароль?</button>

            <button 
              onClick={login} 
              className={styles.submitButton} 
              disabled={!isValid}
            >
              войти
            </button>
          </form>
        </div>
      </main>
    </React.Fragment>
  );
};