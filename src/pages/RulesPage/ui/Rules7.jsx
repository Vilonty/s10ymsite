import styles from '../../../shared/style/rules/main/rules.module.css';

export const Rules7 = () => {
  return (
    <div className={`${styles.ruleSection} ${styles.ruleSectionDark}`}>
      <span>Пункт 7: аморальное поведение (оскорбления и т.д.)</span>
      <span>К сожалению подобные вещи зависят от контекста, поэтому в этом пункте возможны долгие разборки, но:</span>
      <ul>
        <li>Запрещается оскорбление игроков</li>
        <li>Запрещается строительство аморальных вещей (типа свастик)</li>
      </ul>
    </div>
  );
};