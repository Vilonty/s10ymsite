import styles from '../../../style/rules/main/rules.module.css';

export const Rules7 =(props) => {
    return(

        <div className={`${styles.rulesCommon} ${styles.rulesDark}`}>

            <span>Пункт 7: аморальное поведение (оскорбления и т.д.)</span>
            <span>К сожалению подобные вещи зависят от контекста, поэтому в этом пункте возможны долгие разборки, но:</span>
            <ul>
                <li>Запрещается оскорбление игроков</li>
                <li>Запрещается строительство аморальных вещей (типа свастик)</li>
            </ul>
        </div>
    )
    

};