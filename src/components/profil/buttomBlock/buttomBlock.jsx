import styles from '../../../style/profil/profil.module.css';

export const ButtomBlock =(props) => {
    return(

        <div class={styles.mainblockbuttom}>
            <div class={styles.stats}>
                <div class={styles.statsblock}>
                    <h2>Статистика</h2>
                    <dt>Дата регистрации:</dt>
                    <dd>00.00.00</dd>
                    <dt>Статус:</dt>
                    <dd>Гость</dd>
                </div>
                
            </div>

            <div class={styles.form}>
                <form>
                    <span>Чтобы зайти на сервер Вы должны быть ознакомлены с <a href="#">правилами</a> <input type="checkbox" class="custom-checkbox"></input></span>
                    <span>Чтобы зайти на сервер Вы должны быть ознакомлены с <a href="#">политикой</a> <input type="checkbox" class="custom-checkbox"></input></span>
                    <button>Подать заявку</button>
                </form>
            </div>

        </div>
    )
    

};