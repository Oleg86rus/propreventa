import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadCheckupsList, removeCheckup } from '../../store/checkups';

const BackHistoryButton = () => {
  const {checkupsId} = useParams();
  console.log(checkupsId);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeCheckup(checkupsId));
    dispatch(loadCheckupsList());
    history.goBack();
  };
  
  return (
    <button className='absolute right-16 top-0 inline-flex items-center px-4 py-2 border border-amber-500 rounded-[10px] shadow-sm text-sm font-medium text-black hover:bg-amber-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-500"'
      variant="outline-secondary"
      onClick={() => handleClick()}>
      <i className="bi bi-caret-left"></i>
            Удалить
    </button>
  );
};

export default BackHistoryButton;
