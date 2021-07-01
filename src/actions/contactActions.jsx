import { ADD_CONTACT, DELETE_CONTACT, FAVOURITE_CONTACT, SAVE_CONTACT } from './actionTypes';

export const add = state => {
  return {
    type: ADD_CONTACT,
    payload: state,
  };
};

export const save = (obj, changeable) => {
  return {
    type: SAVE_CONTACT,
    payload: { obj, changeable },
  };
};

export const del = index => {
  return {
    type: DELETE_CONTACT,
    payload: index,
  };
}

export const favourites = index => {
  return {
    type: FAVOURITE_CONTACT,
    payload: index,
  }

};
