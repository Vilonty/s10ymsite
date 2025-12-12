import styles from '../../../shared/style/rules/main/rules.module.css';

export const Rules6 = () => {
  return (
    <div className={`${styles.ruleSection} ${styles.ruleSectionLight}`}>
      <span>Пункт 6: фермы и механизмы</span>
      <span>Разрешены любые фермы и механизмы, за исключением:</span>
      <ul>
        <li>Механизмов и ферм которые запрещены пунктами 3 и 4 (дюп механизмы и лаг машины)</li>
        <li>Запрещены фермы которые полностью останавливают работоспособность сервера</li>
      </ul>
    </div>
  );
};