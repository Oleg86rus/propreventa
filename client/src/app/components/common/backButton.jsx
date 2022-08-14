import React from 'react';
import {useHistory} from 'react-router-dom';

const BackHistoryButton = () => {
  const history = useHistory();
  
  return (
    <button className='absolute left-16 top-0 inline-flex items-center px-4 py-2 border border-amber-500 rounded-[10px] shadow-sm text-sm font-medium text-black hover:bg-amber-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-500"'
      variant="outline-secondary"
      onClick={() => history.goBack()}>
      <i className="bi bi-caret-left"></i>
            Назад
    </button>
  );
};

export default BackHistoryButton;
