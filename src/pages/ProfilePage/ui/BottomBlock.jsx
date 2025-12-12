import { Link } from 'react-router-dom'; 
import { useForm } from 'react-hook-form';

import { Checkbox } from '../../../shared/ui/Checkbox/Checkbox';
import styles from '../../../shared/style/profil/profil.module.css';

export const ButtomBlock =() => {

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({mode: 'onChange',});
    
  const onSubmit = (data) => {
    console.log('Form data:', data);
  };

  return(

    <div className={styles.mainblockbuttom}>
      <div className={styles.stats}>
        <div className={styles.statsblock}>
          <h2>Статистика</h2>
          <dt>Дата регистрации:</dt>
          <dd>00.00.00</dd>
          <dt>Статус:</dt>
          <dd>Гость</dd>
        </div>
                
      </div>

      <div className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <span>Чтобы зайти на сервер Вы должны быть ознакомлены с <a href="#">правилами</a> <Checkbox
            type="checkbox"
            register={register}
            name="rules"
            validation={{ required: 'Необходимо согласиться с правилами' }}
            errors={errors}
            className={styles.customCheckbox}
          /></span>
          <span>Чтобы зайти на сервер Вы должны быть ознакомлены с <a href="#">политикой</a> <Checkbox
            type="checkbox"
            register={register}
            name="policy"
            validation={{ required: 'Необходимо согласиться с политикой' }}
            errors={errors}
            className={styles.customCheckbox}
          /></span>
          <Link to="/Request"><button className={styles.buttonOne} disabled={!isValid}>Подать заявку</button></Link>
        </form>
      </div>

    </div>
  );
    

};