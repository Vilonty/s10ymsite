import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useLinkLocation = ()=>{
  const location = useLocation();


  const [listLocation, setListLocation] = useState([{key:'register', title:'Регистрация', status:false}]);

  if(location.pathname ==='/Blog'){
    
  }
 
  return {listLocation};
};