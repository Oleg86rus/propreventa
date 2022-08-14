import { createSlice } from '@reduxjs/toolkit';
import promoService from '../service/doctors.service';

const promoSlice = createSlice({
  name: 'doctor',
  initialState: {
    entities: null,
    isLoading: true,
    error: null
  },
  reducers: {
    promoRequested: state => {
      state.isLoading = true;
    },
    promoReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    promoRequestedFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const {reducer: promoReducer, actions} = promoSlice;
const {promoRequested, promoReceived, promoRequestedFailed} = actions;


export const loadPromoList = () => async (dispatch) => {
  dispatch(promoRequested());
  try {
    const { content } = await promoService.get();
    dispatch(promoReceived(content));
  } catch (error) {
    dispatch(promoRequestedFailed(error.message));
  }
};

export const getPromo = () => state => state.promo.entities;


export default promoReducer;