// client/src/store/reducers/propertyReducer.js

import { combineReducers } from 'redux';

const initialState = {
  soldProperties: [],
  rentProperties: []
};

const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SOLD_PROPERTY':
      return { ...state, soldProperties: [...state.soldProperties, action.property] };
    case 'ADD_RENT_PROPERTY':
      return { ...state, rentProperties: [...state.rentProperties, action.property] };
    default:
      return state;
  }
};

export default combineReducers({ property: propertyReducer });