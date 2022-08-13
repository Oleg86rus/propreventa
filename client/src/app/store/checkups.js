import { createAction, createSlice } from '@reduxjs/toolkit';
import checkupsService from '../service/checkups.service';

const checkupsSlice = createSlice({
  name: 'checkup',
  initialState: {
    entities: null,
    isLoading: true,
    error: null
  },
  reducers: {
    checkupsRequested: state => {
      state.isLoading = true;
    },
    checkupsReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    checkupsRequestedFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    checkupsCreated: (state, action) => {
      state.entities.push(action.payload);
    },
    checkupsRemoved: (state, action) => {
      state.entities = state.entities.filter( checkup => checkup._id !== action.payload);
    }
  }
});

const {reducer: checkupsReducer, actions} = checkupsSlice;
const {checkupsRequested, checkupsReceived, checkupsRequestedFailed, checkupsCreated, checkupsRemoved} = actions;

const addCheckupRequested = createAction('checkups/addCheckup');
const removeCheckupRequested = createAction('checkups/removeCheckup');


export const loadCheckupsList = () => async (dispatch) => {
  dispatch(checkupsRequested());
  try {
    const { content } = await checkupsService.get();
    dispatch(checkupsReceived(content));
  } catch (error) {
    dispatch(checkupsRequestedFailed(error.message));
  }
};
export const getCheckups = () => state => state.checkups.entities;
export const getCheckupsLoadingStatus = () => state => state.checkups.isLoading;
export const getCheckupsByIds = (checkupsIds) => state => {
  if (state.checkups.entities && checkupsIds) {
    return state.checkups.entities.find(el=>el._id === checkupsIds);
  }
  return [];
};
export const createCheckup = (payload) => async (dispatch) => {
  dispatch(addCheckupRequested());
  try {
    const {content} = await checkupsService.create(payload);
    dispatch(checkupsCreated(content));
  } catch (error) {
    dispatch(checkupsRequestedFailed(error.message));
  }
};
export const removeCheckup = (checkupId) => async (dispatch) => {
  dispatch(removeCheckupRequested());
  try {
    const {content} = await checkupsService.remove(checkupId);
    if (!content) {
      dispatch(checkupsRemoved(checkupId));
    }
  } catch (error) {
    dispatch(checkupsRequestedFailed(error.message));
  }
};
export default checkupsReducer;