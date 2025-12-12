import { Link } from 'react-router-dom';
import styles from '../../../shared/style/landing/block5/block5Style.module.css';
export const Block5 =() => {
  return(

    <div className={styles.block5}>
      <div className={styles.block5top}>
        <Link to='/Rules'>
          <div className={styles.block5_content_block}>
            <h2>правила</h2>
            <span>сервер имеет ряд правил с которыми необходимо ознакомиться</span>
          </div>
        </Link>
    


        <Link to='/Important'>
          <div className={styles.block5_content_block}>
            <h2>важное</h2>
            <span>сервер имеет ряд важной информации</span>
          </div>
        </Link>
        

        <Link to='/Blog'>
          <div className={styles.block5_content_block}>
            <h2>блог</h2>
            <span>сервер имеет блог</span>
          </div>
        </Link>
      </div>
      <div className={styles.block5buttom}>
        <span>информация о сервере</span>
      </div>
                    
    </div>
  );
    

};