import { createAction, createSlice } from '@reduxjs/toolkit';
import userService from '../service/user.service';
import authService from '../service/auth.service';
import localStorageService from '../service/localStorage.service';
import { generateAuthError } from '../utils/generateAuthError';

const initialState = localStorageService.getAccessToken() ? {
  entities: null,
  isLoading: true,
  error: null,
  auth: { userId: localStorageService.getUserId() },
  isLoggedIn: true,
  dataLoaded: false,
} : {
  entities: null,
  isLoading: false,
  error: null,
  auth: null,
  isLoggedIn: false,
  dataLoaded: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    usersRequested: state => {
      state.isLoading = true;
    },
    usersReceived: (state, action) => {
      state.entities = action.payload;
      state.dataLoaded = true;
      state.isLoading = false;
    },
    usersRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    authRequestSuccess: (state, action) => {
      state.auth = action.payload;
      state.isLoggedIn = true;
    },
    authRequestFailed: (state, action) => {
      state.error =  action.payload;
    },
    userCreated: (state, action) => {
      if (!Array.isArray(state.entities)) {
        state.entities = [];
      }
      state.entities.push(action.payload);
    },
    userLoggedOut: (state) => {
      state.entities = null;
      state.isLoggedIn = false;
      state.auth = null;
      state.dataLoaded = false;
    },
    userUpdate: (state, action) => {
      state.entities[state.entities.findIndex(u=>u._id===action.payload._id)] = action.payload;
    },
    authRequested: (state) => {
      state.error = null;
    },
    addFavourite: (state, action) => {
      state.entities[state.entities.findIndex(u=>u._id===action.payload._id)].favourites = action.payload.favourites;
    },
    // removeFavourite: (state, action) => {
    //   state.favourites = state.favourites.filter(f => f !== action.payload);
    //   localStorage.setItem('FavouriteDoctors', JSON.stringify(state.favourites));
    // }
    
  }
});

const {reducer: usersReducer, actions} = usersSlice;
const {
  usersRequested,
  usersReceived,
  usersRequestFailed,
  authRequestSuccess,
  authRequestFailed,
  userLoggedOut,
  userUpdate,
  addFavourite,
  removeFavourite
} = actions;

const authRequested = createAction('users/authRequested');
const userUpdateRequested = createAction('users/userUpdateRequested');
const userUpdateFailed = createAction('users/userUpdateFailed');
// const addToFavourites = createAction('users/addToFavourites');

export const addToFavourite = (payload) => async (dispatch) => {
  // dispatch(addToFavourites());
  try {
    const { content } = await userService.update(payload);
    dispatch(addFavourite(content));
  } catch (e) {
    console.log(e.message);
  }
};

export const login = ({ payload }) => async (dispatch) => {
  const {email, password} = payload;
  dispatch(authRequested());
  try {
    const data = await authService.login({email, password});
    localStorageService.setTokens(data);
    dispatch(authRequestSuccess({ userId: data.userId }));
  } catch (error) {
    const {code, message} = error.response.data.error;
    if (code === 400) {
      const errorMessage = generateAuthError(message);
      dispatch(authRequestFailed(errorMessage));
    } else {
      dispatch(authRequestFailed(error.message));
    }
  }
};

export const logOut = () => (dispatch) => {
  localStorageService.removeAuthData();
  dispatch(userLoggedOut());
};

export const sighUp = (payload) => async (dispatch) => {
  dispatch(authRequested());
  try {
    const data = await authService.register(payload);
    console.log(data);
    localStorageService.setTokens(data);
    dispatch(authRequestSuccess({ userId: data.userId }));
    // history.push('/');
  } catch (error) {
    dispatch(authRequestFailed(error.message));
  }
};

export const loadUsersList = () => async (dispatch) => {
  dispatch(usersRequested());
  try {
    const { content } = await userService.get();
    dispatch(usersReceived(content));
  } catch (error) {
    dispatch(usersRequestFailed(error.message));
  }
};

export const updateUser = (payload) => async (dispatch) => {
  dispatch(userUpdateRequested());
  try {
    const {content} = await userService.update(payload);
    dispatch(userUpdate(content));
    history.push(`/users/${content._id}`);
  } catch (error) {
    dispatch(userUpdateFailed(error.message));
  }
};

export const getCurrentUserData = () => state => {
  return state.users.entities ? state.users.entities.find(u=>u._id === state.users.auth.userId) : null;
};
export const getUserById = (userId) => state => {
  if (state.users.entities) return state.users.entities.filter(u => u._id === userId);
};
export const getIsLoggedIn = () => state => state.users.isLoggedIn;
export const getCurrentUserId = () => state => state.users.auth.userId;
export const getAuthErrors = () => state => state.users.error;
export default usersReducer;