import { combineReducers, configureStore } from '@reduxjs/toolkit';
import checkupsReducer from './checkups';
import doctorsReducer from './doctors';
import droppersReducer from './droppers';
import geneticResearchReducer from './geneticResearch';

const rootReducer = combineReducers({
  checkups: checkupsReducer,
  doctors: doctorsReducer,
  droppers: droppersReducer,
  geneticResearch: geneticResearchReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
}