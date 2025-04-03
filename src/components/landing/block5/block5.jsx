import { Link } from 'react-router-dom';
import styles from '../../../style/landing/block5/block5Style.module.css';
export const Block5 =(props) => {
    return(

        <div class={styles.block5}>
            <div class={styles.block5top}>
                <Link to="/Rules">
                    <div class={styles.block5_content_block}>
                        <h2>правила</h2>
                        <span>сервер имеет ряд правил с которыми необходимо ознакомиться</span>
                    </div>
                </Link>
    


                <Link to="/Important">
                    <div class={styles.block5_content_block}>
                        <h2>важное</h2>
                        <span>сервер имеет ряд важной информации</span>
                    </div>
                </Link>
        

                <Link to="/Rules">
                    <div class={styles.block5_content_block}>
                        <h2>блог</h2>
                        <span>сервер имеет блог</span>
                    </div>
                </Link>
            </div>
            <div class={styles.block5buttom}>
                <span>информация о сервере</span>
            </div>
                    
        </div>
    );
    

};