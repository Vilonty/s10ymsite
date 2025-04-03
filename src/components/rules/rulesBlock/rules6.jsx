import styles from '../../../style/rules/main/rules.module.css';

export const Rules6 =(props) => {
    return(

        <div className={`${styles.rulesCommon} ${styles.rulesLight}`}>
            <span>Пункт 6: фермы и механизмы</span>
            <span>Разрешены любые фермы и механизмы, за исключением:</span>
            <ul>
                <li>Механизмов и ферм которые запрещены пунктами 3 и 4 (дюп механизмы и лаг машины)</li>
                <li>Запрещены фермы которые полностью останавливают работоспособность сервера</li>
            </ul>
        </div>
    )
    

};