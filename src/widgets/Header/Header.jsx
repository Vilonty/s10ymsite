import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../app/providers/AuthContext';
import { useQueryClient } from '@tanstack/react-query';
import { getPosts } from '../../entities/post/api/BlogApi';
import HLogo from '../../shared/assets/HeaderLogo/S10YM.png';
import { useLinkLocation } from './useLinkLocation';
import '../../shared/style/header/header.css';

export const Header = () => {
  const queryClient = useQueryClient();
  const { isAuthenticated, logout } = useContext(AuthContext);
  const { hiddenLinks } = useLinkLocation();

  const handleBlogHover = () => {
    queryClient.prefetchQuery({
      queryKey: ['posts', { page: 1, limit: 9 }],
      queryFn: () => getPosts(1, 9),
      staleTime: 1000 * 60 * 5,
    });
  };

  return (
    <div className='header'>
      <Link to='/'>
        <img src={HLogo} alt='Логотип' />
      </Link>
            
      <nav>
        {!hiddenLinks.about && <Link to='/About'>О сервере</Link>}
        {!hiddenLinks.blog && (
          <Link 
            to='/Blog' 
            onMouseEnter={handleBlogHover}
          >
            Блог
          </Link>
        )}
                
        {!isAuthenticated && (
          <>
            {!hiddenLinks.register && <Link to='/Register'>Регистрация</Link>}
            {!hiddenLinks.authorization && <Link to='/Authorization'>Авторизация</Link>}
          </>
        )}

        {isAuthenticated && (
          <>
            {!hiddenLinks.profil && <Link to='/Profil'>Личный кабинет</Link>}
            <button className='logout-button' onClick={logout}>выйти</button>
          </>
        )}
      </nav>
    </div>
  );
};