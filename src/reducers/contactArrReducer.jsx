import { ADD_CONTACT, DELETE_CONTACT, SAVE_CONTACT, FAVOURITE_CONTACT } from '../actions/actionTypes';

export const contactArrReducer = (state = [], action) => {
  if (action.type === ADD_CONTACT) {
    return [
      ...state,
      action.payload,
    ];
  }

  if (action.type === DELETE_CONTACT) {
    state = state.filter((el) => el.id !== action.payload);
    return [
      ...state,
    ];
  }

  if (action.type === SAVE_CONTACT) {
    state = state.map(el => {
      if(el.id == action.payload.id) {
        el = action.payload;
      }
      return el;
    });
    return [
      ...state,
    ];
  }

  if(action.type === FAVOURITE_CONTACT) {
    state = state.map(el => {
      if(el.id == action.payload) {
        el.favourite = !el.favourite;
      }
      return el;
    });
    return [
      ...state,
    ];
  }

  return state;
};
