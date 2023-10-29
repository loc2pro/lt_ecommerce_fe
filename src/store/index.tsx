import {  createContext, useReducer } from 'react';
import {
  CURRENT_USER_EXTEND,
  CURRENT_USER_ON_CHANGE,
  LOADED_PAGE,
  LOADING_PAGE,
  REMOVE_CURRENT_USER,
} from './constant';
import { initCurrentUser } from './func';
import { setUserToken } from '@/helpers/user';

interface ICurrentUser {
  id?: null;
  exp?: any;
}
const currentUser: ICurrentUser = {};

const initialState = {
  currentUser,
};
const store = createContext<any>(initialState);
const { Provider } = store;

let dispatchIns;
let getState;

const StateProvider = ({ children }: any) => {
  if (!initialState.currentUser || !initialState.currentUser.id) {
    // change initUSer in StateProvider, issue from async import lib
    const initUser = initCurrentUser();
    if (initUser) {
      initialState.currentUser = initUser;
    }
  }
  let [state, dispatch] = useReducer((state: any, action: any) => {
    const { type, payload } = action;
    switch (type) {
      case CURRENT_USER_ON_CHANGE:
        if (payload && payload.accessToken) {
          setUserToken(payload.accessToken);
        }
        return { ...state, currentUser: payload };

      case REMOVE_CURRENT_USER:
        return { ...state, currentUser: {} };
      case CURRENT_USER_EXTEND:
        if (!payload) {
          return state;
        }
        return { ...state, currentUser: { ...state.currentUser, ...payload } };
      default:
        return state;
    }
  }, initialState);

  // we are using Context as Redux, should create a ticket
  dispatchIns = dispatch;
  getState = state;
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { StateProvider, dispatchIns, getState, store };
