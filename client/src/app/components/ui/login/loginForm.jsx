import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthErrors, login } from '../../../store/users';
import TextField from '../../common/form/textField';
import { validator } from '../../../utils/validator';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loginError = useSelector(getAuthErrors());
  const [data, setData] = useState({ email: '', password: '', stayOn: false });
  const [errors, setErrors] = useState({});
  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  
  const validatorConfig = {
    email: {
      isRequired: {
        message: 'Электронная почта обязательна для заполнения'
      }
    },
    password: {
      isRequired: {
        message: 'Пароль обязателен для заполнения'
      }
    }
  };
  
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  useEffect(() => {
    validate();
  },
  [data]);
  const isValid = Object.keys(errors).length === 0;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    dispatch(login({payload: data}));
    setTimeout(() => {
      history.push('/');
    }, 500);
  };
  
  return (
    <form className="mt-2 space-y-6" onSubmit={handleSubmit}>
      <TextField
        label="Электронная почта"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
        htmlFor="email-address"
      />
      <TextField
        label="Пароль"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
        htmlFor="password"
      />
      {loginError&&<p className='text-red-600 text-xs mt-1 mb-3'>{loginError}</p>}
      <button className="w-full items-center px-4 py-2 border border-amber-500 rounded-lg shadow-sm text-sm font-medium text-black hover:bg-amber-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600 transition-all duration-500"
        disabled={!isValid} type='submit'>Войти в личный кабинет
      </button>
    </form>
  );
};

export default LoginForm;