import { combineReducers, configureStore } from '@reduxjs/toolkit';
import checkupsReducer from './checkups';
import doctorsReducer from './doctors';
import droppersReducer from './droppers';
import geneticResearchReducer from './geneticResearch';
import usersReducer from './users';

const rootReducer = combineReducers({
  checkups: checkupsReducer,
  doctors: doctorsReducer,
  droppers: droppersReducer,
  geneticResearch: geneticResearchReducer,
  users: usersReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
}