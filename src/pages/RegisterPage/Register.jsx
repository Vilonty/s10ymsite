import React from 'react';
import { useForm } from 'react-hook-form';
import { Inputs } from '../../shared/ui/Input/Input.jsx';
import { Checkbox } from '../../shared/ui/Checkbox/Checkbox.jsx';
import styles from '../../shared/style/register/main/register.module.css';

export const Register = () => {
  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({ mode: 'onChange' });
  const password = watch('password');

  const onSubmit = async (data) => {
    try {
      console.log('Отправляемые данные:', data);
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });
      const result = await response.json();
      console.log('Ответ от сервера:', result);

      if (result.success) {
        alert('Регистрация успешна!');
      } else {
        alert('Ошибка: ' + result.message);
      }
    } catch (error) {
      console.error('Ошибка при отправке:', error);
      alert('Ошибка подключения к серверу');
    }
  };

  return (
    <React.Fragment>
      <main className={styles.registerMain}>
        <div className={styles.registerContainer}>
          <h2 className={styles.registerTitle}>регистрация</h2>
          <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formLabel}>email</div>
            <Inputs
              type='email'
              register={register}
              name='email'
              validation={{ required: 'Email обязателен' }}
              errors={errors}
            />
            <div className={styles.formLabel}>имя</div>
            <Inputs
              register={register}
              name='name'
              validation={{
                required: 'Имя обязательно',
                minLength: { value: 3, message: 'Минимум 3 символов' },
                maxLength: { value: 16, message: 'Максимум 16 символов' },
              }}
              errors={errors}
            />
            <div className={styles.formLabel}>пароль</div>
            <Inputs
              type='password'
              register={register}
              name='password'
              validation={{
                required: 'Пароль обязателен',
                minLength: { value: 3, message: 'Минимум 3 символов' },
                maxLength: { value: 16, message: 'Максимум 16 символов' },
              }}
              errors={errors}
            />
            <div className={styles.formLabel}>повтор пароля</div>
            <Inputs
              type='password'
              register={register}
              name='passwordconfirm'
              validation={{
                required: 'Подтвердите пароль',
                validate: value => value === password || 'Пароли не совпадают',
              }}
              errors={errors}
            />
            <span className={styles.checkboxContainer}>
              <Checkbox
                type='checkbox'
                register={register}
                name='privacyPolicy'
                validation={{ required: 'Необходимо согласиться с политикой' }}
                errors={errors}
                className={styles.checkboxInput}
              />
              <a href='#' className={styles.privacyLink}>Согласие на обработку персональных данных</a>
            </span>
            {errors.privacyPolicy && (
              <span className={styles.errorText}>{errors.privacyPolicy.message}</span>
            )}
            <button className={styles.submitButton} disabled={!isValid}>
              Зарегистрироваться
            </button>
          </form>
        </div>
      </main>
    </React.Fragment>
  );
};