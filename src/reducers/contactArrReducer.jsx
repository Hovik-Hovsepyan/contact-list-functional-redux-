import { ADD_CONTACT, DELETE_CONTACT, SAVE_CONTACT } from '../actions/actionTypes';

export const contactArrReducer = (state = [], action) => {
  if (action.type === ADD_CONTACT) {
    return [
      ...state,
      action.payload,
    ];
  }
  if (action.type === DELETE_CONTACT) {
    return state.filter((_, index) => index !== action.payload);
  }
  if (action.type === SAVE_CONTACT) {
    state[action.payload.changeable] = action.payload.obj;
    return [
      ...state,
    ];
  }
  return state;
};
