import { combineReducers, configureStore } from '@reduxjs/toolkit';
import checkupsReducer from './checkups';
import doctorsReducer from './doctors';
import geneticResearchReducer from './geneticResearch';
import usersReducer from './users';
import IVTherapyesReducer from './IVTherapyes';

const rootReducer = combineReducers({
  checkups: checkupsReducer,
  doctors: doctorsReducer,
  IVTherapyes: IVTherapyesReducer,
  geneticResearch: geneticResearchReducer,
  users: usersReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
}