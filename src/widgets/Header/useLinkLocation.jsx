import { useLocation } from 'react-router-dom';

export const useLinkLocation = () => {
  const location = useLocation();

  const getHiddenLinks = () => {
    const hiddenLinks = {
      about: false,
      blog: false,
      register: false,
      authorization: false,
      profil: false,
    };

    switch (location.pathname) {
    case '/About':
      hiddenLinks.about = true;
      break;
    case '/Blog':
      hiddenLinks.blog = true;
      break;
    case '/Register':
      hiddenLinks.register = true;
      break;
    case '/Authorization':
      hiddenLinks.authorization = true;
      break;
    case '/Profil':
      hiddenLinks.profil = true;
      break;
    default:
      break;
    }

    return hiddenLinks;
  };

  return {
    hiddenLinks: getHiddenLinks(),
    currentPath: location.pathname,
  };
};