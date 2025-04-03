import styles from '../../../style/important/important.module.css';

export const ImportantButton =(props) => {
    return(

        <div className={`${styles.buttomRules} ${styles.rulesDark}`}>
            <span>Все пункты кроме 3, 4 и 5 могут быть решены мирно (без банов)</span>
            <span>В СЛУЧАЕ КАКИХ-ЛИБО ПРОБЛЕМ, ВЫ МОЖЕТЕ СВЯЗАТЬСЯ С АДМИНИСТРАЦИЕЙ В НАШЕМ ДИСКОРД СЕРВЕРЕ</span>
            
        </div>
    )
    

};