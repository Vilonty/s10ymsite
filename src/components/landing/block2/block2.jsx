import Img1 from '../../../assets/landing/images/1.png';
import Img2 from '../../../assets/landing/images/2.png';
import styles from '../../../style/landing/block2/block2Style.module.css';

export const Block2 =(props) => {
    return(

        <div className={styles.block2}>
            <div className={styles.block2left}>
                <div className={styles.info}>
                    <span>S10YM - это уникальный проект, посвященный выживанию в Minecraft на протяжении целых 10 лет.</span>
                    <span>Суть нашего начинания заключается в создании долгосрочного игрового мира, который будет существовать без вайпов на протяжении всего срока проекта.</span>
                </div>
                <div className={styles.block2topimg}>
                    <img src={Img2}/>
                </div>
                
            </div>
            <div className={styles.block2right}>
                <div className={styles.block2buttomimg}>
                    <img src={Img1}/>
                </div>
                <div className={styles.info}>
                    <span>Стартовал проект 14/11/2022 года. авершение состоится 14/11/2032 года. 
                        На протяжении этих десяти лет игроки смогут строить и развиваться в одном и том же мире, создавая свои истории и воспоминания. </span>
                </div>
            </div>
        </div>
    )
    

};