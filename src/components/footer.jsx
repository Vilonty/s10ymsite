import React from 'react';
import { Link } from 'react-router-dom';
import HLogo from '../assets/HeaderLogo/S10YM.png';
import Fsrc from '../assets/Footer/src.png'
import '../style/footer.css';

const srcFoot = [
    {id:0, img:Fsrc, srcf:"#"},
    {id:1, img:Fsrc, srcf:"#"},
    {id:2, img:Fsrc, srcf:"#"},
    {id:3, img:Fsrc, srcf:"#"},
    {id:4, img:Fsrc, srcf:"#"}

]

export const Footer = (props) =>{
    

    return(

        <div className="footer">
            <img src={HLogo}/>
            <nav>
                <span>наши социальные сети</span>
                <div className="social-icons">
                    {srcFoot.map((srcf, key) => (
                        <SrcFooter
                            key={key}
                            img={srcf.img}
                            srcf={srcf.srcf}
                        />
                    ))}
                </div>

            </nav>
        </div>

    )
}

export const SrcFooter =(props)=>{
    const {img, srcf} = props

    return( 
        <a href={srcf} className="scrfot">
            <img src={img}/>
        </a>
    );
            
}
