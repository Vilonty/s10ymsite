import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import HLogo from '../../assets/HeaderLogo/S10YM.png';
import '../../style/header.css';

export const Header = ({ showAuthLinks = true, account = true, register = true, blog = true }) => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <div className="header">
            <Link to="/Profil">
             <img src={HLogo} alt="Логотип" />
            </Link>
            
            <nav>
                <Link to="/About">О сервере</Link>
                {blog && <Link to="/Blog">Блог</Link>}
                
                {!isAuthenticated && showAuthLinks && (
                    <>
                        {register && <Link to="/Register">Регистрация</Link>}
                        {account && <Link to="/Authorization">Авторизация</Link>}
                    </>
                )}
            </nav>
        </div>
    );
};
