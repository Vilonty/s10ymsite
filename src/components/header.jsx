import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import HLogo from '../assets/HeaderLogo/S10YM.png';
import '../style/header.css';

export const Header = ({ showAuthLinks = true, account = true, register = true, blog = true }) => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <div className="header">
            <img src={HLogo} alt="Логотип" />
            <nav>
                <Link to="#">О сервере</Link>
                {blog && <Link to="#">Блог</Link>}
                
                {!isAuthenticated && showAuthLinks && (
                    <>
                        {register && <Link to="#">Регистрация</Link>}
                        {account && <Link to="#">Авторизация</Link>}
                    </>
                )}
            </nav>
        </div>
    );
};
