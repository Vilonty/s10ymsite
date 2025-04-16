import styles from '../../../style/landing/block4/block4Style.module.css';
import { Link } from 'react-router-dom';
import Img3 from '../../../assets/landing/images/3.png';
export const Block4 =(props) => {
    return(

        <div className={styles.block4}>
            <span>как попасть на сервер?</span>
            <div class={styles.block4middle}>
                
                    
                    <div class={styles.block4button}>
                        <div class={styles.block4buttoncontent}>
                            <span>Для участия в проекте сначала нужно ознакомиться с правилами, а затем подать заявку в личном кабинете</span>
                            <button><Link to="/Profil">личный кабинет</Link></button>
                        </div>
                        
                    </div>
                
                <img src={Img3}/>
            </div>
        </div>
    )
    

};