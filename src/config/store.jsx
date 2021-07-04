import { createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import { contactArrReducer } from '../reducers/';

export const store = createStore(contactArrReducer, composeWithDevTools());
