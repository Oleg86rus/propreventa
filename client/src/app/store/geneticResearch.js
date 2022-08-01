import { createSlice } from '@reduxjs/toolkit';
import geneticResearchService from '../service/geteticResearch.service';

const geneticResearchSlice = createSlice({
  name: 'geneticResearch',
  initialState: {
    entities: null,
    isLoading: true,
    error: null
  },
  reducers: {
    geneticResearchRequested: state => {
      state.isLoading = true;
    },
    geneticResearchReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    geneticResearchRequestedFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const {reducer: geneticResearchReducer, actions} = geneticResearchSlice;
const {geneticResearchRequested, geneticResearchReceived, geneticResearchRequestedFailed} = actions;

export const loadGeneticResearchList = () => async (dispatch) => {
  dispatch(geneticResearchRequested());
  try {
    const { content } = await geneticResearchService.get();
    dispatch(geneticResearchReceived(content));
  } catch (error) {
    dispatch(geneticResearchRequestedFailed(error.message));
  }
};

export default geneticResearchReducer;