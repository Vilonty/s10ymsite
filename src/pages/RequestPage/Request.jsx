import React from 'react';
import { useForm } from 'react-hook-form';
import { Inputs } from '../../shared/ui/Input/Input.jsx';
import { TextInput } from '../../shared/ui/TextArea/TextArea.jsx';
import { Checkbox } from '../../shared/ui/Checkbox/Checkbox.jsx';
import styles from '../../shared/style/request/main/request.module.css';

export const Request = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    console.log('Form data:', data);
  };

  return (
    <React.Fragment>
      <main className={styles.requestPage}>
        <div className={styles.requestContainer}>
          <h2 className={styles.requestTitle}>заявка на вступление</h2>

          <form className={styles.requestForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formLabel}>введите свой ник</div>
            <div className={styles.nicknameContainer}>
              <Inputs
                register={register}
                name='name'
                validation={{
                  required: 'Имя обязательно',
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
              <button type='button'>?</button>
            </div>

            <div className={styles.formLabel}>расскажите об опыте игры</div>
            <div className={styles.experienceContainer}>
              <TextInput
                register={register}
                name='experience'
                validation={{
                  required: 'Это поле обязательно',
                  minLength: {
                    value: 10,
                    message: 'Минимум 10 символов',
                  },
                  maxLength: {
                    value: 500,
                    message: 'Максимум 500 символов',
                  },
                }}
                errors={errors}
              />
              <button type='button'>?</button>
            </div>

            <span className={styles.formNote}>
              Чтобы зайти на сервер Вы должны быть ознакомлены с <a href='#'>правилами</a>
              <Checkbox
                type='checkbox'
                register={register}
                name='rules'
                validation={{ required: 'Необходимо согласиться с правилами' }}
                errors={errors}
                className={styles.checkboxInput}
              />
            </span>

            <span className={styles.formNote}>
              Чтобы зайти на сервер Вы должны быть ознакомлены с <a href='#'>политикой</a>
              <Checkbox
                type='checkbox'
                register={register}
                name='policy'
                validation={{ required: 'Необходимо согласиться с политикой' }}
                errors={errors}
                className={styles.checkboxInput}
              />
            </span>

            <button type='submit' className={styles.submitButton} disabled={!isValid}>
              Подать заявку
            </button>
            <span className={styles.buttonNote}>Заявки принимаются не автоматически!</span>
          </form>
        </div>
      </main>
    </React.Fragment>
  );
};