import React from 'react';

export const QueryError = ({ error, onRetry }) => {
  return (
    <div className="query-error">
      <h3>Ошибка загрузки</h3>
      <p>{error.message || 'Не удалось загрузить данные'}</p>
      
      {error.message?.includes('404') && (
        <p>Данные не найдены</p>
      )}
      {error.message?.includes('network') && (
        <p>Проблемы с подключением к интернету</p>
      )}

      <button onClick={onRetry}>Повторить попытку</button>
    </div>
  );
};