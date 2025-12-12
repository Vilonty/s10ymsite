import styles from '../../../shared/style/rules/main/rules.module.css';

export const Rules1 =() => {
  return(

    <div className={`${styles.rulesCommon} ${styles.rulesDark}`}>

      <span>Пункт 1: Убийства людей</span>
      <span>Запрещены любые беспричинные убийства игроков, кроме:</span>

      <ul>
        <li>Убийства на территории где установлены разрешения на это</li>
        <li>Самозащита</li>
        <li>Случайные убийства </li>
      </ul>
            
    </div>
  );
    

};