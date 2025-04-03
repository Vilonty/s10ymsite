import styles from '../../../style/landing/block3/block3Style.module.css';

export const Block3 =(props) => {
    return(

        <div className={styles.block3}>
            <span>
                Мы арендуем серверы, и ваша поддержка в виде добровольных пожертвований будет нам очень полезна. Все собранные средства будут направлены на ежемесячные расходы по хостингу.
            </span>
            <a>поддержать сервер</a>
            <button>?</button>
        </div>
)
    

};