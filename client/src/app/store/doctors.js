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


export const loadDoctorsList = () => async (dispatch) => {
  dispatch(doctorsRequested());
  try {
    const { content } = await doctorsService.get();
    dispatch(doctorsReceived(content));
  } catch (error) {
    dispatch(doctorsRequestedFailed(error.message));
  }
};

export const getDoctors = () => state => state.doctors.entities;

export const getDoctorsByIds = (doctorsIds) => state => {
  if (state.doctors.entities && doctorsIds) {
    return state.doctors.entities.find(el=>el._id === doctorsIds);
  }
  return [];
};

export default doctorsReducer;