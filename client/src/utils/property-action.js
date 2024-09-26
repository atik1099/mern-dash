// client/src/store/actions/propertyActions.js

import { ADD_SOLD_PROPERTY, ADD_RENT_PROPERTY } from './types';

export const addSoldProperty = (property) => {
  return { type: ADD_SOLD_PROPERTY, property };
};

export const addRentProperty = (property) => {
return { type: ADD_RENT_PROPERTY, property };
};