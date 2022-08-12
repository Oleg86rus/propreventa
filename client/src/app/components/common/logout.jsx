import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/users';
import MainPage from '../../pages/mainPage';
import { useHistory } from 'react-router-dom';
const LogOut = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(logOut());
    history.push('/');
  }, []);
  return <MainPage/>;
};
export default LogOut;