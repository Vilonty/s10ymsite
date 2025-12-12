import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Landing } from '../../pages/LandingPage/LandingPage';    
import { Aboutpage } from '../../pages/AboutPage/About';          
import { Rules } from '../../pages/RulesPage/Rules';              
import { Profil } from '../../pages/ProfilePage/ProfilePage';          
import { Important } from '../../pages/ImportantPage/Important';   
import { Register } from '../../pages/RegisterPage/Register';      
import { Authorization } from '../../pages/LoginPage/LoginPage'; 
import { Blog } from '../../pages/BlogPage/Blog';                  
import { BlogPage } from '../../pages/SingleBlogPage/BlogPage';    
import { Request } from '../../pages/RequestPage/Request';          

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/about" element={<Aboutpage/>}/>
      <Route path="/rules" element={<Rules/>}/>
      <Route path="/profil" element={<Profil/>}/>
      <Route path="/important" element={<Important/>}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/authorization" element={<Authorization />}/>
      <Route path="/blog" element={<Blog />}/>
      <Route path="/blogpage/:id" element={<BlogPage />} /> 
      <Route path="/request" element={<Request />}/>
    </Routes>
  );
};

export default AppRoutes;