import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import { useQueryClient } from '@tanstack/react-query';
import { getPosts } from '../../api/blogApi';
import HLogo from '../../assets/HeaderLogo/S10YM.png';
import '../../style/header.css';

export const Header = ({ showAuthLinks = true, account = true,profil = true, register = true, blog = true, about=true }) => {

    const queryClient = useQueryClient();
    const { isAuthenticated, logout } = useContext(AuthContext); 

    const handleBlogHover = () => {
    queryClient.prefetchQuery({
      queryKey: ['posts', { page: 1, limit: 9 }],
      queryFn: () => getPosts(1, 9),
      staleTime: 1000 * 60 * 5,
    });
  };

  const location = useLocation()
console.log('location', location)
    return (
        <div className="header">
            <Link to="/">
                <img src={HLogo} alt="Логотип" />
            </Link>
            
            <nav>
                {about && <Link to="/About">О сервере</Link>}
                {blog && (
                    <Link 
                        to="/Blog" 
                        onMouseEnter={handleBlogHover} // ← ПРАВИЛЬНО!
                    >
                        Блог
                    </Link>
                )}
                
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
