import styles from '../../../style/rules/main/rules.module.css';

export const Rules5 =(props) => {
    return(

        <div className={`${styles.rulesCommon} ${styles.rulesDark}`}>

            <span>Пункт 5: Дюпы</span>
            <span>Дюпы ресурсов запрещены способом, за исключением:</span>
            <ul>
                <li>Разрешён миханизм дюпа динамита</li>
                <li>В связи с решением "первого серверного собрания игроков" разрешены дюпы предметов имеющих гравитацию через механизмы</li>
                <li>Разрешены дюпы ковров через механизм</li>
            </ul>
            
        </div>
    )
    

};