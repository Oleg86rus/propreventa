import { createSlice } from '@reduxjs/toolkit';
import droppersService from '../service/droppers.service';

const droppersSlice = createSlice({
  name: 'dropper',
  initialState: {
    entities: null,
    isLoading: true,
    error: null
  },
  reducers: {
    droppersRequested: state => {
      state.isLoading = true;
    },
    droppersReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    droppersRequestedFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const {reducer: droppersReducer, actions} = droppersSlice;
const {droppersRequested, droppersReceived, droppersRequestedFailed} = actions;

export const getDroppers = () => state => state.droppers.entities;

export const loadDroppersList = () => async (dispatch) => {
  dispatch(droppersRequested());
  try {
    const { content } = await droppersService.get();
    dispatch(droppersReceived(content));
  } catch (error) {
    dispatch(droppersRequestedFailed(error.message));
  }
};
export const getDroppersByIds = (droppersIds) => state => {
  if (state.droppers.entities && droppersIds) {
    return state.droppers.entities.find(el=>el._id === droppersIds);
  }
  return [];
};

export default droppersReducer;