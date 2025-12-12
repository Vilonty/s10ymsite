import React from 'react';
import { useForm } from 'react-hook-form';

import { Inputs } from '../../shared/ui/Input/Input.jsx';
import { Checkbox } from '../../shared/ui/Checkbox/Checkbox.jsx';

import styles from '../../shared/style/register/main/register.module.css';

export const Register = ()=>{

  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({mode: 'onChange',});
  const password = watch('password');

  const onSubmit = async (data) => {
    try {
      console.log('Отправляемые данные:', data);
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',  
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password
        })
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

    
  return(
    <React.Fragment>
      <main className={styles.registerMain}>
        <div className={styles.mainblockRegister}>

          <h2>регистрация</h2>
                        

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                            
            <div className={styles.title}>email</div>

            <Inputs
              type="email"
              register={register}
              name="email"
              validation={{
                required: 'Email обязателен'
                                
              }}
              errors={errors}
            />

            <div className={styles.title}>имя</div>
            <Inputs
              register={register}
              name="name"
              validation={{
                required: 'Имя обязательно',
                minLength: {
                  value: 3,
                  message: 'Минимум 3 символов'
                },
                maxLength: {
                  value: 16,
                  message: 'Максимум 16 символов'
                }
              }}
              errors={errors}
            />

            <div className={styles.title}>пароль</div>
            <Inputs
              type="password"
              register={register}
              name="password"
              validation={{
                required: 'Пароль обязателен',
                minLength: {
                  value: 3,
                  message: 'Минимум 3 символов'
                },
                maxLength: {
                  value: 16,
                  message: 'Максимум 16 символов'
                }
              }}
              errors={errors}
            />

            <div className={styles.title}>повтор пароля</div>

            <Inputs
              type='password'
              register={register}
              name="passwordconfirm"
              validation={{
                required: 'Подтвердите пароль',
                validate: value => value === password || 'Пароли не совпадают'
              }}
              errors={errors}
            />

            <span className={styles.checkboxLabel}>
              <Checkbox
                type="checkbox"
                register={register}
                name="privacyPolicy" 
                validation={{ required: 'Необходимо согласиться с политикой' }}
                errors={errors}
                className={styles.customCheckbox}
              />
                            
                                Согласие на обработку <a href="#">персональных данных</a>
            </span>
            {errors.privacyPolicy && (
              <span className={styles.errordown}>{errors.privacyPolicy.message}</span>
            )}
            <button className={styles.downButton} disabled={!isValid}>Зарегистрироваться</button>

          </form>

                                              

        </div>

      </main>
    </React.Fragment>
  );
};