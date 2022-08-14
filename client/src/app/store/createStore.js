import { combineReducers, configureStore } from '@reduxjs/toolkit';
import checkupsReducer from './checkups';
import doctorsReducer from './doctors';
import geneticResearchReducer from './geneticResearch';
import usersReducer from './users';
import IVTherapyesReducer from './IVTherapyes';
import ultrasoundsReducer from './ultrasounds';
import promoReducer from './promo';

const rootReducer = combineReducers({
  checkups: checkupsReducer,
  doctors: doctorsReducer,
  IVTherapyes: IVTherapyesReducer,
  geneticResearch: geneticResearchReducer,
  users: usersReducer,
  ultrasounds: ultrasoundsReducer,
  promo: promoReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
}