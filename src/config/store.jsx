import { createStore } from 'redux';

import { contactArrReducer } from '../reducers/';

export const store = createStore(contactArrReducer, []);
