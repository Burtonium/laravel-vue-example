import { STORAGE_KEY } from '../state';
import * as types from '../mutation-types';

const localStoragePlugin = (store) => {
  store.subscribe((mutation, state) => {
    const {
      logged,
      user,
      token,
    } = state;

    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      logged,
      user,
      token,
    }));

    if (mutation.type === types.LOGOUT) {
      localStorage.removeItem(STORAGE_KEY);
    }
  });
};

export default localStoragePlugin;
