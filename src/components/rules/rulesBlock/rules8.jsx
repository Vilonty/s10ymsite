import styles from '../../../style/rules/main/rules.module.css';

export const Rules8 =(props) => {
    return(

        <div className={`${styles.rulesCommon} ${styles.rulesLight}`}>
            <span>Пункт 8: смерти игроков</span>
            <span>При потери во время смерти игрока его вещей, отката инвентаря или их возврат не будет (даже в связи ошибкой работы сервера)</span>
            <span>Подобное возможно только если игрока намеренно убил другой игрок и отказывается их вернуть (при этом вещи будут возвращены только после бана такого игрока)</span>
                            
            
        </div>
    )
    

};