import React from 'react';
import { useForm } from "react-hook-form";

import { Inputs } from './ui/Input.jsx';
import { TextInput } from './ui/TextArea.jsx';
import { Checkbox } from '../../shared/ui/Checkbox/Checkbox.jsx';

import styles from '../../shared/style/request/main/request.module.css';

export const Request = (props)=>{

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({mode: 'onChange',});

    const onSubmit = (data) => {
        console.log('Form data:', data);
        };
    
    return(
        <React.Fragment>
            <main>
                <div className={styles.mainrequest}>

                    <h2>заявка на вступление</h2>
                    

                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        
                        <div className={styles.title}>введиете свой ник</div>
                        <div className={styles.nickinput}>
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
                            
                            <button>?</button>
                        </div>
                        
                        <div className={styles.title}>расскажите о опыте игры</div>
                        <div className={styles.expiriens}>
                            <TextInput
                            register={register}
                            name="experience"
                            validation={{
                                required: 'Это поле обязательно',
                                minLength: {
                                    value: 10,
                                    message: 'Минимум 10 символов'
                                },
                                maxLength: {
                                    value: 500,
                                    message: 'Максимум 500 символов'
                                }
                            }}

                            errors={errors}
                            
                            />
                            
                            
                            <button>?</button>
                        </div>
                        
                        <span>Чтобы зайти на сервер Вы должны быть ознакомлены с <a href="#">правилами</a>

                        <Checkbox
                                type="checkbox"
                                register={register}
                                name="rules"
                                validation={{ required: 'Необходимо согласиться с правилами' }}
                                errors={errors}
                                className={styles.customCheckbox}
                            />
        
                        </span>
                        
                        <span>Чтобы зайти на сервер Вы должны быть ознакомлены с <a href="#">политикой</a> 

                        <Checkbox
                                type="checkbox"
                                register={register}
                                name="policy"
                                validation={{ required: 'Необходимо согласиться с политикой' }}
                                errors={errors}
                                className={styles.customCheckbox}
                            />
                            
                        </span>

                        <button className={styles.downButton} disabled={!isValid}>Подать заявку</button>
                        <span className={styles.downSpan}>Заявки принимаются не автоматически!</span>
                    </form>

                                            

                </div>

            </main>
        </React.Fragment>
    )
}