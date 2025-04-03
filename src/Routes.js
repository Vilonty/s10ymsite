import React from 'react';
import { Route, Routes} from 'react-router-dom';

import {Landing} from './pages/landingpage';
import {Aboutpage} from './pages/about';
import {Rules} from './pages/rules';
import {Profil} from './pages/profil';
import {Important} from './pages/important';
import {Register} from './pages/register';
import {Authorization} from './pages/authorization';
import {Blog} from './pages/blog';
import {BlogPage} from './pages/blogpage';


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
            <Route path="/blogpage" element={<BlogPage />}/>
        </Routes>
    );
};

export default AppRoutes;