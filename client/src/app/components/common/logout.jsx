import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/users';
import MainPage from '../../pages/mainPage';
const LogOut = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logOut());
  }, []);
  return <MainPage/>;
};
export default LogOut;