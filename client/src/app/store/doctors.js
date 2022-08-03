import { createSlice } from '@reduxjs/toolkit';
import doctorsService from '../service/doctors.service';

const doctorsSlice = createSlice({
  name: 'doctor',
  initialState: {
    entities: null,
    isLoading: true,
    error: null
  },
  reducers: {
    doctorsRequested: state => {
      state.isLoading = true;
    },
    doctorsReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    doctorsRequestedFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const {reducer: doctorsReducer, actions} = doctorsSlice;
const {doctorsRequested, doctorsReceived, doctorsRequestedFailed} = actions;

export const getDoctors = () => state => state.checkups.entities;

export const loadDoctorsList = () => async (dispatch) => {
  dispatch(doctorsRequested());
  try {
    const { content } = await doctorsService.get();
    dispatch(doctorsReceived(content));
  } catch (error) {
    console.log(error);
    dispatch(doctorsRequestedFailed(error.message));
  }
};

export default doctorsReducer;