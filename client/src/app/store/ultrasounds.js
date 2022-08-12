import { createSlice } from '@reduxjs/toolkit';
import ultrasoundsService from '../service/ultrasounds.service';

const ultrasoundsSlice = createSlice({
  name: 'ultrasounds',
  initialState: {
    entities: null,
    isLoading: true,
    error: null
  },
  reducers: {
    ultrasoundsRequested: state => {
      state.isLoading = true;
    },
    ultrasoundsReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    ultrasoundsRequestedFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const {reducer: ultrasoundsReducer, actions} = ultrasoundsSlice;
const {ultrasoundsRequested, ultrasoundsReceived, ultrasoundsRequestedFailed} = actions;


export const loadUltrasoundsList = () => async (dispatch) => {
  dispatch(ultrasoundsRequested());
  try {
    const { content } = await ultrasoundsService.get();
    dispatch(ultrasoundsReceived(content));
  } catch (error) {
    dispatch(ultrasoundsRequestedFailed(error.message));
  }
};

export const getUltrasounds = () => state => state.ultrasounds.entities;

export const getUltrasoundsByIds = (ultrasoundsIds) => state => {
  if (state.ultrasounds.entities && ultrasoundsIds) {
    return state.ultrasounds.entities.find(el=>el._id === ultrasoundsIds);
  }
  return [];
};

export default ultrasoundsReducer;