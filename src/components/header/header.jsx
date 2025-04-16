import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import HLogo from '../../assets/HeaderLogo/S10YM.png';
import '../../style/header.css';

export const Header = ({ showAuthLinks = true, account = true,profil = true, register = true, blog = true, about=true }) => {
    
    const { isAuthenticated, logout } = useContext(AuthContext); 

    return (
        <div className="header">
            <Link to="/">
                <img src={HLogo} alt="Логотип" />
            </Link>
            
            <nav>
                {about && <Link to="/About">О сервере</Link>}
                {blog && <Link to="/Blog">Блог</Link>}
                
                {!isAuthenticated && showAuthLinks && (
                    <>
                        {register && <Link to="/Register">Регистрация</Link>}
                        {account && <Link to="/Authorization">Авторизация</Link>}
                    </>
                )}

                {isAuthenticated && (
                    <>
                        {profil && <Link to="/Profil">Личный кабинет</Link>} 
                        <button onClick={logout}>Выйти</button> 
                    </>
                )}
            </nav>
        </div>
    );
};
