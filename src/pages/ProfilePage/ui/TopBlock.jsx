
import { useProfile } from '../../../entities/user/hooks/useProfile';
import { QueryError } from '../../../shared/ui/Error/QueryError';

import styles from '../../../shared/style/profil/profil.module.css';

export const TopBLock = () => {
  const { profile, loading, error, refetch } = useProfile();

  if (loading) return <div className={styles.mainblocktop}>Загрузка профиля...</div>;
  if (error) {
    return (
      <QueryError 
        error={error} 
        onRetry={refetch}
      />
    );
  }

  return (
    <div className={styles.mainblocktop}>
      <img 
        src={`https://i.pravatar.cc/150?img=${profile.id || 1}`} 
        alt='Аватарка' 
      />
      <div className={styles.mainblocktopinfo}>
        <span>{profile.username || 'username'}</span>
        <div className={styles.bio}>
          <span>{profile.email || 'email@example.com'}</span>
        </div>
      </div>
    </div>
  );
};