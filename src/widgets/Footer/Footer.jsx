import HLogo from '../../shared/assets/HeaderLogo/S10YM.png';
import Fsrc from '../../shared/assets/Footer/src.png';
import Fsrc2 from '../../shared/assets/Footer/src2.png';
import '../../shared/style/footer/footer.css';

const srcFoot = [
  {id:0, img:Fsrc, srcf:'#'},
  {id:1, img:Fsrc2, srcf:'#'},
  {id:2, img:Fsrc, srcf:'#'},
  {id:3, img:Fsrc2, srcf:'#'},
  {id:4, img:Fsrc, srcf:'#'},

];

export const Footer = () =>{
    

  return(

    <div className='footer'>
      <img src={HLogo}/>
      <nav>
        <span>наши социальные сети</span>
        <div className='social-icons'>
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

  );
};

export const SrcFooter =(props)=>{
  const {img, srcf} = props;

  return( 
    <a href={srcf} className='scrfot'>
      <img src={img}/>
    </a>
  );
            
};
