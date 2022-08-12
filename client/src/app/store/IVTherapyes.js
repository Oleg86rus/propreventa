import { createSlice } from '@reduxjs/toolkit';
import IVTherapyesService from '../service/IVTherapy.service';

const IVTherapyesSlice = createSlice({
  name: 'IVTherapy',
  initialState: {
    entities: null,
    isLoading: true,
    error: null
  },
  reducers: {
    IVTherapyesRequested: state => {
      state.isLoading = true;
    },
    IVTherapyesReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    IVTherapyesRequestedFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const {reducer: IVTherapyesReducer, actions} = IVTherapyesSlice;
const {IVTherapyesRequested, IVTherapyesReceived, IVTherapyesRequestedFailed} = actions;

export const getIVTherapyes = () => state => state.IVTherapyes.entities;

export const loadIVTherapyesList = () => async (dispatch) => {
  dispatch(IVTherapyesRequested());
  try {
    const { content } = await IVTherapyesService.get();
    dispatch(IVTherapyesReceived(content));
  } catch (error) {
    console.log(error);
    dispatch(IVTherapyesRequestedFailed(error.message));
  }
};
export const getIVTherapyByIds = (IVTherapyesIds) => state => {
  if (state.IVTherapyes.entities && IVTherapyesIds) {
    return state.IVTherapyes.entities.find(el=>el._id === IVTherapyesIds);
  }
  return [];
};

export default IVTherapyesReducer;