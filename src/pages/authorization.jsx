import React, { useContext } from 'react';
import { useForm } from "react-hook-form";

import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { Inputs } from '../components/register/input/input.jsx';

import { AuthContext } from '../AuthContext'; 

import styles from '../style/authorization/authorization.module.css';

export const Authorization = (props)=>{

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({mode: 'onChange',});
    const { login } = useContext(AuthContext);

    const onSubmit = (data) => {
        console.log('Form data:', data);
      };
    
    return(
        <React.Fragment>
            <Header showAuthLinks={true} register={true} account={false}/>
            <main className={styles.mainAuthorization}>
                    <div className={styles.mainblock}>

                        <h2>авторизация</h2>
                        

                        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                            
                            <div className={styles.title}>email</div>
                            <Inputs
                            type='email'
                            register={register}
                            name="email"
                            validation={{
                                required: 'email обязатален',
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

                            <button className={styles.buttondown}>забыли логин?</button>

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
                            <button className={styles.buttondown}>забыли пароль?</button>


                            <button onClick={login} className={styles.downButton} disabled={!isValid}>войти</button>

                        </form>

                                              

                    </div>

                </main>
            <Footer />
        </React.Fragment>
    )
}