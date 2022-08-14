import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadCheckupsList, removeCheckup } from '../../store/checkups';
import { getCurrentUserId, getUserById } from '../../store/users';

const DeleteButton = ({id}) => {
  const userId = useSelector(getCurrentUserId());
  const user  = useSelector(getUserById(userId));

  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeCheckup(id));
    dispatch(loadCheckupsList());
    history.goBack();
  };
  
  return (
    <>
      { user.admin ? <button className='absolute right-16 top-0 inline-flex items-center px-4 py-2 border border-amber-500 rounded-[10px] shadow-sm text-sm font-medium text-black hover:bg-amber-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-500"'
        variant="outline-secondary"
        onClick={() => handleClick()}>
        <i className="bi bi-caret-left"></i>
            Удалить
      </button>
        : null}
    </>
  );
};

export default DeleteButton;
