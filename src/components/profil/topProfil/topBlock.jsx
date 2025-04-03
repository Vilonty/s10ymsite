import ProfilAvatar from '../../../assets/profil/avatars/1.png';
import styles from '../../../style/profil/profil.module.css';

export const TopBLock =(props) => {
    return(

        <div class={styles.mainblocktop}>
            <img src={ProfilAvatar} alt="Аватарка" />
            <div class={styles.mainblocktopinfo}>
                <span>username</span>
                <div class={styles.bio}>
                    <span>bio</span>
                </div>

            </div>

        </div>
    )
    

};