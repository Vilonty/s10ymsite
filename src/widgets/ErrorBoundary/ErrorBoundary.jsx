import React from 'react';

export const ErrorBoundary = ({ error, resetErrorBoundary }) => {
  return (
    <div className='error-boundary'>
      <h2>Что-то пошло не так</h2>
      <p>Произошла ошибка при загрузке данных</p>
      <details>
        <summary>Подробности ошибки</summary>
        <pre>{error.message}</pre>
      </details>
      <button onClick={resetErrorBoundary}>Попробовать снова</button>
    </div>
  );
};