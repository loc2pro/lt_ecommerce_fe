import { JWT_USER, JWT_USER_TYPE, jwtToken } from '@/store/func';
import jwtDecode from 'jwt-decode';

import { setCookie } from './cookie';

export const setUserToken = async (token: string, userId?: Number) => {
  if (!token) return;
  jwtToken.key = token;
  jwtToken.type = JWT_USER_TYPE;
  const { exp } = jwtDecode(token) as {
    exp: number;
  };
  const timeExpires = new Date((exp - 3600) * 1000);

  setCookie(JWT_USER, token, timeExpires);
  jwtDecode(token);
};
