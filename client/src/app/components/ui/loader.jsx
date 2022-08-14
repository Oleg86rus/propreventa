import React from 'react';

const Loader = () => {
  return (
    <div className='w-screen h-screen items-center flex flex-col justify-center'>
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
      </svg>
      <div className="animate-spin inline-block w-[150px] h-[150px] border-4 rounded-full" role="status">
      </div>
      <h1 className='mt-5 font-semibold text-amber-800'>Загрузка...</h1>
    </div>
  );
};

export default Loader;