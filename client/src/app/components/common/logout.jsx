import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/users';
const LogOut = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logOut());
  }, []);
  return 'loading';
};
export default LogOut;