import styles from '../../../style/rules/main/rules.module.css';

export const Rules2 =(props) => {
    return(

        <div className={`${styles.rulesCommon} ${styles.rulesLight}`}>
            <span>Пункт 2: Гриферство построек</span>
            <span>Запрещены любые несогласованные изменения в чужих постройках</span>

            <ul>
                <li>Взрывы криперов не являются гриферством если не были намеренно сделаны игрокомдля разрушения постройки </li>
                <li>Вы можете ломать аморальные постройки (свастики, половые органы, арты 18+ и т.д.)</li>
            </ul>
        </div>
    )
    

};