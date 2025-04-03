import styles from '../../../style/about/buttomBlock/buttomBlock.module.css';

export const ButtomBlock =(props) => {
    return(

        <div className={`${styles.buttomRules} ${styles.rulesLight}`}>
            <span>статистика</span>
            <ul>
                <li>Возраст мира: 2 года 5 месяца </li>
                <li>День в мире 54000+</li>
                <li>Вес мира: 40гб+ </li>
                <li>Людей заходивших когда-либо: 1110+</li>
                <li>Забаненых игроков когда-либо: 25+</li>
                <li>Статистика на момент 02/04/2025</li>
            </ul>
        </div>
    )
    

};