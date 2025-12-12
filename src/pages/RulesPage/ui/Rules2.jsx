import styles from '../../../shared/style/rules/main/rules.module.css';

export const Rules2 = () => {
  return (
    <div className={`${styles.ruleSection} ${styles.ruleSectionLight}`}>
      <span>Пункт 2: Гриферство построек</span>
      <span>Запрещены любые несогласованные изменения в чужих постройках</span>
      <ul>
        <li>Взрывы криперов не являются гриферством если не были намеренно сделаны игроком для разрушения постройки</li>
        <li>Вы можете ломать аморальные постройки (свастики, половые органы, арты 18+ и т.д.)</li>
      </ul>
    </div>
  );
};