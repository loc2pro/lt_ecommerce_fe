import { deleteAllCookies, getCookie } from '@/helpers/cookie';
import jwtDecode from 'jwt-decode';
export const JWT_USER = 'auth_token';
export const JWT_USER_TYPE = 'user';

export let jwtToken = {
  key: '',
  type: JWT_USER_TYPE,
};

export const initCurrentUser = () => {
  if(typeof window ==="undefined") return
  const tokenByTemplateNet = getCookie(JWT_USER);
  let currentUser = {
    exp: 0,
  };
  try {
    if (tokenByTemplateNet) {
      jwtToken = {
        key: tokenByTemplateNet,
        type: JWT_USER_TYPE,
      };
      currentUser = jwtDecode(tokenByTemplateNet);
      const unixTimestamp = Math.floor(new Date().getTime() / 1000);
      if (currentUser.exp - unixTimestamp < 0) {
        deleteAllCookies();
        return;
      }
      return {
        ...currentUser,
        accessToken: tokenByTemplateNet,
      };
    }
    // eslint-disable-next-line no-empty
  } finally {
  }
  return currentUser;
};
