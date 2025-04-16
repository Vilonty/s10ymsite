import React from 'react';
import { useForm } from "react-hook-form";

import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { Inputs } from '../components/register/input/input.jsx';
import { Checkbox } from '../components/checkBox/checkBox';

import styles from '../style/register/main/register.module.css';

export const Register = (props)=>{

    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({mode: 'onChange',});
    const password = watch('password');
    const onSubmit = (data) => {
        console.log('Form data:', data);
      };
    
    return(
        <React.Fragment>
            <Header showAuthLinks={true} register={false}/>
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

                            <div class={styles.title}>пароль</div>
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

                            <div class={styles.title}>повтор пароля</div>

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
                            <button class={styles.downButton} disabled={!isValid}>Зарегистрироваться</button>

                        </form>

                                              

                    </div>

                </main>
            <Footer />
        </React.Fragment>
    )
}