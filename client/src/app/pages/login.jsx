import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import RegisterForm from '../components/ui/login/registerForm';
import LoginForm from '../components/ui/login/loginForm';
import NavBar from '../components/ui/navBar/navBar';

const Login = () => {
  const { type } = useParams();
  const [formType, setFormType] = useState(type === 'register'
    ? type
    : 'login');
  const toggleFormType = () => {
    setFormType(prevState => prevState === 'register'
      ? 'login'
      : 'register');
  };
  
  return (
    <div className='min-h-[700px]'>
      <NavBar/>
      <div className="container mx-auto mt-5 items-center">
        <div className=" min-h-full flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
          {formType === 'register'
            ? (
              <>
                <h3 className="mt-6 mb-3 text-center text-3xl font-extrabold text-gray-900">Регистрация</h3>
                <div className="max-w-md w-full space-y-8 bg-white rounded-[15px] p-5 border border-amber-600">
                  <RegisterForm/>
                  <p>Уже есть аккаунт? <a role="button"
                    onClick={toggleFormType}><em className='underline-offset-1'>Авторизоваться</em></a>
                  </p>
                </div>
              </>
            )
            : (
              <>
                <h3 className="mt-6 mb-3 text-center text-3xl font-extrabold text-gray-900">Вход</h3>
                <div className="max-w-md w-full space-y-8 bg-white rounded-[15px] p-5 border border-amber-600">
                  <LoginForm/>
                  <p>Еще нет аккаунта? <a role="button" className='underline-offset-1'
                    onClick={toggleFormType}>Зарегистрироваться</a>
                  </p>
                </div>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Login;